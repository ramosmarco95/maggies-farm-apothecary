import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";



// pages
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx"
import HomePage from './pages/HomePage/HomePage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';

// components
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
 

  return (
    <>
      
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
           
    </>
  )
}

export default App
