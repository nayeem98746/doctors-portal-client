import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Appointment from './component/Appointment/Appointment/Appointment';
import Login from './component/Login/Login/Login';
import Register from './component/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import DashBoard from './component/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
        <Route exact path="/"> 
          <Home></Home>
        </Route>
        <PrivateRoute path="/appointment">
        <Appointment></Appointment>
        </PrivateRoute>
        <Route  path="/home"> 
          <Home></Home>
        </Route>
        <Route  path="/login"> 
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <Route></Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
