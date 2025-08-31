




import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>



import b from '../images/services-1.jpg';
import c from '../images/services-2.jpg';
import d from '../images/services-3.jpg';
import e1 from '../images/place-1.jpg';
import e2 from '../images/place-2.jpg';
import e3 from '../images/place-3.jpg';
import e4 from '../images/place-4.jpg';

import g1 from '../images/image_2.jpg';
import g2 from '../images/image_3.jpg';
import g3 from '../images/image_1.jpg';
 import g4 from '../images/explore-tour-1.jpg';
 import g5 from '../images/explore-tour-2.jpg';
 import g6 from '../images/explore-tour-3.jpg';
 import g7 from '../images/explore-tour-4.jpg';
 import g8 from '../images/explore-tour-5.jpg';
 import g9 from '../images/explore-tour-6.jpg';

import React from 'react';

export default function Home() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                </div>

            
                <section className="bg"/>
  
                    
                    <h2 className=" font-script text-fw-bold display-4 display-md-3 display-lg-2">Welcome to Pacific</h2>
                    <h1 clasName=" font-script text-fw-bold display-4 display-md-3 display-lg-2">Discover Your Favourite Place With Us</h1>
                    </div>
                   
            <br />

          
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h5 className="text-danger">Welcome to Pacific</h5>
                        <h2>It's time to start your adventure</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia...
 </p>
 <br />
 <p>                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <button className="btn btn-danger">Search Destination</button>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="card text-white">
                                    <img src={b} className="card-img" alt="Activities" />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                        <h5 className="card-title">Activities</h5>
                                        <p className="card-text">A small river named Duden flows by their place...</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card text-white">
                                    <img src={c} className="card-img" alt="Private Guide" />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                        <h5 className="card-title">Private Guide</h5>
                                        <p className="card-text">A small river named Duden flows by their place...</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card text-white">
                                    <img src={d} className="card-img" alt="Location Manager" />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                        <h5 className="card-title">Location Manager</h5>
                                        <p className="card-text">A small river named Duden flows by their place...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

             

              
        <div className="container text-center">
          <h2 className="font-script">Pacific Provide Places</h2>
          <h1 className="font-bold">Select Your Destination</h1>

                <div class="container mt-4">
    <div className="row">
        <div className="col-12 col-md-3">
            <div className="card position-relative">
                <img src={e1} class="card-img-top" alt="Philippines" />
                <div className="badge badge-country">Philippines</div>
                
            </div>
        </div>
        <br />

        <div className="col-12 col-md-3">
            <div className="card position-relative">
                <img src={e2} class="card-img-top" alt="Canada" />
                <div className="badge badge-country">Canada</div>
              
            </div>
        </div>
        <br />

        <div className=" col=12 col-md-3">
            <div className="card position-relative">
                <img src={e3} class="card-img-top" alt="Thailand" />
                <div className="badge badge-country">Thailand</div>
          
            </div>
        </div>

        <div className="col-12 col-md-3">
            <div className="card position-relative">
                <img src={e4}class="card-img-top" alt="Australia" />
                <div className="badge badge-country">Australia</div>
           
            </div>
        </div>
    </div>
    
</div>

<br />  

 
                {/* Blog Section */}
                <div className="container text-center mt-5">
                    <h2 className="font-script">Destination</h2>
                    <h1 className="font-bold">Tour Destination</h1>

                    {/* <center> */}
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
                                     <h5 className="card-title">America</h5>
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
    
</div>
</div>
</div>





      
    );
}
