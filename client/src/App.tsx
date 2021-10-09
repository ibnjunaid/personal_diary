import { useReducer, createContext } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';

import './App.scss';
import CreateKeys from './pages/Create_Key/CreateKeys';
import EnterKey from './pages/Create_Key/EnterKey';
import Entriespage from './pages/Entries/Entriespage';
import { Home } from './pages/Home/Home';

export interface UserInterface {
  isLoggedIn: boolean,
  isSecretsConfigured: boolean,
  email: string,
  displayPicture: string,
  userName: string,
  Sectet: string,
  Private: string
}

const initialState: UserInterface = {
  isLoggedIn: false,
  isSecretsConfigured: false,
  email: '',
  displayPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_0exkA6Rq8-cVs9yK-IOErE-MulGdqx7nP3uyk9hWq27iv5xfHp4j0KP_YgFumn242c&usqp=CAU',
  userName: 'Username',
  Sectet: '',
  Private: ''
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
      return { ...action.value , isLoggedIn: true }
    case 'SecretKey':
      return { ...state, Secret: action.value}
    case 'PrivateKey':
        return { ...state, Private: action.value}
    default:
      return state
  }
}

function App() {

  const [newState, dispatch] = useReducer(reducer, initialState)

  let f : any = window;
  f.d = newState;

  return (

    <StateContext.Provider value={{ state: newState, dispatch: dispatch }}>
      <Router>
        <ConditionalRoute Condition={ newState.isLoggedIn } path='/entry'>
          <Entriespage/>
        </ConditionalRoute>
        <Route path='/home'>
          <Home />
        </Route>
        {/* <ConditionalRoute Condition={ newState.isLoggedIn && !newState.isSecretsConfigured } path='/entry'>
          <CreateKeys/>
        </ConditionalRoute> */}
        <Route path='/newUser'>
          <CreateKeys/>
        </Route>
        <Route path='/user'>
          <EnterKey/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Router>
    </StateContext.Provider>
  );
}

function ConditionalRoute({children, Condition, path}: any){
  return (
    <Route path = {path} render = {() => {
      if(Condition){
        return children
      } else {
        return <Redirect to='/'/>
      }
    }}/>
  )
}

export default App;