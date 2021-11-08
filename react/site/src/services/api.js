import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})

export default class Api {
    // Candidato

    async listarCandidato() {
        let r = await api.get('/candidato');
        return r.data;
    }

    async inserirCandidato() {
        let r = await api.post('/candidato', { nome, email, senha, sexo, imagem, nacionalidade, telefone, nascimento, civil, localidade });
        return r.data;
    }

    async removerCandidato(id) {
        let r = await api.delete('/candidato' + id);
    }
}