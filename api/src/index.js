import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/candidato', async (req, resp) => {
    try {
        
    } catch {

    }
})

app.post('/candidato', async (req, resp) => {
    try {

    } catch {

    }
})

app.put('/candidato/:id')

app.listen(process.env.PORT,
            x => console.log(`Server up at port ${process.env.PORT}`))