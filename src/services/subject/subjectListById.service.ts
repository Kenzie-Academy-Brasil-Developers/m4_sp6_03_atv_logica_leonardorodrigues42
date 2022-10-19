import { AppDataSource } from "../../data-source"
import { Subject } from "../../entities/subject.entity"

const subjectListByIdService = async (subject_id: string) => {
    const subjectRepository = AppDataSource.getRepository(Subject)

    const subject = await subjectRepository.findOne({
        where: {
            id: subject_id
        },
        relations: {
            students: true
        }
    })

    return subject
}

export default subjectListByIdService