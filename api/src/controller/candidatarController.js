import db from '../db.js';

import express from 'express'
const Router = express.Router;
const app = Router();

app.post('/', async (req, resp) => {
    let login = req.body;

    let r = await db.infod_omn_candidato.findOne(
        {
            where: { 
                ds_email: login.email, 
                ds_senha: login.senha 
            }
        });

    if (r == null)
        return resp.send({ erro: 'Credenciais inválidas' });

    resp.sendStatus(200);
});