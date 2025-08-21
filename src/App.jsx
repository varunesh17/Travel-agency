

import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Destination from './pages/Destination';
import Hotel from './pages/Hotel';
import Blog from './pages/Blog';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>

      <footer className="bg-dark text-light pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                We are a travel agency dedicated to providing the best travel experiences. Explore the world with us!
              </p>
              <h6>Contact Us</h6>
              <p>Email: varuneshsj17@travelagency.com</p>
              <p>Phone: 9443582232</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about" className="text-light">About Us</a></li>
                <li><a href="/destinations" className="text-light">Destinations</a></li>
                <li><a href="/hotels" className="text-light">Hotels</a></li>
                <li><a href="/blog" className="text-light">Blog</a></li>
                <li><a href="/contact" className="text-light">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Subscribe to Our Newsletter</h5>
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>© 2025  Varun's Travel Agency. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;