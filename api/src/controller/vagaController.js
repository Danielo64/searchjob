import db from '../db.js';

import express from 'express'
const Router = express.Router;
const app = Router();

app.get('/', async (req, resp) => {
    try {
        let r = await db.infod_omn_vaga.findAll({ order: [['id_vaga', 'desc']] });
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

// app.get('/') | com filtros de palavras-chave e salário - página de procura //

// app.get('/') | com filtro de áreas - página de procura

// app.get('/') | com filtro dos nomes das vagas, pela empresa - página de recrutamento //

app.post('/', async (req, resp) => {
    try {
        let { nome, salario, empresa, area, jornada, contrato, quantidade, publicada, descricao, exigencia, beneficio  } = req.body;

        let r = await db.infod_omn_vaga.create (
        {
            nm_vaga: nome,
            vl_salario: salario,
            id_empresa: empresa,
            id_area_vaga: area,
            ds_jornada: jornada,
            tp_contrato: contrato,
            qtd_vaga: quantidade,
            dt_publicada: publicada,
            ds_vaga: descricao,
            ds_exigencia: exigencia,
            ds_beneficio: beneficio
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.put('/:id', async (req, resp) => {
    try {
        let { nome, salario, empresa, area, jornada, contrato, quantidade, data, descricao, exigencia, beneficio  } = req.body;
        
        let { id } = req.params; 

        let r = await db.infod_omn_vaga.update (
            {
                nm_vaga: nome,
                vl_salario: salario,
                id_empresa: empresa,
                id_area_vaga: area,
                ds_jornada: jornada,
                tp_contrato: contrato,
                qtd_vaga: quantidade,
                dt_publicada: data,
                ds_vaga: descricao,
                ds_exigencia: exigencia,
                ds_beneficio: beneficio
            },
            {
                where: { id_vaga: id }
            }
        )
            resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

app.delete('/:id', async (req, resp) => {
    try {
        let { id } = req.params;

        let r = await db.infod_omn_vaga.destroy({ where: { id_vaga: id } });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

export default app;