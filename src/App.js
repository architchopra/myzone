import "./App.css";
import Header from "./header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51KMviLSAKvxUcn5ruGjdwaaNw14dLHnpMX0RMs9LXeMsxXT24F1ayakbk1Fo35Frx6uqsKhYuHL1xS5cojr8eckO00sXwPlgZc"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myzone" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/payment"
            element={[
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          ></Route>
          {/* element={[<Header />, <Home />]}  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
