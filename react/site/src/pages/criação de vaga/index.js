import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="voltar">
            <Link to="/"> <div class="seta"><img src="assets/botao-voltar.png" alt="" /></div> </Link>
            <div class="voltar-texto">Voltar para a Página Inicial</div>
        </div>

        <div class="left-and-right-box">
            <div class="left-box">
                <div class="totalVagas-button-box">
                    <div class="totalVagas">Total de vagas: 5</div>
                    <div class="adicionar-button"><button>Adicionar vaga</button></div>
                </div>
    
                <div class="cardVaga-boxx">
                    <div class="nomeVaga">Analista de Sistemas</div>
                    <div class="salario">Salário: <b>6.306,00</b></div>
                </div>
    
                <div class="cardVaga-box">
                    <div class="nomeVaga">Especialista em Dados e Big Data</div>
                    <div class="salario">Salário: <b>6.113,00</b></div>
                </div>
    
                <div class="cardVaga-box">
                    <div class="nomeVaga">Engenheiro de Software</div>
                    <div class="salario">Salário: <b>6.306,00</b></div>
                </div>
    
                <div class="cardVaga-box">
                    <div class="nomeVaga">Programador de Jogos Digitais</div>
                    <div class="salario">Salário: <b>4.356,00</b></div>
                </div>
    
                <div class="cardVaga-box">
                    <div class="nomeVaga">Analista de Projetos de TI</div>
                    <div class="salario">Salário: <b>5.400,00</b></div>
                </div>
            </div>

            <div class="right-box">
                <div class="box-input1">
                    <div class="nomeVagaInput">
                        <div class="nomeeVaga">Nome da vaga</div>
                        <div class="vaga-input"><input/></div>
                    </div>

                    <div class="salarioInput">
                        <div class="salarioo">Salário</div>
                        <div class="salario-input"><input/></div>
                    </div>
                </div>

                <div class="box-input-select">
                    <div class="areaVagaInput">
                        <div class="areaVaga">Área da vaga</div>
                        <div class="area-input"><input/></div>
                    </div>

                    <div class="jornadaSelect">
                        <div class="jornada">Jornada</div>
                        <div class="select-jornada">
                            <select id="jornada-select" name="jornada-select">
                                <option value="selection">Selecione uma opção</option>
                                <option value="5x2">5x2</option>
                                <option value="12x36">12x36</option>
                                <option value="12x48">12x48</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="box-input-select">
                    <div class="contratoSelect">
                        <div class="contrato">Tipo de contrato</div>
                        <div class="select-contrato">
                            <select id="contrato-select" name="contrato-select">
                                <option value="selection">Selecione uma opção</option>
                                <option value="jovem">Jovem aprendiz</option>
                                <option value="estagio">Estágio</option>
                                <option value="integral">Integral</option>
                            </select>
                        </div>
                    </div>

                    <div class="quantidadeVagasInput">
                        <div class="quantidade">Quantidade de vagas</div>
                        <div class="quantidade-input"><input/></div>
                    </div>
                </div>

                <div class="descricaoVagaTextarea">
                    <div class="descricao">Descrição da vaga</div>
                    <div class="descricao-textarea"><textarea></textarea></div>
                </div>

                <div class="box-line">
                    <div class="line-left"><img src="assets/line-curriculo.svg" alt="" /></div>
                    <div class="objetivo-curriculo">Currículo</div>
                    <div class="line-right"><img src="assets/line-curriculo.svg" alt="" /></div>
                </div>

                <div class="exigenciaTextarea">
                    <div class="exigencia">Exigências</div>
                    <div class="exigencia-textarea"><textarea></textarea></div>
                </div>

                <div class="beneficioTextarea">
                    <div class="beneficio">Benefícios adicionais</div>
                    <div class="beneficio-textarea"><textarea></textarea></div>
                </div>

                <div class="buttons-box">
                    <div class="alterar-button"><button>Alterar vaga</button></div>
                    <div class="remover-button"><button>Remover vaga</button></div>
                </div>
            </div>
        </div>
        </Container>
    )
}