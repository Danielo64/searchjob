import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Procura from './pages/procura';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Procura} />
            </Switch>
        </BrowserRouter>
    )
}