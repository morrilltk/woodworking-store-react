import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import AppNavbar from "./components/AppNavbar";
import ProductList from "./components/ProductList";
import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <AppNavbar />
      <div className='app-view'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='products' element={<ProductList />} />
          <Route path='checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
