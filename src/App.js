import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>

        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route path="/home" >
              <Home></Home>
            </Route>
            <PrivetRoute path="/shipping" >
              <Shipping></Shipping>
            </PrivetRoute>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="/register" >
              <Register></Register>
            </Route>
            <Route path="*" >
              <NotFound></NotFound>
            </Route>
          </Switch>

        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
