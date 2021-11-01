import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="logo">  
                <a href="../tela inicial/index.html"><img src="assets/searchjob-logo-pequena.png" alt=""/></a>
            </div>

            <div class="publicar-button"><a href="../tela de procura/index.html"><button>Publicar Vagas</button></a></div>

            <div class="recrutamento-button"><a href="../tela de criação de currículo/index.html"><button>Recrutamento</button></a></div>

            <div class="user-image"> 
                <img src="assets/joana-image.jpg" alt=""/>
            </div>
        </Container>
    )
}