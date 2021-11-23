import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { Container } from './styled'

import Api from '../../services/api';
const api = new Api();

export default function Index() {
    const [candidato, setCandidato] = useState([]);
    const [objetivo, setObjetivo] = useState('');
    const [formacao, setFormacao] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [idiomas, setIdiomas] = useState('');
    const [atividades, setAtividades] = useState('');
    
    return (
        <Container>
            <div class="voltar">
               <Link to="/"> <div class="seta"><img src="assets/botao-voltar.png" alt=""/></div> </Link>
                <div class="voltar-texto">Voltar para a Página Inicial</div>
            </div>

            <div class="informacoes-candidato">
                <div class="left-box-candidato">
                    <div class="imagemPerfil"><img src="assets/joana-image.jpg" alt=""/></div>
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

            <div class="informacoes-curriculo">
                <div class="box-line">
                    <div class="line-left1"><img src="assets/linha-triangulo.svg" alt=""/></div>
                    <div class="objetivo-curriculo">Objetivo</div>
                    <div class="line-right1"><img src="assets/linha-triangulo.svg" alt=""/></div>
                </div>
                <div class="objetivo-textarea"><textarea value={objetivo} onChange={e => setObjetivo(e.target.value)}></textarea></div>

                <div class="box-line">
                    <div class="line-left2"><img src="assets/linha-triangulo.svg" alt=""/></div>
                    <div class="formacao-academica-curriculo">Formação acadêmica</div>
                    <div class="line-right2"><img src="assets/linha-triangulo.svg" alt=""/></div>
                </div>
                <div class="formacao-academica-textarea"><textarea value={formacao} onChange={e => setFormacao(e.target.value)}></textarea></div>

                <div class="box-line">
                    <div class="line-left1"><img src="assets/linha-triangulo.svg" alt=""/></div>
                    <div class="experiencia-profissional-curriculo">Experiência profissional</div>
                    <div class="line-right1"><img src="assets/linha-triangulo.svg" alt=""/></div>
                </div>
                <div class="experiencia-profissional-textarea"><textarea value={experiencia} onChange={e => setExperiencia(e.target.value)}></textarea></div>

                <div class="box-line">
                    <div class="line-left"><img src="assets/linha-triangulo.svg" alt=""/></div>
                    <div class="idiomas-curriculo">Idiomas</div>
                    <div class="line-right"><img src="assets/linha-triangulo.svg" alt=""/></div>
                </div>
                <div class="idiomas-textarea"><textarea value={idiomas} onChange={e => setIdiomas(e.target.value)}></textarea></div>

                <div class="box-line">
                    <div class="line-left2"><img src="assets/linha-triangulo.svg" alt=""/></div>
                    <div class="atividades-complementares-curriculo">Atividades complementares</div>
                    <div class="line-right2"><img src="assets/linha-triangulo.svg" alt=""/></div>
                </div>
                <div class="atividades-complementares-textarea"><textarea value={atividades} onChange={e => setAtividades(e.target.value)}></textarea></div>

                <div class="salvar-button"> <Link to="/"> <button>Salvar</button> </Link> </div>
            </div>
        </Container>
    )
}