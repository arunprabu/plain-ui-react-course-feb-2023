import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// importing css
import './App.css'; // importing css
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import { useEffect, useReducer } from 'react';
import cartReducer from './reducers/cartReducer';

// Component
function App () {
  const userStatus = {
    isLoggedIn: true,
    lastLogin: '11/Mar/2023'
  };

  const [cartState, cartDispatch] = useReducer(cartReducer);
  console.log(cartState);
  // console.log(cartDispatch);

  useEffect(() => {
    cart.cartDispatch({
      type: 'FETCH_CART'
    });
  }, []);

  const cart = {
    cartState, // needed for Header comp
    cartDispatch // needed for ShopPage Comp
  };

  console.log(cart);

  // must return JSX
  return (
    // Here comes JSX
    // Ideal place for you to build the layout
    <ErrorBoundary>
      <CartContext.Provider value={cart}>
        <BrowserRouter>
          <Header />

          <main className='container mt-5 pt-3' id='mainSection'>
            {/* configure the routes */}
            <ErrorBoundary>
              {/* Step 2 of Context API -- providing data thru context */}
              <PageContext.Provider value={userStatus}>
                <AppRoutes />
              </PageContext.Provider>
            </ErrorBoundary>
          </main>

          <Footer></Footer>
        </BrowserRouter>
      </CartContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
