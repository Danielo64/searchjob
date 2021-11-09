import candidatoController from './controller/candidatoController.js'
import curriculoController from './controller/curriculoController.js'
import empresaController from './controller/empresaController.js'
import vagaController from './controller/vagaController.js'
import areaController from './controller/areaController.js'
import loginController from './controller/loginController.js'

import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/candidato', candidatoController);
app.use('/curriculo', curriculoController);
app.use('/empresa', empresaController);
app.use('/vaga', vagaController);
app.use('/area', areaController);
app.use('/login', loginController);

app.listen(process.env.PORT,
            x => console.log(`Server up at port ${process.env.PORT}`))