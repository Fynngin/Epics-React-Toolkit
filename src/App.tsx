import './App.css';
import './index.css';
import Login from './Login/Login';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useContext, createContext, useState } from "react";
import { User } from './interfaces/User';

interface Auth {
  user: User
  signin: (user: User) => void
  signout: () => void
}

const authContext = createContext({user: {} as User, signin: (user: User) => {}, signout: () => {}} as Auth);

function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState({} as User);

  const signin = (user: User) => {
    setUser(user);
  };

  const signout = () => {
    setUser({} as User);
  };

  return {
    user,
    signin,
    signout
  } as Auth;
}

function PrivateRoute({ children, ...rest }: any) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user.jwt.length > 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path='/login' exact render={() => <Login/>}/>
          <PrivateRoute path='/'>
            <Home/>
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
