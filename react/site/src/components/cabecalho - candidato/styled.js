import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: row;

    background-color: #0077B6;

    justify-content: space-around;
    align-items: center;


.logo img {
    cursor: pointer;
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
}

.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;

    cursor: pointer;
}
`

export { Container }