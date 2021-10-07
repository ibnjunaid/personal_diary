import { useReducer, useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';

import './App.scss';
import Entriespage from './pages/Entries/Entriespage';
import { Home } from './pages/Home/Home';

export interface UserInterface {
  isSecretsConfigured: boolean,
  email: string,
  displayPicture: string,
  userName: string
}

const initialState: UserInterface = {
  isSecretsConfigured: false,
  email: '',
  displayPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_0exkA6Rq8-cVs9yK-IOErE-MulGdqx7nP3uyk9hWq27iv5xfHp4j0KP_YgFumn242c&usqp=CAU',
  userName: 'Username'
}

export const StateContext = createContext<{
  state: UserInterface;
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
})


const reducer = (state: UserInterface, action: any) => {
  switch (action.type) {
    case 'isSecretConfigured':
      return { ...state, isSecretsConfigured: action.value }
    case 'email':
      return { ...state, email: action.value };
    case 'displayPicture':
      return { ...state, displayPicture: action.value }
    case 'userName':
      return { ...state, userName: action.value }
    case 'setUser':
      console.log(action.value)
      return { ...action.value }
    default:
      return state
  }
}

function App() {

  const [newState, dispatch] = useReducer(reducer, initialState)

  return (

    <StateContext.Provider value={{ state: newState, dispatch: dispatch }}>

      <Router>
        <Route path='/entry'>
          <Entriespage />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Router>
      
    </StateContext.Provider>
  );
}

export default App;