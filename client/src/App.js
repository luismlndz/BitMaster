import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Game from './pages/Game/Game';
import Landing from './pages/Landing/Landing';

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/play' component={Game}/>
      </Switch>
    </Router>
  );
}
