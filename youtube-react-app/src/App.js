import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// importing css
import './App.css';
import HomePage from './pages/HomePage/HomePage';

// Component 
function App() {
  // must return JSX
  return (
    // Here comes JSX
    // Ideal place for you to build the layout
    <div>
      <Header />

      <main className="container mt-5">
        <HomePage/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
