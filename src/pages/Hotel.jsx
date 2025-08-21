import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
import x from '../images/bg_2.jpg';
import g1 from '../images/hotel-resto-1.jpg';
import g2 from '../images/hotel-resto-2.jpg';
import g3 from '../images/hotel-resto-3.jpg';
import g4 from '../images/hotel-resto-4.jpg';
import g5 from '../images/hotel-resto-5.jpg';
import g6 from '../images/hotel-resto-6.jpg';
import g7 from '../images/hotel-resto-7.jpg';
import g8 from '../images/hotel-resto-8.jpg';
import g9 from '../images/hotel-resto-9.jpg';


 function Hotel() {
  return (
     <div>
           <div className="carousel-inner">
             <img src={x} alt="Background" className="img-fluid" />
           </div>
          

           <div className="text-center">
                   <h2 className="font-script">HOTEL</h2>
                   <h1 className="font-bold">Luxury Rooms</h1>
                 </div>
           
                 <div className="d-flex flex-row justify-content-center mt-5">
                   <div className="col-sm-12 col-12 col-md-4 mb-2 p-2">
                     <div className="card h-100">
                       <img src={g1} className="card-img-top" alt="" />
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
                       <img src={g2} className="card-img-top" alt="Dish Image" />
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
                       <img src={g3} className="card-img-top" alt="Dish Image" />
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
                       <img src={g4} className="card-img-top" alt="" />
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
                       <img src={g5} className="card-img-top" alt="Dish Image" />
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
                       <img src={g6} className="card-img-top" alt="" />
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
                       <img src={g7} className="card-img-top" alt="" />
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
                       <img src={g8} className="card-img-top" alt="Dish Image" />
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
                       <img src={g9} className="card-img-top" alt="Dish Image" />
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
export default Hotel;
