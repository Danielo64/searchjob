import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Index() {
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
            <div class="email-input"><input type="email" placeholder="Email"/></div>
            <div class="senha-input"><input placeholder="Senha"/></div>

            <div class="button-entrar"> <Link to="/"> <button>Entrar</button> </Link> </div>

            <div class="nao-tem-conta"> Não tem uma Conta? </div>
            <div class="cadastre-se"> Cadastre-se como <Link to="/cadastro-candidato"> <u>Candidato</u> </Link> ou <Link to="cadastro-empresa"> <u>Empresa</u> </Link> </div>
        </div>
        </Container>
    )
}