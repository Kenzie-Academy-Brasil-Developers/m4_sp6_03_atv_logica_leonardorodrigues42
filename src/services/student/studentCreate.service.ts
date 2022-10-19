import { AppDataSource } from "../../data-source"
import { Student } from "../../entities/student.entity"
import { AppError } from "../../errors/appError"

const studantCreteService = async (name: string, age: number, phone: number) => {
    const studentRepository = AppDataSource.getRepository(Student)

    const student = await studentRepository.findOneBy({phone})

    if (student){
        throw new AppError(409, "Student already registred")
    }

    const createdStudent = studentRepository.create({name, age, phone})

    await studentRepository.save(createdStudent)

    return createdStudent
}

export default studantCreteService