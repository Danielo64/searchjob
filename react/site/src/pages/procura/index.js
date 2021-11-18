import { useState, useEffect } from 'react'
import CabecalhoLogado from '../../components/cabecalho'

import { Container } from './styled'

import Api from '../../services/api';
const api = new Api();

export default function Index() {
    const [vagas, setVagas] = useState([]);

    async function listar() {
        let r = await api.listarVaga();
        setVagas(r);
    }

    // função chamada 1x quando a tela abre
    useEffect(() => {
        listar();
    }, [])
    
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
                    {vagas.map((item) => 
                        <div> 
                            <div class="nome-vaga"> {item.nm_vaga} </div>
                            <div class="nome-empresa">{item.nm_empresa}</div>
                            <div class="descricao-vaga"> {item.ds_vaga} </div>
                            <div class="box-salario-button">
                                <div class="salario-vaga">Salário: <b>{item.vl_salario}</b></div>
                                <div class="maisInformacoes-button"><button>Mais informações</button></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </Container>
    )
}