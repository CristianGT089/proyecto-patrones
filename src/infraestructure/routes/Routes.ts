import { Router } from "express";
import userRoutes from "./UserRoutes";
import clientRoutes from "./ClientRoutes";
import callRoutes from "./CallRoutes";
import ticketRoutes from "./TicketRoutes";

const router = Router();

// Agrupar rutas por entidad
router.use("/api", userRoutes);
router.use("/api", clientRoutes);
router.use("/api", callRoutes);
router.use("/api", ticketRoutes);

export default router;
