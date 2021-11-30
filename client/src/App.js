import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Game from './pages/Game/Game';

function App() {
  return (
    <Router>
      <Switch>
        <Route to='/' component={Game}/>
      </Switch>
    </Router>
  );
}

export default App;
