import { Express } from 'express'
import { studentRouter } from './student.routes'
import { subjectRouter } from './subject.routes'

export const appRoutes = (app: Express) => {
    app.use("/students", studentRouter())
    app.use("/subjects", subjectRouter())
}