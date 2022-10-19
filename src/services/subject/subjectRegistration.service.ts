import { AppDataSource } from "../../data-source"
import { Student } from "../../entities/student.entity"
import { Subject } from "../../entities/subject.entity"
import { AppError } from "../../errors/appError"

const subjectRegistrationService = async (student_id: string, subject_id: string) => {
    const subjectRepository = AppDataSource.getRepository(Subject)
    const studentRepository = AppDataSource.getRepository(Student)

    const student = await studentRepository.findOneBy({id: student_id})
    const subject = await subjectRepository.findOne({
        where: {
            id: subject_id
        },
        relations: {
            students: true
        }
    })

    if (!student || !subject) {
        throw new AppError(404, "Student ou subject not found")
    }

    if (subject.students && subject.students.filter(student => 
        student.id === student_id).length > 0){

            throw new AppError(409, "This students already registered in subjetct")
    }

    subject.students = [...subject.students, student]
    
    await subjectRepository.save(subject)

    return `Student ${student.name} registered for ${subject.name} succesfully`
}

export default subjectRegistrationService