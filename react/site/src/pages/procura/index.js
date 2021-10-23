import Cabecalho from '../../components/cabecalho - candidato'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <Cabecalho />
            <div class="leftAndRightBox">
            <div class="left-box">
                <div class="numeroVagas">350 vagas de emprego</div>
                <div class="totalAnuncios">Total de anúncios: 171.112</div>
    
                <div class="cargo-text">Cargo ou palavra-chave</div>
                <div class="cargo-input"> <input type="example" placeholder="Exemplo: Professor" /> </div>
    
                <div class="localidade-text">Localidade</div>
                <div class="localidade-input"><input type="location" placeholder="Exemplo: São Paulo" /></div>
    
                <div class="areaProfissional-text">Área profissional</div>
                <div class="select-area">
                    <select id="areaProfissional-select" name="areaProfissional-select">
                        <option value="selection">Selecione uma opção</option>
                        <option value="adm">Administração</option>
                        <option value="agro">Agronegócio</option>
                        <option value="cozinha">Cozinha</option>
                        <option value="educacao">Educação</option>
                        <option value="financeiro">Financeiro</option>
                        <option value="juridico">Jurídico</option>
                        <option value="engenharia">Engenharia</option>
                        <option value="saude">Saúde</option>
                        <option value="tecnologia">Tecnologia</option>
                    </select>
                </div>
    
                <div class="salario-text">Salário</div>
                <div class="select-salario">
                    <select id="salario-select" name="salario-select">
                        <option value="selection">Selecione uma opção</option>
                        <option value="money1000">A partir de R$ 1000,00</option>
                        <option value="money2000">A partir de R$ 2000,00</option>
                        <option value="money3000">A partir de R$ 3000,00</option>
                        <option value="money4000">A partir de R$ 4000,00</option>
                        <option value="money5000">A partir de R$ 5000,00</option>
                        <option value="money6000">A partir de R$ 6000,00</option>
                    </select>
                </div>
    
                <div class="metodoTrabalho-text">Método de trabalho</div>
                <div class="select-metodo">
                    <select id="metodoTrabalho-select" name="metodoTrabalho-select">
                        <option value="selection">Selecione uma opção</option>
                        <option value="presencial">Presencial</option>
                        <option value="homeoffice">Home office</option>
                    </select>
                </div>
    
                <div class="filtrar-button">
                    <button>
                        <img src="../assets/images/lupa.svg" alt=""/>
                        <div class="filtrar-text">Filtrar</div>
                    </button>
                </div>
            </div>
    
            <div class="right-box">
                <div class="card-vaga1">
                    <div class="nome-vaga">Analista de Sistemas</div>
                    <div class="nome-empresa"><u>NovaSoft</u></div>
                    <div class="descricao-vaga">Desenvolva soluções específicas em sistemas informatizados.</div>
                    <div class="box-salario-button">
                        <div class="salario-vaga">Salário: <b>5.116,00</b></div>
                        <div class="maisInformacoes-button"><button>Mais informações</button></div>
                    </div>
                </div>
    
                <div class="card-vaga">
                    <div class="nome-vaga">Especialista em Dados e Big Data</div>
                    <div class="nome-empresa"><u>Symbio</u></div>
                    <div class="descricao-vaga">Faz a gestão e a análise de dados, a fim de assegurar eficiência e<br/>
                        rentabilidade para a empresa, além de propor ideias inovadoras<br/> 
                        para o negócio.</div>
                    <div class="box-salario-button">
                        <div class="salario-vaga">Salário: <b>5.116,00</b></div>
                        <div class="maisInformacoes-button"><button>Mais informações</button></div>
                    </div>
                </div>

                <div class="card-vaga">
                    <div class="nome-vaga">Engenheiro de Software</div>
                    <div class="nome-empresa"><u>Atona Techology</u></div>
                    <div class="descricao-vaga">Projete e guie o desenvolvimento de sistemas, aplicativos e programas.</div>
                    <div class="box-salario-button">
                        <div class="salario-vaga">Salário: <b>5.116,00</b></div>
                        <div class="maisInformacoes-button"><a href="../tela de mais informações da vaga/index.html"><button>Mais informações</button></a></div>
                    </div>
                </div>

                <div class="card-vaga">
                    <div class="nome-vaga">Programador de Jogos Digitais</div>
                    <div class="nome-empresa"><u>Teclero</u></div>
                    <div class="descricao-vaga">Trabalhe e desenvolve jogos para computador, dispositivos mobile<br/> 
                        e videogames.</div>
                    <div class="box-salario-button">
                        <div class="salario-vaga">Salário: <b>5.116,00</b></div>
                        <div class="maisInformacoes-button"><button>Mais informações</button></div>
                    </div>
                </div>

                <div class="card-vaga">
                    <div class="nome-vaga">Programador de Jogos Digitais</div>
                    <div class="nome-empresa"><u>Teclero</u></div>
                    <div class="descricao-vaga">Trabalhe e desenvolve jogos para computador, dispositivos mobile<br/> 
                        e videogames.</div>
                    <div class="box-salario-button">
                        <div class="salario-vaga">Salário: <b>5.116,00</b></div>
                        <div class="maisInformacoes-button"><button>Mais informações</button></div>
                    </div>
                </div>

                <div class="card-vaga">
                    <div class="nome-vaga">Programador de Jogos Digitais</div>
                    <div class="nome-empresa"><u>Teclero</u></div>
                    <div class="descricao-vaga">Trabalhe e desenvolve jogos para computador, dispositivos mobile<br/> 
                        e videogames.</div>
                    <div class="box-salario-button">
                        <div class="salario-vaga">Salário: <b>5.116,00</b></div>
                        <div class="maisInformacoes-button"><button>Mais informações</button></div>
                    </div>
                </div>

                <div class="card-vaga">
                    <div class="nome-vaga">Programador de Jogos Digitais</div>
                    <div class="nome-empresa"><u>Teclero</u></div>
                    <div class="descricao-vaga">Trabalhe e desenvolve jogos para computador, dispositivos mobile<br/> 
                        e videogames.</div>
                    <div class="box-salario-button">
                        <div class="salario-vaga">Salário: <b>5.116,00</b></div>
                        <div class="maisInformacoes-button"><button>Mais informações</button></div>
                    </div>
                </div>

                <div class="card-vaga">
                    <div class="nome-vaga">Programador de Jogos Digitais</div>
                    <div class="nome-empresa"><u>Teclero</u></div>
                    <div class="descricao-vaga">Trabalhe e desenvolve jogos para computador, dispositivos mobile<br/> 
                        e videogames.</div>
                    <div class="box-salario-button">
                        <div class="salario-vaga">Salário: <b>5.116,00</b></div>
                        <div class="maisInformacoes-button"><button>Mais informações</button></div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}