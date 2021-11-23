import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Container } from './styled'

import Api from '../../services/api'
const api = new Api();

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = async () => {
        let r = await api.login(email, senha);
        if (r.erro) {
            toast.error(r.erro);
        } else {
            toast.dark('💕 Logado com sucesso!');
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
                <div class="texto-login">Por favor, faça login para continuar.</div> 
            </div>
        </div>

        <div class="corpo-login">
        <div class="loginEmpresa">Você é uma empresa? <Link to="/login-empresa"> <u>Faça login por aqui</u> </Link></div>
                
            <div class="email-input" value={email} onChange={e => setEmail(e.target.value)}><input type="email" placeholder="Email" /></div>
            <div class="senha-input" value={senha} onChange={e => setSenha(e.target.value)}><input type="password" placeholder="Senha"/></div>

            <div class="button-entrar"> <Link to="/"> <button>Entrar</button> </Link> </div>

            <div class="nao-tem-conta"> Não tem uma Conta? </div>
            <div class="cadastre-se"> Cadastre-se <Link to="/"> <u>aqui</u> </Link> </div>
        </div>
        </Container>
    )
}