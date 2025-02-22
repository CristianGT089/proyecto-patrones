import { Repository } from "typeorm";
import { AppDataSource } from "../config/data_base";
import { CallPort } from "../../domain/ports/CallPort";
import { Call as CallDomain } from "../../domain/entities/Call";
import { Call as CallEntity } from "../entities/Call";
import { Client } from "../entities/Client";
import { User } from "../entities/User";


export class CallAdapter implements CallPort {
  private callRepository: Repository<CallEntity>;

  constructor() {
    this.callRepository = AppDataSource.getRepository(CallEntity);
  }

  private toDomain(call: CallEntity): CallDomain {
    return {
      id: call.id_call,
      clientId: call.client_call.id_client, // Extraer ID del objeto Client
      agentId: call.agent_call.id_user, // Manejar nulo
      date: call.date_call,
      duration: call.duration_call,
      reason: call.reason_call,
      status: call.status_call,
    };
  }

  private toEntity(call: Omit<CallDomain, "id">): CallEntity {
    const callEntity = new CallEntity();

    // Asignar instancias en lugar de números
    callEntity.client_call = new Client();
    callEntity.client_call.id_client = call.clientId;

    if (call.agentId) {
      // Verificar si tiene agente
      callEntity.agent_call = new User();
      callEntity.agent_call.id_user = call.agentId;
    }

    callEntity.date_call = call.date;
    callEntity.duration_call = call.duration;
    callEntity.reason_call = call.reason;
    callEntity.status_call = call.status;

    return callEntity;
  }

  async createCall(call: Omit<CallDomain, "id">): Promise<number> {
    const newCall = this.toEntity(call);
    const savedCall = await this.callRepository.save(newCall);
    return savedCall.id_call;
  }

  async getCallById(id: number): Promise<CallDomain | null> {
    const call = await this.callRepository.findOne({ where: { id_call: id } });
    return call ? this.toDomain(call) : null;
  }

  async getAllCalls(): Promise<CallDomain[]> {
    try {
      const allCalls = await this.callRepository.find();
      console.log("All calls: ", allCalls);
      return allCalls.map(this.toDomain);
    } catch (error) {
      console.error("Error en datos:", error);
      throw new Error("Error al buscar llamadas");
    }
  }

  async updateCall(id: number, call: Partial<CallDomain>): Promise<boolean> {
    const existCall = await this.callRepository.findOne({
      where: { id_call: id },
    });
    if (!existCall) return false;
    Object.assign(existCall, {
      customer_id: call.clientId ?? existCall.client_call,
      agent_id: call.agentId ?? existCall.client_call,
      duration: call.duration ?? existCall.duration_call,
      status: call.status ?? existCall.status_call,
    });
    await this.callRepository.save(existCall);
    return true;
  }

  async deleteCall(id: number): Promise<boolean> {
    const existCall = await this.callRepository.findOne({
      where: { id_call: id },
    });
    if (!existCall) return false;
    existCall.status_call = 0;
    await this.callRepository.save(existCall);
    return true;
  }
}
