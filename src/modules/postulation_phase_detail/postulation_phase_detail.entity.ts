import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostulationPhaseState } from "../postulation_phase_state/postulation_phase_state.entity";
import { PostulationPhase } from "../postulation_phase/postulation_phase.entity";

@Entity({ schema: 'public', name: 'postulation_phase_detail' })
export class PostulationPhaseDetail {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: 0 })
    qualification: number

    @Column({ type: 'varchar', nullable: true })
    file_url: string

    @ManyToOne(() => PostulationPhaseState, (PostulationPhaseState) => PostulationPhaseState, { nullable: false })
    @JoinColumn({ name: 'postulation_phase_state_id' })
    postulationPhaseState: PostulationPhaseState

    @ManyToOne(() => PostulationPhase, (PostulationPhase) => PostulationPhase, { nullable: false })
    @JoinColumn({ name: 'postulation_phase_id' })
    postulationPhase: PostulationPhase

    //columnas para auditoria
    @CreateDateColumn()
    created_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    created_by: number

    @UpdateDateColumn({ nullable: true, select: false })
    updated_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    updated_by: number

    @DeleteDateColumn({ nullable: true, select: false })
    deleted_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    deleted_by: number

}