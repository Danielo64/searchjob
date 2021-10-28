import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from './pages/tela inicial';
import CadastroCandidato from './pages/cadastro - candidato';
import CadastroEmpresa from './pages/cadastro - empresa';
import Login from './pages/login';
import Procura from './pages/procura';
import MaisInformacoes from './pages/mais informações da vaga';
import Curriculo from './pages/criação de currículo';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact={true} component={Inicio} />
            <Route path="/cadastro - candidato" exact={true} component={CadastroCandidato} />
            <Route path="/" exact={true} component={CadastroEmpresa} />
            <Route path="/" exact={true} component={Login} />
            <Route path="/" exact={true} component={Procura} />
            <Route path="/" exact={true} component={MaisInformacoes} />
            <Route path="/" exact={true} component={Curriculo} />
            </Switch>
        </BrowserRouter>
    )
}