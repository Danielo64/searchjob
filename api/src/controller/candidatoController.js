import db from '../db.js';

import express from 'express'
const Router = express.Router;
const app = Router();

app.get('/', async (req, resp) => {
    try {
        let r = await db.infod_omn_candidato.findAll({ order: [['id_candidato', 'desc']] });
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/', async (req, resp) => {
    try {
        let { nome, email, senha, sexo, imagem, nacionalidade, telefone, nascimento, civil, localidade } = req.body;

        let r = await db.infod_omn_candidato.create (
        {
            nm_candidato: nome,
            ds_email: email,
            ds_senha: senha,
            ds_sexo: sexo,
            img_candidato: imagem,
            ds_nacionalidade: nacionalidade,
            ds_telefone: telefone,
            dt_nascimento: nascimento,
            ds_estado_civil: civil,
            ds_localidade: localidade
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.delete('/:id', async (req, resp) => {
    try {
        let { id } = req.params;

        let r = await db.infod_omn_candidato.destroy({ where: { id_candidato: id } });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

export default app;