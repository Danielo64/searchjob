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
    padding-right: 2em;

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
	background: #48CAE4; 
    border-radius: 10px;
}

.left-box::-webkit-scrollbar-thumb:hover {
    background: #41b9d1;
}

.totalCandidatos {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-left: 2em;

    margin-top: 3em;
}

.cardCandidato-boxx {
    display: flex;
    flex-direction: row;

    background-color: #48CAE4;

    margin-top: 1.5em;
    margin-left: 2em;
    margin-bottom: 1em;

    padding-bottom: 1.5em;

    cursor: pointer;
}

.cardCandidato-box {
    display: flex;
    flex-direction: row;

    background-color: #48CAE4;

    margin-left: 2em;
    margin-bottom: 1em;

    padding-right: 8em;
    padding-bottom: 1.5em;

    cursor: pointer;
}

.foto-left-box {
    margin-top: 1.5em;
    margin-left: 1em;

    cursor: pointer;
}

.foto-left-box img {
    width: 52px;
    border-radius: 50%;
    height: 55px;

    cursor: pointer;
}

.nome-localidade-box {
    display: flex;
    flex-direction: column;

    margin-top: 1em;

    cursor: pointer;
}

.nomeCandidato {
    font-size: 16px;
    font-weight: 700;
    color: white;
    
    margin-top: 0.5em;
    margin-left: 1em;

    cursor: pointer;
}

.localidade {
    font-size: 16px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
    margin-left: 1em;

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

    overflow-y: scroll;
}

.right-box::-webkit-scrollbar {
	width: 20px;
}

.right-box::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    
    background-color: #ADE8F4;
}

.right-box::-webkit-scrollbar-thumb {
	background: #48CAE4; 
    border-radius: 10px;
}

.right-box::-webkit-scrollbar-thumb:hover {
    background: #41b9d1;
}

.right-box {
    display: flex;
    flex-direction: column;
}

.imagemInformacoesCandidato-box {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-right: 8em;
}

.foto-right-box {
    margin-top: 1.5em;
    margin-left: 2em;
}

.foto-right-box img {
    width: 150px;
    border-radius: 50%;
    height: 170px;
}

.right-box-candidato {
    display: flex;
    flex-direction: column;

    margin-top: 2em;
    margin-left: 0.6em;
}

.nome-candidato {
    font-size: 18px;
    font-weight: 700;
    color: white;
}

.dataNascimento-candidato {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.civil-candidato {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.localidade-candidato {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.nacionalidade-candidato {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.email-candidato {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.telefone-candidato {
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.line {
    margin-top: 0.5em;
    margin-left: 5em;
}

.objetivoTextarea {
    display: flex;
    flex-direction: column;
    
    margin-top: 0.3em;
    margin-left: 5em;
}

.objetivo {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.objetivo-textarea {
    margin-top: 0.2em;
}

.objetivo-textarea textarea {
    padding: 5em 14.3em;

    border: 1px solid black;

    background-color: white;

    cursor: text;

    resize: none;
}

.objetivo-curriculo {
    font-size: 25px;
    font-weight: 700;
    color: white
}

.formacaoTextarea {
    display: flex;
    flex-direction: column;
    
    margin-top: 0.1em;
    margin-left: 5em;
}

.formacao {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.formacao-textarea {
    margin-top: 0.2em;
}

.formacao-textarea textarea {
    padding: 1.8em 14.3em;

    border: 1px solid black;

    background-color: white;

    cursor: text;

    resize: none;
}

.experienciaTextarea {
    display: flex;
    flex-direction: column;
    
    margin-top: 0.3em;
    margin-left: 5em;
}

.experiencia {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.experiencia-textarea {
    margin-top: 0.2em;
}

.experiencia-textarea textarea {
    padding: 1.8em 14.3em;

    border: 1px solid black;

    background-color: white;

    cursor: text;

    resize: none;
}

.idiomaTextarea {
    display: flex;
    flex-direction: column;
    
    margin-top: 0.3em;
    margin-left: 5em;
}

.idioma {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.idioma-textarea {
    margin-top: 0.2em;
}

.idioma-textarea textarea {
    padding: 1em 14.3em;

    border: 1px solid black;

    background-color: white;

    cursor: text;

    resize: none;
}

.atividadeTextarea {
    display: flex;
    flex-direction: column;
    
    margin-top: 0.3em;
    margin-left: 5em;
}

.atividade {
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.atividade-textarea {
    margin-top: 0.2em;
}

.atividade-textarea textarea {
    padding: 2em 14.3em;

    border: 1px solid black;

    background-color: white;

    cursor: text;

    resize: none;
}

.buttons-box {
    display: flex;
    justify-content: right;

    margin-top: 0.5em;
    margin-bottom: 1em;
}

.enviar-button button {
    border-radius: 50px 50px 50px 50px;
    border: none;

    cursor: pointer;

    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #E4A200;

    padding: 0.3em 1.5em 0.3em 1.5em;
}

.enviar-button button:hover {
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
`

export { Container }