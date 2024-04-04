import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Phase } from "../phase/phase.entity";
import { Postulation } from "../postulation/postulation.entity";
import { User } from "src/user/user.entity";
import { CommissionHeadquarter } from "../commission_headquarter/commission_headquarter.entity";

@Entity({schema:'public',name:'postulation_phase'})
export class PostulationPhase{

    @PrimaryGeneratedColumn()
    id: number

    @Column({comment:'Calificacion de la fase de la postulación'})
    qualification:number

    @Column({comment:'Valor que muestra si paso la fase'})
    pass_phase:boolean

    @ManyToOne(() => Phase, (Phase) => Phase,{nullable:false})
    @JoinColumn({name: 'previus_phase_id'})
    previusPhase: Phase

    @ManyToOne(() => Phase, (Phase) => Phase,{nullable:false})
    @JoinColumn({name: 'current_phase_id'})
    currentPhase: Phase

    @ManyToOne(() => Postulation, (Postulation) => Postulation,{nullable:false})
    @JoinColumn({name: 'postulation_id'})
    postulation: Postulation

    @ManyToOne(() => User, (User) => User,{nullable:false})
    @JoinColumn({name: 'user_id'})
    user: User

    @Column({ type:'varchar', length: 200,nullable:true})
    code: string

    @ManyToOne(() => CommissionHeadquarter, (CommissionHeadquarter) => CommissionHeadquarter,{nullable:true})
    @JoinColumn({name: 'commission_headquarter_id'})
    commissionHeadquarter: CommissionHeadquarter

    @Column({nullable:true})
    date_presentation: Date
  
     //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
     
    @Column({ type:'int',nullable:false})
    created_by: number
     
    @UpdateDateColumn({nullable:true})
    updated_at:Date
     
    @Column({ type:'int',nullable:true})
    updated_by: number

    @DeleteDateColumn({nullable: true})
    deleted_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    deleted_by: number
}