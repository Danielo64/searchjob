import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import { Link } from 'react-router-dom'

import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styled'

import Api from '../../services/api'
const api = new Api();

export default function Index() {
    
    
    const loading = useRef(null);
    const navigation = useHistory();
    
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#119FDC" ref={loading} />
            <div class="cabecalho">
            <div class="imagem-cabecalho"> 
                <div class="logo">
                  <Link to="/"> <img src="assets/searchjob-logo.png" alt="" /> </Link>
                </div>

                <div class="descricao">Cadastre-se e se conecte com milhões de profissionais!</div>
            </div>     
        </div>

        <div class="corpo-cadastro">
            <div class="voceEEmpresa">Você é um candidato? <Link to="/cadastro-candidato"> <u>Cadastre-se aqui</u> </Link> </div>

            <div class="nome-input"><input type="name" placeholder="Nome da empresa"/> </div>
            <div class="email-input"><input type="email" placeholder="Email"/> </div>
            <div class="senha-input"><input type="password" placeholder="Senha"/> </div>
            
            <div class="box-input-cima">
                <div class="localidade-input"><input type="location" placeholder="Localidade"/> </div>
                <div class="cnpj-input"><input type="cnpj" placeholder="CNPJ"/> </div>
            </div>

            <div class="box-input-baixo">
                <div class="area-input"><input type="civil" placeholder="Área de atuação"/> </div>
                <select name="companySize" id="companySize">
                    <option value="0">Porte da empresa</option>
                    <option value="1">Pequeno porte</option>
                    <option value="2">Médio porte</option>
                    <option value="3">Grande porte</option>
                </select>
            </div>
                
            <div class="adicionar-input"><input type="add" placeholder="Link da imagem"/> </div>

            <div class="button-cadastrar"> <Link to="/"> <button>Cadastrar-se</button> </Link> </div>
            
            <div class="possuiCadastro">Já possui um cadastro? <Link to="/login"> <u>Fazer Login</u> </Link> </div>
        </div>
        </Container>
    )
}