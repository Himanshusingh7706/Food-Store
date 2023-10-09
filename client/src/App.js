import React, { useEffect } from "react";
import "./App.css";
import Home from "./component/Home";
import Footer from "./component/Layout/Footer";
import Header from "./component/Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import Cart from "./component/cart/Cart";
import Delivery from "./component/cart/Delivery";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import { loadUser } from "./actions/userActions";
import store from "./store";
import Profile from "./component/user/Profile";
import UpdateProfile from "./component/user/UpdateProfile";
import ForgotPassword from "./component/user/ForgotPassword";
import NewPassword from "./component/user/NewPassword";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/eats/stores/:id/menus" element={<Menu />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/delivery" element={<Delivery />} exact />

            {/* User  */}
            <Route path="/users/login" element={<Login />} exact />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} exact />
            <Route
              path="/users/forgetPassword"
              element={<ForgotPassword />}
              exact
            />
            <Route
              path="/users/resetPassword"
              element={<NewPassword />}
              exact
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
