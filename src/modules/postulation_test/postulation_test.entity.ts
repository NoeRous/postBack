import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Postulation } from "../postulation/postulation.entity";
import { Test } from "../test/test.entity";
import { truncate } from "fs/promises";
import { PostulationPhase } from "../postulation_phase/postulation_phase.entity";
import { PostulationPhaseState } from "../postulation_phase_state/postulation_phase_state.entity";

@Entity({schema:'public',name:'postulation_test'})
export class PostulationTest{

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true, default:0})
    total_score: number

    @Column({nullable:true})
    test_time:number

    @Column({ type: 'timestamp',nullable:true})
    date_time_init:Date

    @Column({type: 'timestamp',nullable:true})
    date_time_end:Date

    @Column({nullable:true})
    mac:string

    @Column({nullable:true})
    ip:string

    @ManyToOne(() => PostulationPhase, (PostulationPhase) => PostulationPhase,{nullable:false})
    @JoinColumn({name: 'postulation_phase_id'})
    postulationPhase: PostulationPhase

    @ManyToOne(() => PostulationPhaseState, (PostulationPhaseState) => PostulationPhaseState,{nullable:false})
    @JoinColumn({name: 'postulation_phase_state_id'})
    postulationPhaseState: PostulationPhaseState

    @ManyToOne(() => Test, (Test) => Test,{nullable:true})
    @JoinColumn({name: 'test_id'})
    test: Test

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50, select: false,nullable:true})
    created_by: number
    @UpdateDateColumn({nullable:true, select: false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select: false})
    updated_by: number

    @DeleteDateColumn({nullable:true, select: false})
    deleted_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select: false})
    deleted_by: number
}