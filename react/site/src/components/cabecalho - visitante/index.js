import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="logo">  
                <a href="../tela inicial/index.html"><img src="assets/searchjob-logo-pequena.png" alt=""/></a>
            </div>

            <div class="procurar-button"><a href="../tela de procura/index.html"><button>Procurar Vagas</button></a></div>

            <div class="publicar-button"><a href="../tela de criação de currículo/index.html"><button>Publicar Vagas</button></a></div>

            <div class="criar-button"><a href="../tela de criação de currículo/index.html"><button>Criar Currículo</button></a></div>

            <div class="buttons-line">

                <div class="cadastre-button"><button>Cadastre-se</button></div>

                <div class="line"><img src="assets/line-vertical.svg" alt=""/></div>

                <div class="entrar-button"><a href="../tela de login/index.html"><button>Entrar</button></a></div>
            </div>
        </Container>
    )
}