import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: row;

    background-color: #0077B6;

    justify-content: space-around;
    align-items: center;


.logo img {
    cursor: pointer;

    width: 120px;
    height: 120px;
}

.procurar-button button {
    background-color: #E4A200;

    font-size: 18px;
    font-weight: 700;
    color: white; 

    border-radius: 4px;
    border: none;

    padding-top: 0.3em;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.3em;

    cursor: pointer;
}

.procurar-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.publicar-button button {
    background-color: #E4A200;

    font-size: 18px;
    font-weight: 700;
    color: white;

    border-radius: 4px;
    border: none;

    padding-top: 0.3em;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.3em;

    cursor: pointer;
}

.publicar-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.recrutamento-button button {
    background-color: #E4A200;

    font-size: 18px;
    font-weight: 700;
    color: white;

    border-radius: 4px;
    border: none;

    padding-top: 0.3em;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.3em;

    cursor: pointer;
}

.recrutamento-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.criar-button button {
    background-color: #E4A200;

    font-size: 18px;
    font-weight: 700;
    color: white;

    border-radius: 4px;
    border: none;

    padding-top: 0.3em;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.3em;

    cursor: pointer;
}

.criar-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}

.user-image {
    border-radius: 50%;

    margin-right: 0.4em;
}

.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;
}

.image-button-line {
    display: flex;
    align-items: center;
}

.user-image {
    border-radius: 50%;

    margin-right: 0.4em;
}

.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;
}

.ola-nome {
    font-size: 15px;
    font-weight: 700;
    color: white;
}

.line {
    margin-top: 0.1em;
    margin-left: 1em;
    margin-right: 2em;
}

.sair-button {
    margin-top: 0.2em;
    margin-left: -1em;
}

.sair-button button {
    border-radius: 50px 50px 50px 50px;
    border: 2px solid #E4A200;

    cursor: pointer;

    font-size: 18px;
    font-weight: 700;
    color: #E4A200;
    background-color: white;

    padding: 0.5em 1em 0.5em 1em;
}

.sair-button button:hover {
    background-color: #e3e2e1;
    transition: 1s;
}

@media (min-width: 1920px) {
    .procurar-button button { font-size: 22px; }
    .criar-button button { font-size: 22px; }
    .ola-nome { font-size: 22px; }
    .sair-button button { font-size: 22px; }
}
`

export { Container }