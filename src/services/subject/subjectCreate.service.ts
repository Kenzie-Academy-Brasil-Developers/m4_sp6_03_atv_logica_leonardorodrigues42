import { AppDataSource } from "../../data-source"
import { Subject } from "../../entities/subject.entity"
import { AppError } from "../../errors/appError"

const subjectCreateService = async (name: string, weekly_hours: number) => {
    const subjectRepository = AppDataSource.getRepository(Subject)

    const subject = await subjectRepository.findOneBy({name})

    if (subject) {
        throw new AppError(400, "This subject already exists")
    }

    const createdSubject = subjectRepository.create({name, weekly_hours})

    await subjectRepository.save(createdSubject)

    return createdSubject
}

export default subjectCreateService