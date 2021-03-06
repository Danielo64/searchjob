import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #0077B6;

.voltar {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 0.8em;
    margin-left: 1em;
}

.voltar img {
    cursor: pointer;
}

.voltar-texto {
    font-size: 20px;
    font-weight: 800;
    color: white;

    margin-left: 0.5em;
}

.left-and-right-box {
    display: flex;
}

.left-box {
    display: flex;
    flex-direction: column;

    background-color: #0096C7;

    margin-top: 1em;
    margin-left: 1em;
    margin-bottom: 1em;
    padding-right: 4em;

    height: 40em;

    overflow-y: scroll;
}

.left-box::-webkit-scrollbar {
    width: 20px;
}

.left-box::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    
    background-color: #ADE8F4;
}

.left-box::-webkit-scrollbar-thumb {
    background: #00B4D8; 
    border-radius: 10px;
}

.left-box::-webkit-scrollbar-thumb:hover {
    background: #049ebd;
}

.totalVagas-button-box {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 3em;
}

.totalVagas {
    font-size: 15px;
    font-weight: 700;
    color: white;

    margin-left: 3.5em;
}

.adicionar-button {
    margin-left: 7em;
}

.adicionar-button button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #E4A200;

    padding: 0.3em 1.5em 0.3em 1.5em;
}

.adicionar-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.cardVaga-boxx {
    display: flex;
    flex-direction: column;

    background-color: #00B4D8;

    margin-top: 1.5em;
    margin-left: 2em;
    margin-bottom: 1em;

    padding-bottom: 1.5em;

    cursor: pointer;
}

.cardVaga-boxx > div {
    cursor: pointer;
}

.cardVaga-box {
    display: flex;
    flex-direction: column;

    background-color: #00B4D8;

    margin-left: 2em;
    margin-bottom: 1em;

    padding-right: 8em;
    padding-bottom: 1.5em;

    cursor: pointer;
}

.cardVaga-box > div {
    cursor: pointer;
}

.nomeVaga {
    font-size: 18px;
    font-weight: 700;
    color: white;
    
    margin-top: 0.5em;
    margin-left: 1em;
}

.salario {
    font-size: 18px;
    font-weight: 800;
    color: white;

    margin-top: 1em;
    margin-left: 1em;
}

.salario b {
    font-size: 18px;
    font-weight: 800;
    color: #E4A200;

    cursor: pointer;
}

.right-box {
    display: flex;
    flex-direction: column;

    background-color: #0096C7;

    margin-top: 1em;
    margin-left: 2em;
    padding-right: 4em;

    height: 40em;
}

.box-input1 {
    display: flex;

    margin-top: 1.5em;
    margin-left: 5em;
}

.box-input {
    display: flex;

    margin-left: 5em;
}

.nomeeVaga {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.vaga-input {
    margin-top: 0.2em;
}

.vaga-input input {
    font-size: 17px;
    font-weight: 600;
    color: #000;
    border: none;

    width: 16em;
    height: 1.4em;

    cursor: text;
}

.salarioo {
    font-size: 17px;
    font-weight: 700;
    color: white;

    margin-left: 1em;
}

.salario-input {
    margin-top: 0.2em;
    margin-left: 1em;
}

.salario-input input {
    font-size: 17px;
    font-weight: 600;
    color: #000;
    border: none;

    width: 16em;
    height: 1.4em;

    cursor: text;
}

.areaVaga {
    font-size: 17px;
    font-weight: 700;
    color: white;

    margin-top: 0.3em;
}

.area-input {
    margin-top: 0.2em;
}

.area-input input {
    font-size: 17px;
    font-weight: 600;
    color: #000;
    border: none;

    width: 16em;
    height: 1.4em;

    cursor: text;
}

.jornada {
    font-size: 17px;
    font-weight: 700;
    color: white;

    margin-top: 0.3em;
    margin-left: 1em;
}

.select-jornada {
    margin-top: 0.2em;
    margin-left: 1em;
}

.select-jornada select {
    font-size: 17px;
    font-weight: 600;
    color: #000;
    border: none;

    width: 16em;
    height: 1.4em;
}

.box-input-select {
    display: flex;

    margin-left: 5em;
}

.contrato {
    font-size: 17px;
    font-weight: 700;
    color: white;

    margin-top: 0.3em;
}

.select-contrato {
    margin-top: 0.2em;
}

.select-contrato select {
    font-size: 17px;
    font-weight: 600;
    color: #000;
    border: none;

    width: 16em;
    height: 1.4em;
}

.quantidade {
    font-size: 17px;
    font-weight: 700;
    color: white;

    margin-top: 0.3em;
    margin-left: 1em;
}

.quantidade-input {
    margin-top: 0.2em;
    margin-left: 1em;
}

.quantidade-input input {
    font-size: 17px;
    font-weight: 600;
    color: #000;
    border: none;

    width: 16em;
    height: 1.4em;

    cursor: text;
}

.descricaoVagaTextarea {
    display: flex;
    flex-direction: column;
    
    margin-top: 0.3em;
    margin-left: 5em;
}

.descricao {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.descricao-textarea {
    margin-top: 0.2em;
}

.descricao-textarea textarea {
    width: 42em;
    height: 10em;

    border: 1px solid black;

    cursor: text;

    resize: none;
}

.box-line {
    display: flex;
    justify-content: space-between;
}

.objetivo-curriculo {
    font-size: 25px;
    font-weight: 700;
    color: white
}

.line-left {
    margin-top: 0.5em;
    margin-left: 5em;
}

.line-right {
    margin-top: 0.5em;
    margin-right: 0em;
}

.exigenciaTextarea {
    display: flex;
    flex-direction: column;
    
    margin-top: 0.1em;
    margin-left: 5em;
}

.exigencia {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.exigencia-textarea {
    margin-top: 0.2em;
}

.exigencia-textarea textarea {
    width: 42em;
    height: 10em;

    border: 1px solid black;

    cursor: text;

    resize: none;
}

.beneficioTextarea {
    display: flex;
    flex-direction: column;
    
    margin-top: 0.3em;
    margin-left: 5em;
}

.beneficio {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.beneficio-textarea {
    margin-top: 0.2em;
}

.beneficio-textarea textarea {
    width: 42em;
    height: 10em;

    border: 1px solid black;

    cursor: text;

    resize: none;
}

.buttons-box {
    display: flex;
    justify-content: right;

    margin-top: 0.5em;
}

.alterar-button button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #E4A200;

    padding: 0.3em 1.5em 0.3em 1.5em;
}

.alterar-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.remover-button {
    margin-left: 1em;
}

.remover-button button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #E4A200;

    padding: 0.3em 1.5em 0.3em 1.5em;
}

.remover-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

@media (max-width: 1300px) {
    { padding-bottom: 1.8em; }
    .left-box { height: 48em; overflow-y: auto; }
    .right-box { height: 48em; }
}

@media (max-width: 1400px) {
    .right-box { overflow-y: auto; }
    .buttons-box { margin-bottom: 1em; }
    .right-box::-webkit-scrollbar { width: 20px; }
    .right-box::-webkit-scrollbar-track { box-shadow: inset 0 0 5px grey; border-radius: 10px; background-color: #ADE8F4; }
    .right-box::-webkit-scrollbar-thumb { background: #00B4D8; border-radius: 10px; }
    .right-box::-webkit-scrollbar-thumb:hover { background: #049ebd; }
}

@media (max-width: 1440px) {
    .right-box { overflow-y: auto; }
    .buttons-box { margin-bottom: 1em; }
    .right-box::-webkit-scrollbar { width: 20px; }
    .right-box::-webkit-scrollbar-track { box-shadow: inset 0 0 5px grey; border-radius: 10px; background-color: #ADE8F4; }
    .right-box::-webkit-scrollbar-thumb { background: #00B4D8; border-radius: 10px; }
    .right-box::-webkit-scrollbar-thumb:hover { background: #049ebd; }
}

@media (min-width: 1920px) {
    .left-and-right-box { justify-content: center; }
    
    .left-box { padding-right: 4em; }
    .cardVaga-box { padding-right: 15em; }
    
    .right-box { overflow-y: auto; margin-left: 4em; }
    .buttons-box { margin-bottom: 1em; }
    .right-box::-webkit-scrollbar { width: 20px; }
    .right-box::-webkit-scrollbar-track { box-shadow: inset 0 0 5px grey; border-radius: 10px; background-color: #ADE8F4; }
    .right-box::-webkit-scrollbar-thumb { background: #00B4D8; border-radius: 10px; }
    .right-box::-webkit-scrollbar-thumb:hover { background: #049ebd; }

    .totalVagas { font-size: 20px; }
    .adicionar-button button { font-size: 20px; }
    .totalVagas-button-box { margin-left: 2em; }
    .nomeVaga { font-size: 22px; }
    .salario { font-size: 22px; } .salario b { font-size: 22px; }

    .nomeeVaga { font-size: 20px; }
    .salarioo { font-size: 20px; margin-left: 0.8em; }
    .areaVaga { font-size: 20px; }
    .jornada { font-size: 20px; margin-left: 0.8em; }
    .contrato { font-size: 20px; }
    .quantidade { font-size: 20px; margin-left: 0.8em; }
    .descricao { font-size: 20px; }
    .exigencia { font-size: 20px; }
    .beneficio { font-size: 20px; }
    .alterar-button button { font-size: 18px; }
    .remover-button button { font-size: 18px; }
}
`

export { Container }