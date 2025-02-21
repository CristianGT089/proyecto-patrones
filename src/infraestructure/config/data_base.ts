import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

dotenv.config();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // No usar en production
    logging: true,
    entities: [User],
});
//Conexión a la DB
export const connectDB = async ()=>{
    try{
        await AppDataSource.initialize();
        console.log("Connect to database");
    }catch(error){
        console.log("Error dont connect: " + error);
        process.exit(1);
    }
}
