
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/Home/Home';
import AllServices from './pages/allservices/AllServices';
import BuyNow from './pages/buyNow/BuyNow';
import Login from './pages/login/Login/Login';
import Register from './pages/login/registation/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import MyOrder from './pages/myorder/MyOrder';
import DashBoard from './pages/dashboard/Dashboard/DashBoard';
import AllOrder from './pages/dashboard/allorder/AllOrder';
import AdminRoute from './pages/login/adminRoute/AdminRoute';
import ManageProduct from './pages/dashboard/manageProduct/ManageProduct';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/allservices'>
              <AllServices></AllServices>
            </Route>
            <PrivateRoute path='/buynow/:buyId'>
              <BuyNow></BuyNow>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <AdminRoute path="/allorder">
              <AllOrder></AllOrder>
            </AdminRoute>
            <AdminRoute path="/manageProduct">
              <ManageProduct></ManageProduct>
            </AdminRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
