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
        let { nome, email, senha, nascimento, sexo, nacionalidade, localidade, civil, telefone, imagem } = req.body;

        let r = await db.infod_omn_candidato.create (
        {
            nm_candidato: nome,
            ds_email: email,
            ds_senha: senha,
            dt_nascimento: nascimento,
            ds_sexo: sexo,
            ds_nacionalidade: nacionalidade,
            ds_localidade: localidade,
            ds_estado_civil: civil,
            ds_telefone: telefone,
            img_candidato: imagem
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
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