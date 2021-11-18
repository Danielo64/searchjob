import CabecalhoLogado from '../../components/cabecalho'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <CabecalhoLogado />
            <div class="leftAndRightBox">
            <div class="left-box">
                <div class="totalAnuncios">Total de anúncios: 171.112</div>
    
                <div class="cargo-text">Cargo ou palavra-chave</div>
                <div class="cargo-input"> <input type="example" placeholder="Exemplo: Professor" /> </div>
    
                <div class="localidade-text">Localidade</div>
                <div class="localidade-input"><input type="location" placeholder="Exemplo: São Paulo" /></div>
    
                <div class="areaProfissional-text">Área profissional</div>
                <div class="cargo-input"> <input type="example" placeholder="Exemplo: Tecnologia" /> </div>
    
                <div class="salario-text">Salário</div>
                <div class="cargo-input"> <input type="example" placeholder="Exemplo: R$ 3000,00" /> </div>
    
                <div class="filtrar-button">
                    <button>
                        <img src="assets/lupa.svg" alt=""/>
                        <div class="filtrar-text">Filtrar</div>
                    </button>
                </div>
            </div>
    
            <div class="right-box">
                <div class="card-vaga1">
                    <div class="nome-vaga">Analista de Sistemas</div>
                    <div class="nome-empresa">NovaSoft</div>
                    <div class="descricao-vaga">Desenvolva soluções específicas em sistemas informatizados.</div>
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