import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import UpperNav from './Components/UpperNav';
import Footer from './Components/Footer';
import HomeCarousal from './Components/HomeCarousal';
import CardHolder from './Components/CardHolder';
import Products from './Components/Products';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <UpperNav />
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HomeCarousal />
              <CardHolder />
            </>
          } 
        />
          <Route path="about" element={<AboutUs/>} />
        <Route path="contactus" element={<ContactUs/>} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
