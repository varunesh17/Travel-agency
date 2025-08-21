import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


import f1 from '../images/destination-6.jpg';
import f2 from '../images/destination-5.jpg';
import f3 from '../images/destination-4.jpg';
import f4 from '../images/destination-3.jpg';
import f5 from '../images/destination-2.jpg';
import f6 from '../images/destination-1.jpg';
import f7 from '../images/destination-7.jpg';
import f8 from '../images/destination-8.jpg';
import f9 from '../images/destination-9.jpg';
import i from '../images/bg_1.jpg';

 function Destination() {
  return (
    

<div>
      <div className="carousel-inner">
        <img src={i} alt="Background" className="img-fluid" />
      </div>

      {/* Tour Destinations Section */}
      <div className="text-center">
        <h2 className="font-script">Destination</h2>
        <h1 className="font-bold">Tour Destination</h1>
      </div>

      <div className="d-flex flex-row justify-content-center mt-5">
        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f1} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Island</h5>
              <p className="card-text">12 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$49</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f2} className="card-img-top" alt="Dish Image" />
            <div className="card-body">
              <h5 className="card-title">Greenland</h5>
              <p className="card-text">14 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$39</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f3} className="card-img-top" alt="Dish Image" />
            <div className="card-body">
              <h5 className="card-title">Norway</h5>
              <p className="card-text">7 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$29</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center mt-5">
        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f4} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">China</h5>
              <p className="card-text">5 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$49</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f5} className="card-img-top" alt="Dish Image" />
            <div className="card-body">
              <h5 className="card-title">Russia</h5>
              <p className="card-text">9 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$39</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f6} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Australia</h5>
              <p className="card-text">12 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$29</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center mt-5">
        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f7} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Island</h5>
              <p className="card-text">12 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$49</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f8} className="card-img-top" alt="Dish Image" />
            <div className="card-body">
              <h5 className="card-title">Greenland</h5>
              <p className="card-text">14 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$39</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
          <div className="card h-100">
            <img src={f9} className="card-img-top" alt="Dish Image" />
            <div className="card-body">
              <h5 className="card-title">Norway</h5>
              <p className="card-text">7 Days Tour</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">$29</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}
export default Destination;