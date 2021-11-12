import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { Container } from './styled'

import Api from '../../services/api'
const api = new Api();

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useHistory();

    const loading = useRef(null);

    const logarCa = async () => {
        let r = await api.loginCandidato(email, senha);
        if (r.erro) {
            toast.error(r.erro);
        } else {
            toast.dark('💕 Logado com sucesso!');
            navigation.push('/')
        }
    }

    const logarEmp = async () => {
        let r = await api.loginEmpresa(email, senha);
        if (r.erro) {
            alert(`${r.erro}`)
        } else {
            navigation.push('/')
        }
    }
    
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#119FDC" ref={loading} />
            <div class="cabecalho">
            <div class="imagem-cabecalho"> 
                
                <div class="logo">  
                    <Link to="/">
                        <img src="assets/searchjob-logo.png" alt="" />
                    </Link>
                </div>
                <div class="texto-login">Por favor, faça login para continuar.</div> 
            </div>
        </div>

        <div class="corpo-login">
            <div class="email-input"><input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/></div>
            <div class="senha-input"><input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/></div>

            <div class="button-entrar" onClick={logarCa || logarEmp}> <Link to="/"> <button>Entrar</button> </Link> </div>

            <div class="nao-tem-conta"> Não tem uma Conta? </div>
            <div class="cadastre-se"> Cadastre-se como <Link to="/cadastro-candidato"> <u>Candidato</u> </Link> ou <Link to="cadastro-empresa"> <u>Empresa</u> </Link> </div>
        </div>
        </Container>
    )
}