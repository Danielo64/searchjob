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

.buttons-line {
    display: flex;
}

.cadastre-button {
    margin-top: 0.7em;
    margin-right: 0.6em;
}

.entrar-button {
    margin-top: 0.7em;
    margin-left: 0.6em;
}

.cadastre-button button {
    border-radius: 50px 50px 50px 50px;
    border: 2px solid #E4A200;

    cursor: pointer;

    font-size: 18px;
    font-weight: 700;
    color: #E4A200;
    background-color: white;

    padding: 0.5em 1em 0.5em 1em;
}

.cadastre-button button:hover {
    background-color: #e3e2e1;
    transition: 1s;
}

.entrar-button button {
    border-radius: 50px 50px 50px 50px;
    border: 2px solid #E4A200;

    cursor: pointer;

    font-size: 18px;
    font-weight: 700;
    color: #E4A200;
    background-color: white;

    padding: 0.5em 1em 0.5em 1em;
}

.entrar-button button:hover {
    background-color: #e3e2e1;
    transition: 1s;
}
`

export { Container }