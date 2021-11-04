import db from '../db.js';

import express from 'express'
const Router = express.Router;
const app = Router();

app.get('/', async (req, resp) => {
    try {
        let r = await db.infod_omn_area_vaga.findAll({ order: [['id_area_vaga', 'desc']] });
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

app.post('/', async (req, resp) => {
    try {
        let { areaVaga } = req.body;

        let r = await db.infod_omn_area_vaga.create (
        {
            nm_area_vaga: areaVaga
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

export default app;