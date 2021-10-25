import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="cabecalho">
                <div class="imagem-cabecalho"> 
                    <div class="logo">
                        <a href="../tela inicial/index.html"> <img src="../assets/images/searchjob-logo.png" alt=""/></a>
                    </div>

                    <div class="descricao">Cadastre-se e acesse a milhares de vagas!</div>
                </div>     
            </div>

            <div class="corpo-cadastro">
                <div class="voceEEmpresa">Você é uma empresa? <a href="../tela de cadastro - empresa/index.html"><u>Cadastre-se aqui</u></a></div>

                <div class="button-linkedin"><button> <img src="../assets/images/linkedin.png" alt=""/> Cadastre-se com o Linkedin </button></div>
                <div class="button-google"><button> <img src="../assets/images/google.png" alt=""/> Cadastre-se com o Google </button></div>
                
                <div class="box-line">
                    <div class="line-left"><img src="../assets/images/linha-triangulo.svg" alt=""/></div>
                    <div class="ou">ou</div>
                    <div class="line-right"><img src="../assets/images/linha-triangulo.svg" alt=""/></div>
                </div>

                <div class="nome-input"><input type="name" placeholder="Nome do candidato"/> </div>
                <div class="email-input"><input type="email" placeholder="Email"/> </div>
                <div class="senha-input"><input type="password" placeholder="Senha"/> </div>
                
                <div class="box-input-cima">
                    <div class="nacionalidade-input"><input type="nationality" placeholder="Nacionalidade"/> </div>
                    <div class="localidade-input"><input type="location" placeholder="Localidade"/> </div>
                </div>

                <div class="box-input-baixo">
                    <div class="civil-input"><input type="civil" placeholder="Estado civil"/> </div>
                    <div class="telefone-input"><input type="phone" placeholder="Telefone"/> </div>
                </div>
                
                <div class="genero">
                    <div class="sexo">Sexo:</div>
                    <div class="input-radio"><input type="radio" name="genre"/></div> 
                    <div class="masc">Masculino</div>
                    <div class="input-radio"><input type="radio" name="genre"/></div> 
                    <div class="fem">Feminino</div>
                </div>

                <div class="button-adicionar"><button> 
                    <img src="../assets/images/plus-icon.png" alt=""/> 
                    <div class="adicionar-text">Adicionar imagem de perfil</div></button>
                </div>

                <div class="termos-box">
                    <div class="input-checkbox"><input type="checkbox"/></div>
                    <div class="termos">Li e aceito os Termos e Condições da SearchJob.</div>
                </div>

                <div class="button-cadastrar"><a href="../tela inicial/index.html"><button>Cadastrar-se</button></a></div>
                
                <div class="possuiCadastro">Já possui um cadastro? <a href="../tela de login/index.html"><u>Fazer Login</u></a></div>
            </div>
        </Container>
    )
}