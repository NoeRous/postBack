import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema:'public',name:'postulation_phase_state'})
export class PostulationPhaseState{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string
}