import candidatoController from './controller/candidatoController.js'
import curriculoController from './controller/curriculoController.js'

import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/candidato', candidatoController);
app.use('/curriculo', curriculoController);

app.listen(process.env.PORT,
            x => console.log(`Server up at port ${process.env.PORT}`))