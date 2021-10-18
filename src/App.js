import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ServiceDtl from './components/Home/ServiceDtl/ServiceDtl';
import Header from './components/Home/Header/Header';
import Login from './components/Home/Login/Login';
import Footer from './components/Home/Footer/Footer';
import Register from './components/Home/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/service/:serviceDtls">
              <ServiceDtl></ServiceDtl>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/register">
              <Register></Register>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
