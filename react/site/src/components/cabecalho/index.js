import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="logo">  
              <Link to="/"> <img src="assets/searchjob-logo-pequena.png" alt=""/> </Link>
            </div>

            <div class="procurar-button"> <Link to="/procura"> <button>Procurar Vagas</button> </Link> </div>

            <div className="publicar-button"> <Link to="/criacao-vaga"> <button>Publicar Vagas</button> </Link> </div>

            <div className="recrutamento-button"> <Link to="/recrutamento"> <button>Recrutamento</button> </Link> </div>

            <div class="criar-button"> <Link to="/criacao-curriculo"> <button>Criar Currículo</button> </Link> </div>

            <div class="image-button-line">
                <div class="user-image"> 
                    <img src="assets/semfoto.jpg" alt="" />
                </div>

                <div class="ola-nome">Olá, usuário</div>

                <div class="line"><img src="assets/line-vertical.svg" alt="" /></div>

                <div class="sair-button"> <Link to="/"> <button>Sair</button> </Link> </div>
            </div>
        </Container>
    )
}