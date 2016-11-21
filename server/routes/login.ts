import "reflect-metadata";

import { Router, Request, Response, NextFunction } from "express";
import { randomBytes, pbkdf2 } from "crypto";
import { sign } from "jsonwebtoken";
import { secret, length, digest } from "../config";
import { checkUser, saveUser } from '../model';

import Imap = require('imap');


const loginRouter: Router = Router();
const saltRounds = 10;

var isConnecting = false;

// login method
loginRouter.post("/",async function (request: Request, response: Response, next: NextFunction) {

    let resp = {};
    let pwd = request.body.password;
    let user = request.body.username;
    if(user.indexOf('@') > -1) user = user.split('@')[0];

    let successCb = function () {
        const token = sign({ "user": user, permissions: [] }, secret, { expiresIn: "7d" });
        response.json({ jwt: token });
        isConnecting = false;
    }

    if (isConnecting) return;
    isConnecting = true;

    if (await checkUser(user, pwd)) return successCb();


    let imapSucess = async function () {
        if (await saveUser(user, pwd))return successCb();
    }

    let imapError = function (error) {
        response.json({ message: 'Failed to login', source: error.source });
        isConnecting = false;
    }

    imapCheck(user, pwd, imapSucess, imapError);
});

function imapCheck(userName: string, password: string, successCb: Function, failCb: Function) {
    var imap = new Imap({
        user: userName,
        password: password,
        host: 'mail.mines-ales.org',
        port: 143
    });

    imap.connect();

    imap.once('ready', _ => {
        successCb();
        imap.destroy();
    });

    imap.once('error', e => {
        failCb(e);
        imap.destroy();
    });
}

export { loginRouter }
