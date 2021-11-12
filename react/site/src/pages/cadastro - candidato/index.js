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
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nascimento, setNasci] = useState('');
    const [nacionalidade, setNacio] = useState('');
    const [civil, setCivil] = useState('');
    const [localidade, setLocal] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [imagem, setImagem] = useState('');

    const loading = useRef(null);
    const navigation = useHistory();

    async function cadastrar() {
        let r = await api.inserirCandidato(nome, email, senha, sexo, imagem, nacionalidade, telefone, nascimento, civil, localidade);

        if (r.erro) 
                toast.error(r.erro);
        else 
                toast.dark('💕 Cadastrado com sucesso!');
                navigation.push('/');
    }      

    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#119FDC" ref={loading} />
            <div class="cabecalho">
                <div class="imagem-cabecalho"> 
                    <div class="logo">
                        <Link to="/"> <img src="assets/searchjob-logo.png" alt="" /> </Link>
                    </div>

                    <div class="descricao">Cadastre-se e acesse a milhares de vagas!</div>
                </div>     
            </div>

            <div class="corpo-cadastro">
                <div class="voceEEmpresa">Você é uma empresa? <Link to="/cadastro-empresa"> <u>Cadastre-se aqui</u> </Link></div>

                <div class="nome-input"><input type="name" placeholder="Nome do candidato" value={nome} onChange={e => setNome(e.target.value)}/> </div>
                <div class="email-input"><input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/> </div>
                <div class="senha-input"><input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/> </div>
                <div class="nascimento-input"><input type="birth" placeholder="Data de nascimento" value={nascimento} onChange={e => setNasci(e.target.value)}/></div>
                
                <div class="box-input-cima">
                    <div class="nacionalidade-input"><input type="nationality" placeholder="Nacionalidade" value={nacionalidade} onChange={e => setNacio(e.target.value)}/> </div>
                    <div class="localidade-input"><input type="location" placeholder="Localidade" value={localidade} onChange={e => setLocal(e.target.value)}/> </div>
                </div>

                <div class="box-input-baixo">
                    <div class="civil-input"><input type="civil" placeholder="Estado civil" value={civil} onChange={e => setCivil(e.target.value)}/> </div>
                    <div class="telefone-input"><input type="phone" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/> </div>
                </div>

                <div class="adicionar-input"><input type="add" placeholder="Link da imagem" value={imagem} onChange={e => setImagem(e.target.value)}/> </div>
                
                <div class="genero">
                    <div class="sexo">Sexo:</div>
                    <div class="input-radio"><input type="radio" name="genre" value={sexo} onChange={e => setSexo(e.target.value)}/></div> 
                    <div class="masc">Masculino</div>
                    <div class="input-radio"><input type="radio" name="genre" value={sexo} onChange={e => setSexo(e.target.value)}/></div> 
                    <div class="fem">Feminino</div>
                </div>

                <div class="button-cadastrar"><Link to="/"> <button onClick={cadastrar} >Cadastrar-se</button> </Link></div>
                
                <div class="possuiCadastro">Já possui um cadastro? <Link to="/login"> <u>Fazer Login</u> </Link></div>
            </div>
        </Container>
    )
}