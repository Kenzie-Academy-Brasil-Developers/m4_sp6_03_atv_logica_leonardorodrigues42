import { Request, Response } from 'express'
import subjectRegistrationService from '../../services/subject/subjectRegistration.service'

const subjectRegistrationController = async (req: Request, res: Response) => {
    const {student_id} = req.body
    const {subject_id} = req.params

    const registered = await subjectRegistrationService(student_id, subject_id)

    return res.status(201).json(registered)

}

export default subjectRegistrationController