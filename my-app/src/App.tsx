import LandingPage from "./pages/LandingPage";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createAcount" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
