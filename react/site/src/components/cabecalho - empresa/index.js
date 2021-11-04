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

            <div class="image-button-line">
                <div class="user-image"> 
                    <img src="assets/microsoft-image.jpeg" alt=""/>
                </div>

                <div class="ola-nome">Olá, Microsoft</div>

                <div class="line"><img src="assets/line-vertical.svg" alt="" /></div>

                <div class="sair-button"> <Link to="/"> <button>Sair</button> </Link> </div>
            </div>
        </Container>
    )
}