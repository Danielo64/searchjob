import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="logo">  
              <Link to="/"> <img src="assets/searchjob-logo-pequena.png" alt=""/> </Link>
            </div>

            <div class="procurar-button"> <Link to="/procura"> <button>Procurar Vagas</button> </Link> </div>

            <div class="criar-button"> <Link to="/criacao-curriculo"> <button>Criar Currículo</button> </Link> </div>

            <div class="user-image"> 
                <img src="assets/joana-image.jpg" alt=""/>
            </div>
        </Container>
    )
}