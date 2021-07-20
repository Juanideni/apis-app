import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Books from "./Books";
import CreditCards from './CreditCards';
import Home from "./Home";

function App() {
return(
<Router>
<Switch>
    <Route path="/Credit-Cards">
        <CreditCards/>
    </Route>
    <Route path="/Books">
        <Books/>
    </Route>
    <Route path="/">
        <Home/>
    </Route>
</Switch>

</Router>
)
}

export default App;
