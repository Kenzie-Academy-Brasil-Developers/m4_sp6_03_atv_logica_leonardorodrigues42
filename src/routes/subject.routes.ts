import { Router } from "express";
import subjectCreateController from "../controllers/subject/subjectCreate.controller";
import subjectListByIdController from "../controllers/subject/subjectListById.controller";
import subjectRegistrationController from "../controllers/subject/subjectRegistration.controller";

const router = Router()

export const subjectRouter = () => {
    router.post("/", subjectCreateController)
    router.get("/:subject_id", subjectListByIdController)
    router.post("/:subject_id", subjectRegistrationController)

    return router
}