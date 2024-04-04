import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Phase } from "../phase/phase.entity";

@Entity({ schema: 'public', name: 'phase_action' })
export class PhaseAction {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 200 })
    name: string;

    @Column({ type: 'varchar', length: 200 })
    action: string;

    @Column({ type: 'varchar', length: 20 })
    name_icon: string

    @Column({ type:'varchar',nullable: false})
    description: string

    @Column("date")
    date_init: Date

    @Column("date")
    date_end: Date

    @ManyToOne(() => Phase, (Phase) => Phase, { nullable: false })
    @JoinColumn({ name: 'phase_id' })
    phase: Phase

    @Column({ type:'varchar',nullable:true})
    type: string

    @Column({ type:'varchar',nullable:true})
    url: string

    //columnas para auditoria
    @CreateDateColumn()
    created_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    created_by: number

    @UpdateDateColumn({ nullable: true, select: false })
    updated_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    updated_by: number

    @DeleteDateColumn()
    deleted_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    deleted_by: number
}