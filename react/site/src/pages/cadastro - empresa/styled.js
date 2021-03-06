import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #00B4D8;

    padding-bottom: 1.2em;

    .cabecalho {
    background-image: url(assets/imagem_empresa.png);
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

.nome-input {
    margin-top: 0.5em;
}

.nome-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    width: 39em;
    height: 2.5em;

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
    width: 39em;
    height: 2.5em;

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
    width: 39em;
    height: 2.5em;

    cursor: text;
}

.box-input-cima {
    display: flex;
    flex-direction: row;

    margin-top: 0.8em;
}

.localidade-input { 
    margin-right: 0.5em;
}

.localidade-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    width: 19.3em;
    height: 2.5em;

    cursor: text;
}

.cnpj-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    width: 19.2em;
    height: 2.5em;

    cursor: text;
}

.box-input-baixo {
    display: flex;
    flex-direction: row;

    margin-top: 0.8em;
}

.area-input {
    margin-right: 0.5em;
}

.area-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    width: 19.3em;
    height: 2.5em;

    cursor: text;
}

.porte-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    width: 19.2em;
    height: 2.5em;

    cursor: text;
}

.adicionar-input {
    margin-top: 0.8em;
}

.adicionar-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    padding-left: 0.7em;
    width: 39em;
    height: 2.5em;

    cursor: text;
}

::placeholder {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
}

.button-cadastrar {
    margin-top: 1em;
}

.button-cadastrar button{
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

@media (min-width: 1920px) {
    .cabecalho { background-size: 100%; }
}
`

export { Container }