import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./components/LoginModal";
import Settings from "./pages/Settings";
import Welcome from "./pages/Welcome";
import AiPage from "./pages/Ai";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "linear-gradient(to bottom, var(--navy), var(--charcoal))" }}>
      <Router>
        {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
        {!isLoginOpen && (
          <>
            <Header />
            <main className="container-fluid flex-grow-1 p-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/ai" element={<AiPage />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
};

export default App;