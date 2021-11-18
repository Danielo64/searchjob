import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})

export default class Api {
    // Candidato

    async listar() {
        let r = await api.get('/candidato');
        return r.data;
    }
    
    async inserirCandidato(nome, email, senha, nascimento, sexo, nacionalidade, localidade, civil, telefone, imagem) {
        let r = await api.post('/candidato', { nome, email, senha, nascimento, sexo, nacionalidade, localidade, civil, telefone, imagem });
        return r.data;
    }

    // Empresa

    async inserirEmpresa(nome, email, senha, localidade, cnpj, atuacao, porte, imagem) {
        let r = await api.post('/empresa', { nome, email, senha, localidade, cnpj, atuacao, porte, imagem });
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