import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Cart />
        <NavMenu />
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
