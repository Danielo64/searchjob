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

.menu {
    list-style: none;
    float: left;

    border-radius: 50px 50px 50px 50px;
    padding-top: 0.5em;
    padding-bottom: 0.5em;

    border: 2px solid #E4A200;
    background-color: white;

    margin-right: 1em;
}

.menu:hover {
    background-color: #e3e2e1;
    transition: 1s;
}

.menu li {
    position: relative;
    float: left;

    font-size: 18px;
    font-weight: 700;
    color: #E4A200;

    margin-left: -1.5em;
    margin-right: 0.5em;
}

.menu li a { color: #E4A200; text-decoration: none; padding-top: 0.3em; padding-bottom: 0.3em; display: block; }

.menu li  ul {
    position: absolute;
    top: 25px;
    left: 0;
    background-color: #fff;
    display: none;
}

.menu li:hover ul, .menu li.over ul { display: block; }

.menu li ul li {
    border: 1px solid #c0c0c0;
    display: block;
    width: 150px;
}

.line {
    margin-top: 0.1em;
}

.entrar-button {
    margin-top: 0.9em;
    margin-left: 0.6em;
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

@media (min-width: 1920px) {
    .procurar-button button { font-size: 22px; }
    .publicar-button button { font-size: 22px; }
    .criar-button button { font-size: 22px; }
    .menu li { font-size: 22px; padding-left: 0.2em; padding-right: 0.2em; }
    .entrar-button button { font-size: 22px; }
}
`

export { Container }