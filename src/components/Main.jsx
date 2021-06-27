import Companies from "./HomePage/Companies";
import Company from "./HomePage/Company";
import Person from "./HomePage/Person";
import Details from './DetailsPage/Details'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <div className="homepage">
                        <Companies />
                        <div className="sidebar">
                            <Company />
                            <Person />
                        </div>
                    </div>
                </Route>
                <Route path='/:id' component={Details} />
            </Switch>
        </Router>

    )
}