import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #0096C7;

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

    margin-left: 0.5em;
}

.informacoes-candidato {
    display: flex;
    justify-content: center;
}

.left-box-candidato {
    display: flex;
    flex-direction: column;
}

.imagemPerfil img {
    width: 120px;
    height: 160px;
}

.alterarImagem u {
    margin-left: 1.8em;
    
    font-size: 15px;
    font-weight: 700;
    color: white;

    cursor: pointer;
}

.right-box-candidato {
    display: flex;
    flex-direction: column;

    margin-left: 0.6em;
}

.nome-candidato {
    font-size: 15px;
    font-weight: 700;
    color: white;
}

.dataNascimento-candidato {
    font-size: 15px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.civil-candidato {
    font-size: 15px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.localidade-candidato {
    font-size: 15px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.nacionalidade-candidato {
    font-size: 15px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.email-candidato {
    font-size: 15px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.telefone-candidato {
    font-size: 15px;
    font-weight: 700;
    color: white;

    margin-top: 0.5em;
}

.informacoes-curriculo {
    display: flex;
    flex-direction: column;
    
    background-color: #00B4D8;

    margin-top: 1em;
    margin-left: 15em;
    margin-right: 15em;

    padding-bottom: 1em;
}

.box-line {
    display: flex;
    justify-content: space-between;
}

.line-left {
    margin-top: 0.5em;
    margin-left: 3em;
}

.line-right {
    margin-top: 0.5em;
    margin-right: 2em;
}

.line-left1 {
    margin-top: 1em;
    margin-left: 3em;
}

.line-right1 {
    margin-top: 1em;
    margin-right: 2em;
}

.line-left2 {
    margin-top: 1em;
    margin-left: 3em;
}

.line-right2 {
    margin-top: 1em;
    margin-right: 2em;
}

.objetivo-curriculo {
    font-size: 22px;
    font-weight: 700;
    color: white;
    
    text-align: center;

    margin-top: 0.5em;
}

.objetivo-textarea {
    margin-top: 0.6em;
    margin-left: 3em;
}

.objetivo-textarea textarea {
    padding: 2em 20.2em;

    border: 1px solid black;

    cursor: text;

    resize: none;
}

.formacao-academica-curriculo {
    font-size: 22px;
    font-weight: 700;
    color: white;
    
    text-align: center;
}

.formacao-academica-textarea {
    margin-top: 0.6em;
    margin-left: 3em;
}

.formacao-academica-textarea textarea {
    padding: 1.5em 20.2em;

    border: 1px solid black;

    cursor: text;

    resize: none;
}

.experiencia-profissional-curriculo {
    font-size: 22px;
    font-weight: 700;
    color: white;
    
    text-align: center;
}

.experiencia-profissional-textarea {
    margin-top: 0.6em;
    margin-left: 3em;
}

.experiencia-profissional-textarea textarea {
    padding: 1.5em 20.2em;

    border: 1px solid black;

    cursor: text;

    resize: none;
}

.idiomas-curriculo {
    font-size: 22px;
    font-weight: 700;
    color: white;
    
    text-align: center;
}

.idiomas-textarea {
    margin-top: 0.6em;
    margin-left: 3em;
}

.idiomas-textarea textarea {
    padding: 1em 20.2em;

    border: 1px solid black;

    cursor: text;

    resize: none;
}

.atividades-complementares-curriculo {
    font-size: 22px;
    font-weight: 700;
    color: white;
    
    text-align: center;
}

.atividades-complementares-textarea {
    margin-top: 0.6em;
    margin-left: 3em;
}

.atividades-complementares-textarea textarea {
    padding: 1.5em 20.2em;

    border: 1px solid black;

    cursor: text;

    resize: none;
}

.salvar-button {
    align-self: flex-end;

    margin-top: 1em;
    margin-right: 2em;
}

.salvar-button button {
    cursor: pointer;
    
    border-radius: 50px 50px 50px 50px;
    border: none;

    padding-top: 0.3em;
    padding-right: 3em;
    padding-bottom: 0.3em;
    padding-left: 3em;

    background-color: #E4A200;

    font-size: 15px;
    font-weight: 700;
    color: white;
}

.salvar-button button:hover {
    background-color: #c98f00;
    transition: 1s;
}
`

export { Container }