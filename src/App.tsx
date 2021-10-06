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

interface Auth {
  jwt: string
  signin: (jwt: string) => void
  signout: () => void
}

const authContext = createContext({jwt: "", signin: (jwt: string) => {}, signout: () => {}} as Auth);

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
  const [jwt, setJwt] = useState("");

  const signin = (jwt: string) => {
    setJwt(jwt);
  };

  const signout = () => {
    setJwt("");
  };

  return {
    jwt,
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
        auth.jwt.length > 0 ? (
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
