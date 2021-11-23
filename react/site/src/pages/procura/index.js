import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import CabecalhoLogado from '../../components/cabecalho'

import { Container } from './styled'

import Api from '../../services/api';
const api = new Api();

export default function Index(props) {
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
            <div class="right-box">
                <div class="card-vaga">
                    {vagas.map((item) => 
                        <div> 
                            <div class="nome-vaga"> {item.nm_vaga} </div>
                            <div class="nome-empresa">{item.nm_empresa}</div>
                            <div class="descricao-vaga"> {item.ds_vaga} </div>
                            <div class="box-salario-button">
                                <div class="salario-vaga">Salário: <b>{item.vl_salario}</b></div>
                                <div class="maisInformacoes-button"><Link to={{pathname: '/informacoes', state: props.info}}><button>Mais informações</button></Link></div>
                            </div>
                        </div>
                    )}    
                </div>
            </div>
        </Container>
    )
}