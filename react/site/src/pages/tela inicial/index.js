import { Link } from 'react-router-dom'

import { Container } from './styled'
import Cabecalho from '../../components/cabecalho'

export default function Index() {
    return (
        <Container>
            <Cabecalho />
            <div class="faixa1-inicio">
            <div class="frase-principal1-inicio">Candidate-se aqui na SearchJob, o site mais procurado</div>
            <div class="frase-principal2-inicio">pelas melhores empresas.</div>

            <div class="qualVaga-inicio">Que vaga você está procurando?</div>

            <div class="input-button-box">

                <div class="cargo-input"><input type="role" placeholder="Digite aqui o cargo"/></div>

                <div class="buscar-button">
                   <Link to="/procura"> <button>
                        <img src="assets/lupa.svg" alt=""/>
                        <div class="buscar-text">Buscar vagas</div>
                    </button> </Link>
                </div>
            </div>
        </div>

        <div class="faixa2-inicio">
            <div class="selecione">Selecione qual área você quer atuar</div>

            <div class="box-areas">
                <div class="area"><img src="assets/administracao.png" alt=""/></div>
                <div class="area"><img src="assets/agronegogio.png" alt=""/></div>
                <div class="area"><img src="assets/cozinha.png" alt=""/></div>
            </div>

            <div class="box-areas">
                <div class="area-aaa"><img src="assets/educacao.png" alt=""/></div>
                <div class="area"><img src="assets/engenharia.png" alt=""/></div>
                <div class="area"><img src="assets/financeiro.png" alt=""/></div>
            </div>

            <div class="box-areas">
                <div class="area"><img src="assets/juridico.png" alt=""/></div>
                <div class="area"><img src="assets/saude.png" alt=""/></div>
                <div class="area"><img src="assets/tecnologia.png" alt=""/></div>
            </div>

            <div class="ver-vagas-button"> <Link to="/procura"> <button>Ver todas as vagas</button> </Link> </div>
        </div>

        <div class="rodape-inicio">
            <div class="siga">Siga nossas redes sociais:</div>

            <div class="redes-sociais-box">
                <div class="facebook"><img src="assets/facebook.png" alt=""/></div>
                <div class="instagram"><img src="assets/instagram.png" alt=""/></div>
                <div class="youtube"><img src="assets/youTube.png" alt=""/></div>
            </div>
        </div>
        </Container>
    )
}