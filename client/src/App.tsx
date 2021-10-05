import { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';

import './App.scss';
import Entriespage from './pages/Entries/Entriespage';
import { Home } from './pages/Home/Home';

function App() {

  const [hasKey, setHasKey] = useState<boolean>(false)
  const [displayPic, setDisplayPic] = useState<string>('')

  return (
    <Home/>
    // <Router>
    //     <Route path='/entry'>
            // <Entriespage />
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