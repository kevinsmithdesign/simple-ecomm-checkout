import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Navbar />
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
