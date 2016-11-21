import "reflect-metadata";

import { Router, Request, Response, NextFunction } from "express";
import { Covoiturage } from '../entity/Covoiturage';
import { saveCovoiturage, getCovoiturages, getUser, saveUser } from '../model';
import { verify } from "jsonwebtoken";
import { secret } from "../config";

const databaseRouter: Router = Router();

var isConnecting = false;

databaseRouter.use((request: Request & { headers: { authorization: string }, user: Object }, response: Response, next: NextFunction) => {
    const token = request.headers.authorization;

    verify(token, secret, function (tokenError, token) {
        if (tokenError) {
            return response.status(403).json({
                message: "Invalid token, please Log in first"
            });
        }
        request.user = token;
        next();
    });
});

// login method
databaseRouter.post("/list", function (request: Request, response: Response, next: NextFunction) {
    let cb = covoits => {
        covoits = covoits.map(c => {
            c.steps = c.steps.slice(1, -1).replace(/"/g,'').split(',').filter(x=>!!x);
            return c;
        });
        response.json({ covs: covoits });
    }
    getCovoiturages().then(cb);

});

databaseRouter.post('/user', async function (request: Request & { user: any }, response: Response, next: NextFunction) {
    let user = await getUser(request.user.user);
    if (user.length) {
        user = user.shift();
        delete user.password;
    }
    response.json({ user: user });
})

databaseRouter.post('/updateuser', async function (request: Request & { user: any }, response: Response, next: NextFunction) {
    let asker = await getUser(request.user.user);
    if (asker.length) asker = asker.shift();
    if (asker.username === request.body.updated.username) {//Or asker.isAdmin
        asker.phoneNumber = request.body.updated.phoneNumber;
        await saveUser(asker);
        response.json({ user: request.body.updated });
    }

});

databaseRouter.post('/create', async function (request: Request & { user: any }, response: Response, next: NextFunction) {
    let cov = new Covoiturage();
    var resp = request.body;
    let props = ['date', 'description', 'from', 'to', 'steps'];
    props.forEach(a => {
        if (resp[a]) {
            cov[a] = resp[a];
        } else {
            console.log("Property not found", a, resp[a]);
        }
    });
    let users = await getUser(request.user.user);
    cov.proposer = users.shift();

    let cb = covoit => {
        response.json({ covoit: covoit });
    }
    saveCovoiturage(cov, cb);
});

export { databaseRouter }
