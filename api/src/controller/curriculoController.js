import db from '../db.js';

import express from 'express'
const Router = express.Router;
const app = Router();

app.get('/', async (req, resp) => {
    try {
        let r = await db.infod_omn_curriculo.findAll({ order: [['id_curriculo', 'desc']] });
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/', async (req, resp) => {
    try {
        let { objetivo, formacao, experiencia, idioma, atividade } = req.body;

        let r = await db.infod_omn_curriculo.create (
        {
            ds_objetivo: objetivo,
            ds_formacao_academica: formacao,
            ds_experiencia_profissional: experiencia,
            ds_idioma: idioma,
            ds_atividade_complementar: atividade
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.put('/:id', async (req, resp) => {
    try {
        let { objetivo, formacao, experiencia, idioma, atividade } = req.body;
        let { id } = req.params;

        let r = await db.tb_matricula.update(
            {
                ds_objetivo: objetivo,
                ds_formacao_academica: formacao,
                ds_experiencia_profissional: experiencia,
                ds_idioma: idioma,
                ds_atividade_complementar: atividade
            },
            {
                where: { id_curriculo: id }
            }
        )
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.delete('/:id', async (req, resp) => {
    try {
        let { id } = req.params;

        let r = await db.infod_omn_curriculo.destroy({ where: { infod_omn_curriculo: id } });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

export default app;