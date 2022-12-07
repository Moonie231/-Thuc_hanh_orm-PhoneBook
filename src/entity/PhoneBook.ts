import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PhoneBook {
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column({ type: "varchar" })
    public note: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    public created_at: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    public updated_at: string;
}