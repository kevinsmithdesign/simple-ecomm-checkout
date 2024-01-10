import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { StoreContext, StoreProvider } from "./context/StoreContext";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
