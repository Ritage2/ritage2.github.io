import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import ErrorBoundary from "./components/ErrorBoundary";

// Pages
import Home from "./pages/home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Planner from "./pages/Planner";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import ThankYouContact from "./pages/ThankYouContact";
import ThankYouPayment from "./pages/ThankYouPayment";

function App() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isHome = path === "/home";  
const isNavbarHiddenPage = ["/login", "/signup", "/"].includes(path);  


  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
     
      {!isNavbarHiddenPage && <Navbar />}

      <ErrorBoundary>
        <main
          className={`flex-1 w-full ${
            ["/login", "/signup", "/" , "/home"].includes(path)
              ? "" 
              : "max-w-6xl mx-auto px-4 py-8" 
          }`}
        >
          <Routes>
           
            <Route path="/" element={<Welcome />} />
            
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetails />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/ThankYouPayment" element={<ThankYouPayment />} />
            <Route path="/ThankYouContact" element={<ThankYouContact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </ErrorBoundary>

      {/* Footer only on /home */}
      {isHome && <Footer />}
    </div>
  );
}

export default App;
