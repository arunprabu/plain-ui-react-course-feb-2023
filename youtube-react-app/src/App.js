import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// importing css
import "./App.css"; // importing css
import HomePage from "./pages/HomePage/HomePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

// Component
function App() {
  // must return JSX
  return (
    // Here comes JSX
    // Ideal place for you to build the layout
    <BrowserRouter>
      <Header />

      <main className="container mt-5 pt-3">
        {/* configure the routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
