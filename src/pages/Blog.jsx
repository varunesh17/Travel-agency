import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import g1 from '../images/image_2.jpg';
import g2 from '../images/image_3.jpg';
import g3 from '../images/image_1.jpg';
import g4 from '../images/image_4.jpg';
import g5 from '../images/image_5.jpg';
import g6 from '../images/image_6.jpg';
import g7 from '../images/acarousel-2.jpg';

 function Blog() {
  return (
    
    <div>
          <div className="carousel-inner">
            <img src={g7} alt="Background" className="img-fluid" />
          </div>

    <div className="container text-center mt-5">
      <h2 className="font-script">Blog</h2>
      <h1 className="font-bold">Recent Posts</h1>

      <div className="card-group mt-4">
        <div className="card">
          <img src={g1} className="card-img-top p-2 mb-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Most Popular Place In This World</h5>
            <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
          </div>
        </div>

        <div className="card">
          <img src={g2} className="card-img-top p-2 mb-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Most Popular Place In This World</h5>
            <p className="card-text"><small className="text-muted">Last updated 15 mins ago</small></p>
          </div>
        </div>

        <div className="card">
          <img src={g3} className="card-img-top p-2 mb-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Most Popular Place In This World</h5>
            <p className="card-text"><small className="text-muted">Last updated 20 mins ago</small></p>
          </div>
        </div>
      </div>

      <div className="card-group mt-4">
        <div className="card">
          <img src={g4} className="card-img-top p-2 mb-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Most Popular Place In This World</h5>
            <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
          </div>
        </div>

        <div className="card">
          <img src={g5} className="card-img-top p-2 mb-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Most Popular Place In This World</h5>
            <p className="card-text"><small className="text-muted">Last updated 15 mins ago</small></p>
          </div>
        </div>

        <div className="card">
          <img src={g6} className="card-img-top p-2 mb-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Most Popular Place In This World</h5>
            <p className="card-text"><small className="text-muted">Last updated 20 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Blog;