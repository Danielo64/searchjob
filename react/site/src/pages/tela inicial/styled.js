import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

.faixa1-inicio {
    background-image: url(assets/imagem-fundo-incio.png);
    background-position: 20% 20%;
    
    display: flex;
    flex-direction: column;

    align-items: center;

    padding-bottom: 18em;
}

.frase-principal1-inicio {
    margin-top: 5em;
    
    font-size: 35px;
    font-weight: 800;
    color: white;
}

.frase-principal2-inicio {
    font-size: 35px;
    font-weight: 800;
    color: white;
}

.qualVaga-inicio {
    margin-top: 1em;
    
    font-size: 22px;
    font-weight: 700;
    color: white;
}

.input-button-box {
    display: flex;
    flex-direction: row;

    margin-top: 1.5em;
}

.cargo-input {
    margin-right: 8em;
}

.cargo-input input {
    font-size: 18px;
    font-weight: 600;
    color: #A39C9C;
    border: none;

    padding-top: 0.5em;
    padding-left: 0.7em;
    padding-bottom: 0.5em;

    cursor: text;
}

::placeholder {
    font-size: 18px;
    font-weight: 600;
    color: #A39C9C;
}

.buscar-button {
    margin-top: -0.2em;
}

.buscar-button button {
    display: flex;
    flex-direction: row;

    cursor: pointer;
    
    border-radius: 50px 50px 50px 50px;
    border: none;

    padding: 0.3em 3em 0.3em 3em;
    
    background-color: #E4A200;
}

.buscar-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.buscar-button img {
    cursor: pointer;
}

.buscar-text {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-top: 0.3em;
    margin-left: 0.5em;

    cursor: pointer;
}

.faixa2-inicio {
    display: flex;
    flex-direction: column;
    
    background-color: #0096C7;
}

.selecione {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 20em;

    font-size: 22px;
    font-weight: 900;
    color: white;
}

.box-areas {
    display: flex;
    justify-content: space-evenly;

    margin-bottom: 1em;
}

.area img {
    cursor: pointer;
}

.area-aaa {
    margin-top: -1.2em;

    cursor: pointer;
}

.area-aaa img {
    cursor: pointer;
}

.ver-vagas-button {
    margin-left: 32.5em;
    margin-bottom: 2em;
}

.ver-vagas-button button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    font-size: 20px;
    font-weight: 700;
    color: white;
    background-color: #E4A200;

    padding: 0.5em 1em 0.5em 1em;
}

.ver-vagas-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.rodape-inicio {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #023E8A;
}

.siga {
    font-size: 25px;
    font-weight: 700;
    color: white;

    margin-top: 1em;
    margin-bottom: 1em;
}

.redes-sociais-box {
    display: flex;
    margin-bottom: 2em;
}

.instagram {
    margin-right: 5em;
    margin-left: 5em;
}

.facebook img {
    cursor: pointer;
}

.instagram img {
    cursor: pointer;
}

.youtube img {
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

@media (min-width: 1300px) {
    .ver-vagas-button { margin-left: 35.5em; }
    .selecione { margin-left: 22em; }
}

@media (min-width: 1366px) {
    .selecione { margin-left: 22em; }
    .ver-vagas-button { margin-left: 35em; }
}

@media (min-width: 1920px) {
    .faixa1-inicio { background-repeat: no-repeat; background-size: 100% }
    .frase-principal1-inicio { font-size: 45px; margin-top: 4.5em; } .frase-principal2-inicio { font-size: 45px; }
    .qualVaga-inicio { font-size: 28px; }
    .cargo-input input { width: 15em; font-size: 22px; }
    .buscar-text { font-size: 22px; margin-top: 0.1em; } .buscar-button button { padding: 0.5em 3em 0.8em 3em; }
    .selecione { margin-left: 35em; }
    .ver-vagas-button { margin-left: 53em; }
}
`

export { Container }