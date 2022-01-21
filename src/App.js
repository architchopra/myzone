import "./App.css";
import Header from "./header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myzone" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
