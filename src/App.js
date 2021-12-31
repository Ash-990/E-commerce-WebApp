import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Signin from './Signin';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51K5Nn1SHBldyuOQKuqnJG5QnCHazv1RUxGemksBnX1bXpU8vri7D53isCdebu9uCi0v9iCvYWkCTZK9pHUW2WpqE00TqgWOxmm"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is : ', authUser);

      if (authUser) {
        dispatch({
          type: 'Set_User',
          user: authUser,
        });
      }
      else {
        dispatch
          ({
            type: 'Set_User',
            user: null,
          });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
