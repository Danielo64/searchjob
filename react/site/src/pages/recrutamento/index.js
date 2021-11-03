import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="voltar">
            <a href="../tela inicial/index.html"><div class="seta"><img src="assets/botao-voltar.png" alt="" /></div></a>
            <div class="voltar-texto">Voltar para a Página Inicial</div>
        </div>

        <div class="left-and-right-box">
            <div class="left-box">
                <div class="totalCandidatos">Total de candidatos: 5</div>
    
                <div class="cardCandidato-boxx">
                    <div class="foto-left-box">
                        <img src="assets/joana-image.jpg" alt="" />
                    </div>
                    <div class="nome-localidade-box">
                        <div class="nomeCandidato">Joana da Silva</div>
                        <div class="localidade">Pinheiros, São Paulo - SP</div>
                    </div>
                </div>
    
                <div class="cardCandidato-box">
                    <div class="foto-left-box">
                        <img src="assets/jonathan-image.jpg" alt=""/>
                    </div>
                    <div class="nome-localidade-box">
                        <div class="nomeCandidato">Jonathan Alves</div>
                        <div class="localidade">Guarulhos, São Paulo - SP</div>
                    </div>
                </div>
    
                <div class="cardCandidato-box">
                    <div class="foto-left-box">
                        <img src="assets/julia-image.jpg" alt=""/>
                    </div>
                    <div class="nome-localidade-box">
                        <div class="nomeCandidato">Júlia Castro</div>
                        <div class="localidade">São Bernardo, São Paulo - SP</div>
                    </div>
                </div>
    
                <div class="cardCandidato-box">
                    <div class="foto-left-box">
                        <img src="assets/carlos-image.jpg" alt=""/>
                    </div>
                    <div class="nome-localidade-box">
                        <div class="nomeCandidato">Carlos Queiroz</div>
                        <div class="localidade">Paulista, São Paulo - SP</div>
                    </div>
                </div>
    
                <div class="cardCandidato-box">
                    <div class="foto-left-box">
                        <img src="assets/pedro-image.jpg" alt=""/>
                    </div>
                    <div class="nome-localidade-box">
                        <div class="nomeCandidato">Pedro Rocha</div>
                        <div class="localidade">Barra Funda, São Paulo - SP</div>
                    </div>
                </div>
            </div>

            <div class="right-box">
                <div class="imagemInformacoesCandidato-box">
                    <div class="foto-right-box">
                        <img src="assets/joana-image.jpg" alt=""/>
                    </div>

                    <div class="right-box-candidato">
                        <div class="nome-candidato">Joana da Silva</div>
                        <div class="dataNascimento-candidato">20/06/1996 (26 anos)</div>
                        <div class="civil-candidato">Solteira</div>
                        <div class="localidade-candidato">Pinheiros, São Paulo - SP</div>
                        <div class="nacionalidade-candidato">Brasileira</div>
                        <div class="email-candidato">joanadasilva30@gmail.com</div>
                        <div class="telefone-candidato">(11) 98875-5931</div>
                    </div>
                </div>

                <div class="line"><img src="assets/line-recrutamento.svg" alt="" /></div>
                
                <div class="objetivoTextarea">
                    <div class="objetivo">Objetivo</div>
                    <div class="objetivo-textarea"><textarea disabled></textarea></div>
                </div>

                <div class="formacaoTextarea">
                    <div class="formacao">Formação acadêmica</div>
                    <div class="formacao-textarea"><textarea disabled></textarea></div>
                </div>

                <div class="experienciaTextarea">
                    <div class="experiencia">Experiência profissional</div>
                    <div class="experiencia-textarea"><textarea disabled></textarea></div>
                </div>

                <div class="idiomaTextarea">
                    <div class="idioma">Idiomas</div>
                    <div class="idioma-textarea"><textarea disabled></textarea></div>
                </div>

                <div class="atividadeTextarea">
                    <div class="atividade">Atividades complementares</div>
                    <div class="atividade-textarea"><textarea disabled></textarea></div>
                </div>

                <div class="buttons-box">
                    <div class="enviar-button"><button>Enviar email</button></div>
                    <div class="remover-button"><button>Remover</button></div>
                </div>
            </div>
        </div>
        </Container>
    )
}