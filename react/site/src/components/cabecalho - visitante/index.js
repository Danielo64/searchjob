import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="logo">  
                <Link to="/"> <img src="assets/searchjob-logo-pequena.png" alt=""/> </Link>
            </div>

            <div class="procurar-button"> <Link to="/procura"> <button>Procurar Vagas</button> </Link> </div>

            <div class="publicar-button"> <Link to="/criacao-vaga"> <button>Publicar Vagas</button> </Link> </div>

            <div class="criar-button"> <Link to="/criacao-curriculo"> <button>Criar Currículo</button> </Link> </div>

            <div class="buttons-line">

                <nav>
                    <ul class="menu">
                                <li>Cadastre-se
                                   <ul>
                                        <li> <Link to="/cadastro-candidato"> Candidato </Link> </li>
                                        <li> <Link to="cadastro-empresa"> Empresa </Link> </li>
                                     </ul>
                              </li>
                      </ul>
                </nav>

                <div class="line"><img src="assets/line-vertical.svg" alt=""/></div>

                <div class="entrar-button"> <Link to="/login"> <button>Entrar</button> </Link> </div>
            </div>
        </Container>
    )
}