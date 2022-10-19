import { Request, Response } from "express";
import studantCreteService from "../../services/student/studentCreate.service";

const studentCreateController = async (req: Request, res: Response) => {
    console.log("hello")
    const {name, age, phone} = req.body

    const createdStudent  = await studantCreteService(name, age, phone)

    return res.status(201).json(createdStudent)
}

export default studentCreateController
