import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="logo">  
                <a href="../tela inicial/index.html"><img src="../assets/images/searchjob-logo-pequena.png" alt=""/></a>
            </div>

            <div class="procurar-button"><a href="../tela de procura/index.html"><button>Procurar Vagas</button></a></div>

            <div class="criar-button"><a href="../tela de criação de currículo/index.html"><button>Criar Currículo</button></a></div>

            <div class="user-image"> 
                <img src="../assets/images/joana-image.jpg" alt=""/>
            </div>
        </Container>
    )
}