import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Announcement } from "../announcement/announcement.entity";
import { PublicationType } from "../publication_type/publication_type.entity";

@Entity({schema:'public',name:'publication'})
export class Publication{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 100 })
    title: string

    @Column({ type: 'varchar' })
    description: string

    @Column({ type: 'varchar',nullable:true})
    file_url: string

    @Column()
    date_publication:Date

    @Column({default:true})
    is_active: boolean

    @Column({ type: 'int', nullable: true })
    year: number

    @ManyToOne(() => Announcement, (Announcement) => Announcement,{nullable:true})
    @JoinColumn({name: 'announcement_id'})
    announcement: Announcement

    @ManyToOne(() => PublicationType, (PublicationType) => PublicationType,{nullable:false})
    @JoinColumn({name: 'publication_type_id'})
    publicationType: PublicationType
    
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