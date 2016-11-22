import "reflect-metadata";

import { createConnection } from "typeorm";

import { Covoiturage } from './entity/Covoiturage';
import { User } from './entity/User';
import { database } from './config';

import * as bcrypt from 'bcrypt';

let connection = null;
const saltRound = 10;

export function saveCovoiturage(cov: Covoiturage, callback: Function = _ => { }) {
    let func = connection => {
        connection.entityManager
            .persist(cov)
            .then(covoit => {
                callback(covoit);
            });
    };
    connectAndAct(func);

}

export async function getCovoiturages(): Promise<any> {
    let func = async connection => {
        let rep = connection.getRepository(Covoiturage);
        let res = await rep.createQueryBuilder("covoiturage")
            .leftJoinAndSelect("covoiturage.proposer", "username")
            .getResults();
        return res.map(r => {
            if (r.proposer) delete r.proposer.password;
            return r;
        });
    };
    return await connectAndAct(func);
}

export async function checkUser(username: string, password: String) {
    let func = async connection => {
        let users = await getUser(username);
        if (users.length == 1) {
            var user: User = users.shift();
            return bcrypt.compareSync(password, user.password);
        }
        return false;
    }
    return await connectAndAct(func);
}

export async function getUser(username: string): Promise<any> {
    let func = async connection => {
        let rep = connection.getRepository(User);
        return await rep.find({ username: username });
    }
    return await connectAndAct(func);
}

export async function saveUser(user: string | User, password?: string) {
    let func = async connection => {
        let rep = connection.getRepository(User);
        if (typeof user === "string") {
            var hash = bcrypt.hashSync(password, saltRound);
            user = new User(user, hash);
        }
        let persisted = await rep.persist(user);
        return true;
    }
    return connectAndAct(func);
}

async function connectAndAct(callback: (params) => void = _ => { }) {
    if (connection == null) {
        let nwConnection = await createConnection(database);
        connection = nwConnection;
        return await callback(nwConnection);
    } else {
        return await callback(connection);
    }
}