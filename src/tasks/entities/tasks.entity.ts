import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 300 })
    description: string;

    @Column()
    dueDate: Date;
}
