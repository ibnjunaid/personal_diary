import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.scss';
import Entriespage from './pages/Entries/Entriespage';
import { Home } from './pages/Home/Home';

function App() {
  return (
    //<Home/>
    <Router>
        <Route path='/entry'>
            <Entriespage />
        </Route>
    </Router>
  );
}

export default App;