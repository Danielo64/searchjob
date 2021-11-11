import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})

export default class Api {
    // Candidato

    async inserirCandidato(nome, email, senha, sexo, imagem, nacionalidade, telefone, nascimento, civil, localidade) {
        let r = await api.post('/candidato', { nome, email, senha, sexo, imagem, nacionalidade, telefone, nascimento, civil, localidade });
        return r.data;
    }

    // Empresa

    async inserirEmpresa(nome, email, senha, cnpj, localidade, atuacao, porte, imagem) {
        let r = await api.post('/empresa', { nome, email, senha, cnpj, localidade, atuacao, porte, imagem });
        return r.data;
    }

    // Login

    async login(email, senha) {
        let r = await api.post('/login', { email, senha })
        return r.data;
    }

    // Busca de Vaga

    async listarVaga() {
        let r = await api.get('/vaga');
        return r.data;
    }
}