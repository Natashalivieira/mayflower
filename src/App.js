import Home from './pages';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </Router>
    );
}