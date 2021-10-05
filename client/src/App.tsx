import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';

import './App.scss';
import CreateKeys from './pages/Create_Key/CreateKeys';
import Entriespage from './pages/Entries/Entriespage';
import { Home } from './pages/Home/Home';

function App() {
  return (
    //<Home/>
    // <Router>
    //     <Route path='/entry'>
            //<Entriespage />
            <CreateKeys/>
    //     </Route>
    //     <Route path='/home'>
    //         <Home />
    //     </Route>
    //     <Route path='/'>
    //         <Redirect to= '/home'/>
    //     </Route>
    // </Router>
  );
}

export default App;