import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { Container } from './styled'

import Api from '../../services/api'
const api = new Api();

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useHistory();

    const logar = async () => {
        let r = await api.login(email, senha);
        if (r.erro) {
            alert(`${r.erro}`)
        } else {
            navigation.push('/')
        }
    }
    
    return (
        <Container>
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
            <div class="email-input" value={email} onChange={e => setEmail(e.target.value)}><input type="email" placeholder="Email"/></div>
            <div class="senha-input" value={senha} onChange={e => setSenha(e.target.value)}><input placeholder="Senha"/></div>

            <div class="button-entrar" onClick={logar}> <Link to="/"> <button>Entrar</button> </Link> </div>

            <div class="nao-tem-conta"> Não tem uma Conta? </div>
            <div class="cadastre-se"> Cadastre-se como <Link to="/cadastro-candidato"> <u>Candidato</u> </Link> ou <Link to="cadastro-empresa"> <u>Empresa</u> </Link> </div>
        </div>
        </Container>
    )
}