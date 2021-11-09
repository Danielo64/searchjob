import { Link } from 'react-router-dom'

import Cabecalho from '../../components/cabecalho - candidato'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <Cabecalho />
            <div class="voltar">
                <Link to="/procura"> <div class="seta"><img src="assets/botao-voltar.png" alt=""/></div> </Link>
                <div class="voltar-texto">Voltar para Vagas</div>
            </div>

            <div class="informacoes-vaga">
                <div class="coluna-box-esquerda">
                    <div class="coluna-nome-vaga-item">Engenheiro de Software</div>
                    <div class="coluna-salario-item">Salário: <b>6.306,00</b></div>
                    <div class="coluna-item">Atona Techonology</div>
                </div>

                <div class="coluna-box-meio">
                    <div class="coluna-especial-item">Área: <b>Tecnologia</b></div>
                    <div class="coluna-especial-item">Jornada: <b>12x36</b></div>
                    <div class="coluna-especial-item">Tipo de Contrato: <b>Integral</b></div>
                </div>

                <div class="coluna-box-direita">
                    <div class="numero-vagas_e_data-vaga-item"><b>3 vagas | </b> Publicada em <b>12/08</b></div>
                    <div class="candidatar-botao-item"><button>Candidate-se</button></div>
                </div>
            </div>

            <div class="descricao-vaga">
                <div class="descricao">Descrição</div>
                <ul>
                    <li>Área e especialização profissional: Engenharia - Engenharia Computação, Sistemas;</li>
                    <li>Nível hierárquico: Analista;</li>
                    <li>Conhecimento intermediário em Exchange; Administração avançada de ambiente Microsoft Windows Server 2012/2016/2019 (AD, DHCP, GPO, DNS, DFS);</li>
                    <li>Atendimento técnico presencial aos usuários, sistemas, computadores, notebooks, impressoras e smartphones da empresa;</li>
                    <li>Experiência na área de suporte a usuários e equipamentos;</li>
                    <li>Horário de Trabalho: Segunda a Sexta das 08h30 às 18h00 com 1h30 minutos de almoço;</li>
                    <li>Local de Trabalho: Avenida Paulista - SP; </li>
                    <li>Necessário Inglês fluente.</li>
                </ul>
                <div class="exigencias">Exigências</div>
                <ul>
                    <li>Escolaridade Mínima: Ensino Superior.</li>
                </ul>
                <div class="beneficios">Benefícios Adicionais</div>
                <ul>
                    <li>Assistência médica, Previdência Privada, Seguro de Vida, Vale-refeição, Vale-transporte.</li>
                </ul>
            </div>
        </Container>
    )
}