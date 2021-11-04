import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="cabecalho">
                <div class="imagem-cabecalho"> 
                    <div class="logo">
                        <Link to="/"> <img src="assets/searchjob-logo.png" alt="" /> </Link>
                    </div>

                    <div class="descricao">Cadastre-se e acesse a milhares de vagas!</div>
                </div>     
            </div>

            <div class="corpo-cadastro">
                <div class="voceEEmpresa">Você é uma empresa? <Link to="/cadastro-empresa"> <u>Cadastre-se aqui</u> </Link></div>

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

                <div class="adicionar-input"><input type="add" placeholder="Link da imagem"/> </div>
                
                <div class="genero">
                    <div class="sexo">Sexo:</div>
                    <div class="input-radio"><input type="radio" name="genre"/></div> 
                    <div class="masc">Masculino</div>
                    <div class="input-radio"><input type="radio" name="genre"/></div> 
                    <div class="fem">Feminino</div>
                </div>

                <div class="termos-box">
                    <div class="input-checkbox"><input type="checkbox"/></div>
                    <div class="termos">Li e aceito os Termos e Condições da SearchJob.</div>
                </div>

                <div class="button-cadastrar"><Link to="/"> <button>Cadastrar-se</button> </Link></div>
                
                <div class="possuiCadastro">Já possui um cadastro? <Link to="/login"> <u>Fazer Login</u> </Link></div>
            </div>
        </Container>
    )
}