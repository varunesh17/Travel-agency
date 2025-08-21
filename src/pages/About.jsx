import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import z from '../images/bg_5.jpg';
import y from '../images/services-4.jpg';
import x1 from '../images/person_1.jpg';
import x2 from '../images/person_2.jpg';
import x3 from '../images/person_4.jpg';

function About() {
  return (
    <div>
      <div className="carousel-inner">
        <img src={z} alt="Background" className="img-fluid" />
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-image">
              <center>
                <img src={y} alt="Tour" className="img-fluid shadow-lg w-50" />
              </center>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <h6 className="text-danger fw-bold">About Us</h6>
              <h2 className="fw-bold">Make Your Tour Memorable and Safe With Us</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics, a
                large language ocean.
              </p>
              <button className="btn btn-danger">Book Your Destination</button>
            </div>
          </div>
        </div>
      </div>

      <section className="testimonials py-5">
        <div className="container text-center">
          <h2 className="font-script">Testimony</h2>
          <h1 className="font-bold">Happy Customer</h1>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="testimonial-item">
                <div className="image-wrapper">
                  <img src={x1} alt="Customer Image" className="rounded-circle" />
                </div>
                <p className="mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className="mt-2">Rose Henderson</h5>
                <p className="text-muted">Customer</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-item">
                <div className="image-wrapper">
                  <img src={x2} alt="Customer Image" className="rounded-circle" />
                </div>
                <p className="mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className="mt-2">Ian Boner</h5>
                <p className="text-muted">Customer</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-item">
                <div className="image-wrapper">
                  <img src={x3} alt="Customer Image" className="rounded-circle" />
                </div>
                <p className="mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h5 className="mt-2">Jason McClean</h5>
                <p className="text-muted">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;