import { Request, Response } from 'express'
import subjectListByIdService from '../../services/subject/subjectListById.service'

const subjectListByIdController = async (req: Request, res: Response) => {
    const {subject_id} = req.params
    const subjectListById = await subjectListByIdService(subject_id)

    return res.status(200).json(subjectListById)
}

export default subjectListByIdController