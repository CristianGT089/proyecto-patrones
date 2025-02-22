import { Router } from "express";
import { ClientAdapter } from "../adapter/ClientAdapter";
import { ClientApplicationService } from "../../application/ClientApplicationService";
import { ClientController } from "../controller/ClientController";

const router = Router();

//Inicializamos las capas
const clientAdapter = new ClientAdapter();
const clientAppService = new ClientApplicationService(clientAdapter);
const clientController = new ClientController(clientAppService);

//Definir rutas con manejo de errores
router.get("/clients", async (req,res)=>{
    await clientController.getAllClients(req,res);
});
router.post("/clients", async (req, res) => {
    try {
        await clientController.createClient(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error en la creación de cliente", error });
    }
});
router.put("/clients", async (req, res) => {
    try {
        await clientController.updateClient(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error en la creación de cliente", error });
    }
});
router.delete("/Clients/id/:id", async (req, res) => {
    try {
        await clientController.deleteClient(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar cliente", error });
    }
});
router.get("/clients/email/:email", async (req, res) => {
    try {
        await clientController.getClientByEmail(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar cliente", error });
    }
});
router.get("/clients/id/:id", async (req, res) => {
    try {
        await clientController.getClientById(req, res);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar cliente", error });
    }
});

export default router;