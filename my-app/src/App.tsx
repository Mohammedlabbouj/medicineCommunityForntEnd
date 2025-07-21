import LandingPage from "./pages/LandingPage";
import SignUp from "./components/SignUp";
import CreateAccount from "./pages/CreateAccount";
import CodeVerification from "./components/CodeVerification";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createAcount" element={<CreateAccount />} />
        <Route path="/codeVerification" element={<CodeVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
