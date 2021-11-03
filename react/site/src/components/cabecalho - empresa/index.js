import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="logo">  
               <Link to="/"> <img src="assets/searchjob-logo-pequena.png" alt=""/> </Link>
            </div>

            <div class="publicar-button"> <Link to="/criacao-vaga"> <button>Publicar Vagas</button> </Link> </div>

            <div class="recrutamento-button"> <Link to="/recrutamento"> <button>Recrutamento</button> </Link> </div>

            <div class="user-image"> 
                <img src="assets/joana-image.jpg" alt=""/>
            </div>
        </Container>
    )
}