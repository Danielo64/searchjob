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

    width: 28em;
    height: 33.1em;
    padding-right: 5em;
}

.numeroVagas {
    font-size: 20px;
    font-weight: 700;
    color: white;

    margin-top: 1em;
    margin-left: 2em;
}

.totalAnuncios {
    font-size: 20px;
    font-weight: 700;
    color: white;

    margin-top: 1em;
    margin-left: 2em;
}

.cargo-text {
    font-size: 16px;
    font-weight: 700;
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

    width: 25.3em;
    height: 2.2em;
    padding-left: 0.7em;

    cursor: text;
}

::placeholder {
    font-size: 17px;
    font-weight: 700;
    color: #A39C9C;
}

.localidade-text {
    font-size: 16px;
    font-weight: 700;
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

    width: 25.3em;
    height: 2.2em;
    padding-left: 0.7em;

    cursor: text;
}

.areaProfissional-text {
    font-size: 16px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
    margin-left: 2.5em;
}

.salario-text {
    font-size: 16px;
    font-weight: 700;
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
    font-size: 20px;
    font-weight: 700;
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
    font-size: 23px;
    font-weight: 800;
    color: white;

    margin-top: 0.3em;
    margin-left: 1em;
}

.nome-empresa {
    font-size: 18px;
    font-weight: 800;
    color: white;

    margin-left: 1.3em;
}

.descricao-vaga {
    font-size: 15px;
    font-weight: 800;
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
    font-size: 19px;
    font-weight: 800;
    color: white;

    margin-top: 1em;
}

.salario-vaga b {
    font-size: 19px;
    font-weight: 800;
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

    font-size: 15px;
    font-weight: 700;
    color: white;
}

.maisInformacoes-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

@media (min-width: 1280px) {
    .left-box { width: 28em; height: 49.3em; }
}

@media (min-width: 1920px) {
    .cargo-text { font-size: 20px; margin-left: 1.9em; }
    .cargo-input input { width: 25.4em; height: 2.5em; font-size: 18px; }
    .localidade-text { font-size: 20px; margin-left: 1.9em; }
    .localidade-input input { width: 25.4em; height: 2.5em; font-size: 18px; }
    .areaProfissional-text { font-size: 20px; margin-left: 2em; }
    .select-area select {  width: 25.3em; height: 2.3em; font-size: 18px; }
    .select-salario select {  width: 25.3em; height: 2.3em; font-size: 18px; }
    option { font-size: 18px; }
    .filtrar-button { margin-left: 10em; } .filtrar-text { font-size: 22px; margin-top: 0.1em; }
    .card-vaga1 { width: 75em; height: 12.1em; }
    .nome-vaga { font-size: 30px; margin-left: 0.7em; } .nome-empresa { font-size: 25px; margin-left: 0.8em; } .descricao-vaga { font-size: 23px; margin-left: 0.8em; line-height: 25px; } .salario-vaga { font-size: 27px; } .salario-vaga b { font-size: 27px; }
    .maisInformacoes-button button { font-size: 22px; margin-top: 0.3em; }
}
`

export { Container }