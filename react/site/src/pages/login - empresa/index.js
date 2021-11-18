import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
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
        <div class="loginCandidato">Você é um candidato? <Link to="/login-candidato"> <u>Faça login por aqui</u> </Link></div>
                
            <div class="email-input" value={email} onChange={e => setEmail(e.target.value)}><input type="email" placeholder="Email" /></div>
            <div class="senha-input" value={senha} onChange={e => setSenha(e.target.value)}><input placeholder="Senha"/></div>

            <div class="button-entrar" > <Link to="/"> <button>Entrar</button> </Link> </div>

            <div class="nao-tem-conta"> Não tem uma Conta? </div>
            <div class="cadastre-se"> Cadastre-se <Link to="/cadastro-empresa"> <u>aqui</u> </Link> </div>
        </div>
        </Container>
    )
}