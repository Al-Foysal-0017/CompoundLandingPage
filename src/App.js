import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Markets from "./pages/Markets";
import Govergance from "./pages/Govergance";
import Community from "./pages/Community"
import AppPage from "./pages/LaunchApp"
import Pool from './pages/Pool';
import Bridge from './pages/Bridge';
import Dropdown from './components/Dropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="">
      <Router>
        <Navbar toggle={toggle} /> 
        <Dropdown toggle={toggle} isOpen={isOpen}/>
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/govergance" component={Govergance} exact />
        <Route path="/markets" component={Markets} exact />
        <Route path="/community" component={Community} exact />
        <Route path="/app/swap" component={AppPage} exact />
        <Route path="/app/pool" component={Pool} exact />
        <Route path="/app/bridge" component={Bridge} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
