import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #00B4D8;

    padding-bottom: 1.2em;

    min-height: 100vh;

.cabecalho {
    background-image: url(../assets/images/imagem-login.png);
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

.button-linkedin {
    margin-top: 1.5em;
    display: flex;
    justify-content: center; 
}

.button-linkedin button {
    display: flex;
    justify-content: center;
    
    cursor: pointer;

    border-radius: 50px 50px 50px 50px;
    border: none;

    padding-top: 0.5em;
    padding-right: 1.5em;
    padding-left: 1.5em;
    padding-bottom: 0.6em;
    
    font-size: 20px;
    font-weight: 700;
    color: #7B7575;
}

.button-linkedin button:hover {
    background-color: #dbdad7;
    transition: 1s;
}

.button-linkedin img {
    width: 30px;
    height: 30px;
    margin-bottom: -0.5em;
    margin-right: 0.5em;

    cursor: pointer;
}

.button-google {
    margin-top: 1em;
    display: flex;
    justify-content: center;
}

.button-google button {
    display: flex;
    justify-content: center;
    
    cursor: pointer;

    border-radius: 50px 50px 50px 50px;
    border: none;

    padding-top: 0.5em;
    padding-right: 1.8em;
    padding-left: 1.8em;
    padding-bottom: 0.6em;
    
    font-size: 20px;
    font-weight: 700;
    color: #7B7575;
}

.button-google button:hover {
    background-color: #dbdad7;
    transition: 1s;
}

.button-google img {
    width: 30px;
    height: 30px;
    margin-bottom: -0.5em;
    margin-right: 0.5em;

    cursor: pointer;
}

.box-line {
    display: flex;
    justify-content: space-between;
}

.line-left {
    margin-top: 0.8em;
    margin-right: 0.5em;
}

.line-right {
    margin-top: 0.8em;
    margin-left: 0.1em;
}

.or {
    font-size: 19px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
    margin-right: 0.5em;
}

input {
    padding-left: 0.7em;
    padding-right: 25em;

    padding-top: 0.5em;
    padding-bottom: 0.5em;
}

.email-input {
    margin-top: 0.5em;
}

.email-input input {
    font-size: 15px;
    font-weight: 600;
    color: #A39C9C;
    border: 1px solid black;

    cursor: text;
}

.senha-input {
    margin-top: 1.5em;
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
`

export { Container }