import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// importing css
import './App.css'; // importing css
import HomePage from './pages/HomePage/HomePage';
import VideoPage from './pages/VideoPage/VideoPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';
import HocDemoPage from './pages/HocDemoPage/HocDemoPage';

// Component
function App () {
  // must return JSX
  return (
    // Here comes JSX
    // Ideal place for you to build the layout
    <ErrorBoundary>
      <BrowserRouter>
        <Header />

        <main className="container mt-5 pt-3" id="mainSection">
          {/* configure the routes */}
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="/hoc-demo" element={<HocDemoPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
          </ErrorBoundary>
        </main>

        <Footer></Footer>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
