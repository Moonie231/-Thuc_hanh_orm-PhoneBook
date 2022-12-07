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
}