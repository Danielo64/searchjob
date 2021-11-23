import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'

import { useState } from 'react'

import { Container } from './styled'

import Api from '../../services/api'
const api = new Api();

export default function Index() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [localidade, setLocal] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [atuacao, setAtuacao] = useState('');
    const [porte, setPorte] = useState('');
    const [imagem, setImagem] = useState('');

    async function cadastrarEmp() {
        let r = await api.inserirEmpresa(nome, email, senha, localidade, cnpj, atuacao, porte, imagem);

        if (r.erro)
            toast.error(r.erro);
        else {
            toast.dark('💕 Cadastrado com sucesso!');
        }
    }
    
    return (
        <Container>
            <ToastContainer />
            <div class="cabecalho">
            <div class="imagem-cabecalho"> 
                <div class="logo">
                  <img src="assets/searchjob-logo.png" alt="" />
                </div>

                <div class="descricao">Cadastre-se e se conecte com milhões de profissionais!</div>
            </div>     
        </div>

        <div class="corpo-cadastro">
            <div class="voceEEmpresa">Você é um candidato? <Link to="/cadastro-candidato"> <u>Cadastre-se aqui</u> </Link> </div>

            <div class="nome-input"><input type="name" placeholder="Nome da empresa" value={nome} onChange={e => setNome(e.target.value)}/> </div>
            <div class="email-input"><input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/> </div>
            <div class="senha-input"><input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/> </div>
            
            <div class="box-input-cima">
                <div class="localidade-input"><input type="location" placeholder="Localidade" value={localidade} onChange={e => setLocal(e.target.value)}/> </div>
                <div class="cnpj-input"><input type="cnpj" placeholder="CNPJ" value={cnpj} onChange={e => setCnpj(e.target.value)}/> </div>
            </div>

            <div class="box-input-baixo">
                <div class="area-input"><input type="civil" placeholder="Área de atuação" value={atuacao} onChange={e => setAtuacao(e.target.value)}/> </div>
                <div class="porte-input"><input type="porte" placeholder="Porte da Empresa" value={porte} onChange={e => setPorte(e.target.value)}/> </div>
            </div>
                
            <div class="adicionar-input"><input type="add" placeholder="Link da imagem" value={imagem} onChange={e => setImagem(e.target.value)}/> </div>

            <div class="button-cadastrar"> <button onClick={cadastrarEmp}>Cadastrar-se</button> </div>
            
            <div class="possuiCadastro">Já possui um cadastro? <Link to="/"> <u>Fazer Login</u> </Link> </div>
        </div>
        </Container>
    )
}