import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from './pages/tela inicial';
import CadastroCandidato from './pages/cadastro - candidato';
import CadastroEmpresa from './pages/cadastro - empresa';
import Login from './pages/login';
import Procura from './pages/procura';
import MaisInformacoes from './pages/mais informações da vaga';
import Curriculo from './pages/criação de currículo';
import Vaga from './pages/criação de vaga';
import Recrutamento from './pages/recrutamento';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact={true} component={Inicio} />
            <Route path="/cadastro-candidato" component={CadastroCandidato} />
            <Route path="/cadastro-empresa" component={CadastroEmpresa} />
            <Route path="/login" component={Login} />
            <Route path="/procura" component={Procura} />
            <Route path="/informacoes" component={MaisInformacoes} />
            <Route path="/criacao-curriculo" component={Curriculo} />
            <Route path="/criacao-vaga" component={Vaga} />
            <Route path="/recrutamento" component={Recrutamento} />
            </Switch>
        </BrowserRouter>
    )
}