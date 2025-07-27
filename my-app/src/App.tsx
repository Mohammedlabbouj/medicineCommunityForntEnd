import LandingPage from "./pages/LandingPage";
import CreateAccount from "./pages/CreateAccount";
import PageLayout from "./components/Layout/PageLayout";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const isPublicPage =
    location.pathname === "/" || location.pathname === "/createAcount";

  const renderWithLayout = (Component: React.ComponentType) => {
    return isPublicPage ? (
      <Component />
    ) : (
      <PageLayout>
        <Component />
      </PageLayout>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/createAcount" element={<CreateAccount />} />
      <Route path="/home" element={renderWithLayout(Home)} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
