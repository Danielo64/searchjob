import styled from 'styled-components'

const Container = styled.div`
    background-color: #00B4D8;
    padding-bottom: 1.2em;

.voltar {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 0.5em;
    margin-left: 1em;
}

.voltar img {
    cursor: pointer;
}

.voltar-texto {
    font-size: 20px;
    font-weight: 800;
    color: white;

    margin-left: 0.3em;
}

.informacoes-vaga {
    display: flex;
    flex-direction: row;

    background-color: #0096C7;
    box-shadow: 0 4px 2px -2px #007ba3;

    padding-top: 1em;
    padding-bottom: 1em;
    margin-right: 10em;
    margin-left: 10em;

    justify-content:space-evenly;
}

.coluna-box-esquerda {
    display: flex;
    flex-direction: column;
}

.coluna-box-meio {
    display: flex;
    flex-direction: column;
}

.coluna-box-direita {
    display: flex;
    flex-direction: column;
}

.coluna-nome-vaga-item {
    font-size: 20px;
    font-weight: 800;
    color: white;

    padding: 8px;
}

.coluna-item {
    font-size: 15px;
    font-weight: 800;
    color: white;

    padding: 8px;
}

.coluna-salario-item {
    font-size: 20px;
    font-weight: 800;
    color: white;
    
    padding: 8px;
}

.coluna-salario-item b {
    font-size: 20px;
    font-weight: 800;
    color: #E4A200;
}

u {
    font-size: 15px;
    font-weight: 800;
    color: white;
}

.coluna-especial-item {
    font-size: 15px;
    font-weight: 600;
    color: white;
    
    padding: 8px;
}

.coluna-especial-item b {
    font-size: 15px;
    font-weight: 700;
}

.numero-vagas_e_data-vaga-item {
    font-size: 15px;
    font-weight: 600;
    color: white;
    
    padding: 6px;
}

.numero-vagas_e_data-vaga-item b {
    font-size: 15px;
    font-weight: 700;
}

.candidatar-botao-item {
    margin-top: 1em;
}

.candidatar-botao-item button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    font-size: 20px;
    font-weight: 800;
    color: white;
    background-color: #E4A200;

    padding: 0.5em 5.5em 0.5em 5.5em;
}

.candidatar-botao-item button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.descricao-vaga {
    display: flex;
    flex-direction: column;

    background-color: #0096C7;
    box-shadow: 0 4px 2px -2px #007ba3;

    padding-top: 1em;
    padding-bottom: 1em;
    margin-top: 1em;
    margin-right: 15em;
    margin-left: 15em;
}

.descricao {
    margin-left: 1em;

    font-size: 20px;
    font-weight: 800;
    color: white;
}

.exigencias {
    margin-left: 1em;

    font-size: 20px;
    font-weight: 800;
    color: white;
}

.beneficios {
    margin-left: 1em;

    font-size: 20px;
    font-weight: 800;
    color: white;
}

li {
    font-size: 15px;
    font-weight: 800;
    color: white;

    padding: 4px;
}
`

export { Container }