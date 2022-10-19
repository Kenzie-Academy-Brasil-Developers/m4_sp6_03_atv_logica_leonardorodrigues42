import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity()
export class Subject {
    
    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column('int')
    weekly_hours: number

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}