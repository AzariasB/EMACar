import { Table,Column,PrimaryColumn } from "typeorm";

@Table()
export class User{

    constructor(username : string, hashPwd : string){
        if(!username)return;
        if(username.indexOf('@') > -1){
            username = username.split('@')[0];
        }
        this.username = username;
        [this.prenom,this.nom] = username.split('.').map(a=>{
            if(a){
                return a[0].toUpperCase() + a.slice(1).toLowerCase();
            }
            return '';
        });
        this.mail = this.username + '@mines-ales.org';
        this.password = hashPwd;
    }

    @PrimaryColumn({
        length : '255'
    })
    username : string;

    @Column("string",{
        length : '255'
    })
    nom : string;

    @Column("string",{
        length : '255'
    })
    prenom : string;

    @Column("string",{
        length : '255'
    })
    mail : string;

    @Column("string",{
        length : '255'
    })
    password : string;

    @Column("string",{
        length : '10',
        nullable : true
    })
    phoneNumber : string;
}