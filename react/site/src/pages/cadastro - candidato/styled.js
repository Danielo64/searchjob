import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #00B4D8;

    padding-bottom: 1.2em;

.cabecalho {
    background-image: url(assets/imagem_candidato.png);
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
}

.logo {
    text-align: center;
    margin-left: 1.5em;
}

.logo img {
    cursor: pointer;
}

.descricao {
    color: white;
    text-align: center;

    font-size: 25px;
    font-weight: 900;

    margin-top: -0.2em;
    margin-left: .3em;
    margin-bottom: 1em;
}

.corpo-cadastro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.voceEEmpresa {
    margin-top: 2em;
    margin-bottom: 1em;

    font-size: 13px;
    font-weight: 700;
    color: white;
}

.voceEEmpresa u {
    font-size: 13px;
    font-weight: 700;
    color: white;

    cursor: pointer;
}

input {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}

.nome-input {
    margin-top: 0.5em;
}

.nome-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    padding-right: 25em;

    cursor: text;
}

.email-input {
    margin-top: 0.8em;
}

.email-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    padding-right: 25em;

    cursor: text;
}

.senha-input {
    margin-top: 0.8em;
}

.senha-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    padding-right: 25em;

    cursor: text;
}

.box-input-cima {
    display: flex;
    flex-direction: row;

    margin-top: 0.8em;
}

.nacionalidade-input { 
    margin-right: 0.5em;
}

.nacionalidade-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    padding-right: 5.4em;

    cursor: text;
}

.localidade-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    padding-right: 5.3em;

    cursor: text;
}

.box-input-baixo {
    display: flex;
    flex-direction: row;

    margin-top: 0.8em;
}

.civil-input {
    margin-right: 0.5em;
}

.civil-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    padding-right: 5.4em;

    cursor: text;
}

.telefone-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    padding-right: 5.3em;

    cursor: text;
}

::placeholder {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
}

.genero {
    display: flex;
    flex-direction: row;

    margin-top: 0.7em;

    margin-right: 21em;
}

.sexo {
    font-size: 17px;
    font-weight: 600;
    color: white;
    
    margin-right: 0.1em;
}

.input-radio input {
    margin-top: 0.4em;
    margin-right: 0.4em;
}

.masc {
    font-size: 17px;
    font-weight: 600;
    color: white;

    margin-right: 0.5em;
}

.fem {
    font-size: 17px;
    font-weight: 600;
    color: white;
}

.button-adicionar {
    display: flex;
    flex-direction: row;

    margin-top: 0.5em;
    margin-right: 22em;
}

.adicionar-text {
    font-size: 13px;
    font-weight: 800;
    color: #E4A200;

    margin-top: 0.5em;
    margin-left: 0.5em;

    cursor: pointer;
}

.button-adicionar button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    display: flex;
    flex-direction: row;

    background-color: white;

    padding-top: 0.4em;
    padding-right: 1em;
    padding-bottom: 0.4em;
    padding-left: 1em;
}

.button-adicionar button:hover {
    background-color: #dbdad7;
    transition: 1s;
}

.button-adicionar img {
    width: 30px;
    height: 30px;

    cursor: pointer;
}

.termos-box {
    display: flex;

    margin-top: 0.5em;
    margin-right: 16em;
}

.termos {
    font-size: 14px;
    font-weight: 600;
    color: white;

    margin-top: 0.3em;
}

.avisos-box {
    display: flex;

    margin-top: 0.2em;
    margin-right: 4.8em;
}

.avisos {
    font-size: 14px;
    font-weight: 600;
    color: white;

    margin-top: 0.3em;
}

.input-checkbox {
    margin-right: 0.1em;
}

.input-checkbox input {
    width: 20px;
    height: 20px;
}

.button-cadastrar {
    margin-top: 1em;
}

.button-cadastrar button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    font-size: 20px;
    font-weight: 800;
    color: white;
    background-color: #E4A200;

    padding: 0.5em 6.5em 0.5em 6.5em;
}

.button-cadastrar button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.possuiCadastro {
    margin-top: 1em;

    font-size: 13px;
    font-weight: 700;
    color: white;
}

.possuiCadastro u {
    font-size: 13px;
    font-weight: 700;
    color: white;

    cursor: pointer;
}
`

export { Container }