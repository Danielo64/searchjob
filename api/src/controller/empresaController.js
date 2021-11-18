import db from '../db.js';

import express from 'express'
const Router = express.Router;
const app = Router();

app.get('/', async (req, resp) => {
    try {
        let r = await db.infod_omn_empresa.findAll({ order: [['id_empresa', 'desc']] });
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/', async (req, resp) => {
    try {
        let { nome, email, senha, localidade, cnpj, atuacao, porte, imagem } = req.body;

        let r = await db.infod_omn_empresa.create (
        {
            nm_empresa: nome,
            ds_email: email,
            ds_senha: senha,
            ds_localidade: localidade,
            ds_cnpj: cnpj,
            ds_area_atuacao: atuacao,
            ds_porte: porte,
            ds_imagem: imagem
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})

app.delete('/:id', async (req, resp) => {
    try {
        let { id } = req.params;

        let r = await db.infod_omn_empresa.destroy({ where: { id_empresa: id } });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

export default app;