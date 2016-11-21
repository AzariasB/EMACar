import { Table,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne } from "typeorm";
import { User } from './User';

@Table()
export class Covoiturage{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({
        length : '128'
    })
    from : string;

    @Column({
        length : '128'
    })
    to : string;

    @Column("text",{
        nullable : true
    })
    steps : string;

    @Column("date")
    date:  Date;

    @Column("text",{
        nullable : true
    })
    description : string;

    @ManyToOne(type => User,user => user.username)
    proposer : User;
}