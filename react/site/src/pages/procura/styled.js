import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #00B4D8;

.leftAndRightBox {
    display: flex;
    flex-direction: row;
}

.left-box {
    display: flex;
    flex-direction: column;
    
    background-color: #0096C7;
    padding-right: 5em;
}

.numeroVagas {
    font: 20px Mulish-Bold;
    color: white;

    margin-top: 1em;
    margin-left: 2em;
}

.totalAnuncios {
    font: 20px Mulish-Bold;
    color: white;

    margin-left: 2em;
}

.cargo-text {
    font: 16px Mulish-Bold;
    color: white;

    margin-top: 1em;
    margin-left: 2.5em;
}

.cargo-input {
    margin-top: 0.2em;
    margin-left: 2.5em;
}

.cargo-input input {
    border: none;

    padding-top: 0.5em;
    padding-right: 12em;
    padding-bottom: 0.5em;
    padding-left: 0.7em;

    cursor: text;
}

::placeholder {
    font: 17px Mulish-Bold;
    color: #A39C9C;
}

.localidade-text {
    font: 16px Mulish-Bold;
    color: white;

    margin-top: 0.5em;
    margin-left: 2.5em;
}

.localidade-input {
    margin-top: 0.2em;
    margin-left: 2.5em;
}

.localidade-input input {
    border: none;

    padding-top: 0.5em;
    padding-right: 12em;
    padding-bottom: 0.5em;
    padding-left: 0.7em;

    cursor: text;
}

.areaProfissional-text {
    font: 16px Mulish-Bold;
    color: white;

    margin-top: 0.5em;
    margin-left: 2.5em;
}

.select-area {
    margin-top: 0.2em;
    margin-left: 2.5em;
}

.select-area select {
    border: none;

    padding-top: 0.2em;
    padding-right: 7.8em;
    padding-bottom: 0.2em;
    padding-left: 0.5em;

    font: 17px Mulish-Bold;
    color: #A39C9C;
}

.select-salario {
    margin-top: 0.2em;
    margin-left: 2.5em;
}

.select-salario select {
    border: none;

    padding-top: 0.2em;
    padding-right: 7em;
    padding-bottom: 0.2em;
    padding-left: 0.5em;

    font: 17px Mulish-Bold;
    color: #A39C9C;
}

.select-metodo {
    margin-top: 0.2em;
    margin-left: 2.5em;
}

.select-metodo select {
    border: none;

    padding-top: 0.2em;
    padding-right: 7.8em;
    padding-bottom: 0.2em;
    padding-left: 0.5em;

    font: 17px Mulish-Bold;
    color: #A39C9C;
}

option {
    font: 17px Mulish-Bold;
    color: #A39C9C;
}

.salario-text {
    font: 16px Mulish-Bold;
    color: white;

    margin-top: 0.5em;
    margin-left: 2.5em;
}

.metodoTrabalho-text {
    font: 16px Mulish-Bold;
    color: white;

    margin-top: 0.5em;
    margin-left: 2.5em;
}

.filtrar-button {
    margin-top: 2em;
    margin-left: 7em;
}

.filtrar-button button {
    display: flex;
    flex-direction: row;

    cursor: pointer;
    
    border-radius: 50px 50px 50px 50px;
    border: none;

    padding: 0.5em 3em 0.5em 3em;
    
    background-color: #E4A200;
}

.filtrar-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.filtrar-button img {
    cursor: pointer;
}

.filtrar-text {
    font: 20px Mulish-Bold;
    color: white;

    margin-top: 0.2em;
    margin-left: 0.5em;

    cursor: pointer;
}

.right-box {
    display: flex;
    flex-direction: column;
    
    padding-left: 2em;
}

.card-vaga1 {
    display: flex;
    flex-direction: column;

    background-color: #0096C7;
    box-shadow: 0 4px 2px -2px #007ba3;

    margin-top: 1em;
    margin-bottom: 1em;

    padding-right: 15em;
    padding-bottom: 1em;
}

.card-vaga {
    display: flex;
    flex-direction: column;

    background-color: #0096C7;
    box-shadow: 0 4px 2px -2px #007ba3;

    margin-bottom: 1em;
    padding-right: 15em;
    padding-bottom: 1em;
}

.nome-vaga {
    font: 23px Mulish-Extra-Bold;
    color: white;

    margin-top: 0.3em;
    margin-left: 1em;
}

.nome-empresa u {
    font: 18px Mulish-Extra-Bold;
    color: white;

    margin-left: 1.3em;
}

.descricao-vaga {
    font: 15px Mulish-Extra-Bold;
    color: white;

    margin-top: 0.5em;
    margin-left: 1.5em;

    line-height: 20px;
}

.box-salario-button {
    display: flex;
    flex-direction: row;

    margin-left: 1.3em;

    justify-content: space-between;
}

.salario-vaga {
    font: 19px Mulish-Extra-Bold;
    color: white;

    margin-top: 1em;
}

.salario-vaga b {
    font: 19px Mulish-Extra-Bold;
    color: #E4A200;
}

.maisInformacoes-button {
    margin-top: 1.2em;
}

.maisInformacoes-button button {
    cursor: pointer;
    
    border-radius: 50px 50px 50px 50px;
    border: none;

    padding-top: 0.3em;
    padding-right: 2em;
    padding-bottom: 0.3em;
    padding-left: 2em;

    background-color: #E4A200;

    font: 15px Mulish-Bold;
    color: white;
}

.maisInformacoes-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}
`

export { Container }