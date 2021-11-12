import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #00B4D8;

    padding-bottom: 1.2em;

    min-height: 100vh;

.cabecalho {
    background-image: url(assets/imagem-login.png);
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-size: cover;
}

.logo {
    text-align: center;
    margin-left: 1.5em;
}

.logo img {
    cursor: pointer;
}

.texto-login {
    color: white;
    text-align: center;

    font-size: 25px;
    font-weight: 900;

    margin-top: -0.2em;
    margin-left: .3em;
    margin-bottom: 1em;
}

.corpo-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input {
    padding-left: 0.7em;
    width: 39em;
    height: 2.5em;
}

.email-input {
    margin-top: 2em;
}

.email-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    cursor: text;
}

.senha-input {
    margin-top: 1em;
}

.senha-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    cursor: text;
}

.button-entrar {
    margin-top: 1.5em;
}

.button-entrar button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    font-size: 20px;
    font-weight: 800;
    color: white;
    background-color: #E4A200;

    padding: 0.5em 6.5em 0.5em 6.5em; 
}

.button-entrar button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.nao-tem-conta {
    font-size: 16px;
    font-weight: 700;
    color: white;
    
    margin-top: 0.5em;
}

.cadastre-se {
    font-size: 16px;
    font-weight: 700;
    color: white;

    margin-bottom: 1em;
}

u {
    font-size: 16px;
    font-weight: 700;

    cursor: pointer;
}

a:link {
    color: white;
}
    
a:visited {
    color: white;
}

a:hover {
    color: white;
}

a:active {
    color: white;
}

@media (min-width: 1280px) {
    .corpo-cadastro { padding-bottom: 2.2em; }
}

@media (min-width: 1366px) {
    .cadastre-se { margin-bottom: 0em; }
}

@media (min-width: 1920px) {
    .texto-login { font-size: 30px; }
    .email-input input { font-size: 20px; }
    .senha-input input { font-size: 20px; }
    .button-entrar button { font-size: 25px; }
    .nao-tem-conta { font-size: 20px; }
    .cadastre-se { font-size: 20px; }
    u { font-size: 20px; }
}
`

export { Container }