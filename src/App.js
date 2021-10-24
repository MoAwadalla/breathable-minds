import {Resource} from "./Resource";
import {Community} from "./Community";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Community}/>
        <Route path="/resources" component={Resource}/>
      </Switch>
    </Router>
  );
}
