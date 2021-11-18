import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroCandidato from './pages/cadastro - candidato';
import CadastroEmpresa from './pages/cadastro - empresa';
import LoginCandidato from './pages/login - candidato';
import LoginEmpresa from './pages/login - empresa';
import Inicio from './pages/tela inicial';
import Procura from './pages/procura';
import MaisInformacoes from './pages/mais informações da vaga';
import Curriculo from './pages/criação de currículo';
import Vaga from './pages/criação de vaga';
import Recrutamento from './pages/recrutamento';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact={true} component={CadastroCandidato} />
            <Route path="/cadastro-empresa" component={CadastroEmpresa} />
            <Route path="/login-candidato" component={LoginCandidato} />
            <Route path="/login-empresa" component={LoginEmpresa} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/procura" component={Procura} />
            <Route path="/informacoes" component={MaisInformacoes} />
            <Route path="/criacao-curriculo" component={Curriculo} />
            <Route path="/criacao-vaga" component={Vaga} />
            <Route path="/recrutamento" component={Recrutamento} />
            </Switch>
        </BrowserRouter>
    )
}