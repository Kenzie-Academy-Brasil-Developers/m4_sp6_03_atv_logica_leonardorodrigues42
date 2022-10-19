import { Request, Response } from 'express'
import subjectCreateService from '../../services/subject/subjectCreate.service'

const subjectCreateController = async (req: Request, res: Response) => {
    const {name, weekly_hours} = req.body

    const CreatedSubject = await subjectCreateService(name, weekly_hours)

    return res.status(201).json(CreatedSubject)
}

export default subjectCreateController