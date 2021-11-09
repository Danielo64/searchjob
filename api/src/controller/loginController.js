import db from '../db.js';

import express from 'express'
const Router = express.Router;
const app = Router();

app.post('/', async (req, resp) => {
    let loginCandidato = req.body;

    let r = await db.infod_omn_candidato.findOne(
        {
            where: { 
                ds_email: loginCandidato.email, 
                ds_senha: loginCandidato.senha 
            }
        });

    if (r == null)
        return resp.send({ erro: 'Credenciais inválidas' });

    resp.sendStatus(200);
});

app.post('/', async (req, resp) => {
    let loginEmpresa = req.body;

    let r = await db.infod_omn_empresa.findOne(
        {
            where: {
                ds_email: loginEmpresa.email,
                ds_senha: loginEmpresa.senha
            }
        });
    
    if (r = null)
        return resp.send({ erro: 'Credenciais inválidas' });
    
    resp.sendStatus(200);
})

export default app;