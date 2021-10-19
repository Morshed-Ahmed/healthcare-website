import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import ServiceDtl from './components/Home/ServiceDtl/ServiceDtl';
import Header from './components/Home/Header/Header';
import Login from './components/Home/Login/Login';
import Footer from './components/Home/Footer/Footer';
import Register from './components/Home/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import NotFound from './components/Home/NotFound/NotFound';
import News from './components/Home/News/News';
import Blog from './components/Home/Blog/Blog';


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
            <PrivateRoute path="/service/:serviceDtls">
              <ServiceDtl></ServiceDtl>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
