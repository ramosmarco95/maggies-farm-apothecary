import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx"
import HomePage from './pages/HomePage/HomePage.jsx';

// components
import Header from './components/Header/Header.jsx';

function App() {
 

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route basename="/maggies-farm-apothecary/" element={<HomePage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>     
    </>
  )
}

export default App
