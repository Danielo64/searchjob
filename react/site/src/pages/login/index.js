import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="cabecalho">
                <div class="imagem-cabecalho"> 
                    
                    <div class="logo">  
                        <a href="../tela inicial/index.html">
                            <img src="assets/searchjob-logo.png" alt=""/>
                        </a>
                    </div>
                    <div class="texto-login">Por favor, faça login para continuar.</div> 
                </div>
            </div>

            <div class="corpo-login">
                <div class="button-linkedin"><button> <img src="assets/linkedin.png" alt=""/> Continue com o Linkedin </button></div>
                <div class="button-google"><button> <img src="assets/google.png" alt=""/> Continue com o Google </button></div>
                
                <div class="box-line">
                    <div class="line-left"><img src="assets/linha-triangulo.svg" alt=""/></div>
                    <div class="or">ou</div>
                    <div class="line-right"><img src="assets/linha-triangulo.svg" alt=""/></div>
                </div>
            
                <div class="email-input"><input type="email" placeholder="Email"/></div>
                <div class="senha-input"><input placeholder="Senha"/></div>

                <div class="button-entrar"><button>Entrar</button></div>

                <div class="nao-tem-conta"> Não tem uma Conta? </div>
                <div class="cadastre-se"> 
                    Cadastre-se como 
                    <a href="../tela de cadastro - candidato/index.html">
                        <u>Candidato</u>
                    </a>
                    ou
                    <a href="../tela de cadastro - empresa/index.html">
                        <u>Empresa</u>
                    </a>
                </div>
            </div>
        </Container>
    )
}