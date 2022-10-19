import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Student } from "./student.entity";

@Entity()
export class Subject {
    
    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column('int')
    weekly_hours: number

    @ManyToMany(() => Student)
    @JoinTable()
    students: Student[]

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}