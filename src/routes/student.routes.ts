import { Router } from "express";
import studentCreateController from "../controllers/student/studentCreate.controller";

const router = Router()

export const studentRouter = () => {
    router.post("/", studentCreateController)
    
    return router
}