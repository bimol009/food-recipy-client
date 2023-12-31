import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import './TestimonialSection.css'

const TestimonialSection = () => {
    return (
     <div>
        <SectionTitle heading={"Testimonial Page"}></SectionTitle>
           <div class="container my-5  justify-content-center">
        <div class=" row justify-content-center ">
            <div class="col-lg-6 col-12 mt-5 ">
                <div class="card mt-3 ">
                    <div class="layer"></div>
                    <div class="content">
                        <div class="card-header text-center border-0">
                            <div class="row justify-content-center my-4">
                                <div class="col">
                                    <div class="d-flex flex-lg-row flex-column-reverse no-gutters justify-content-center">
                                        <div class="col-3  text-right"><img class="img-fluid" id="quotes" src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" width="110" height="110"/></div>
                                        <div class="col pr-lg-5"><img class=" img-1 mr-lg-5 " src="https://i.ibb.co/zrBrm70/A-letter-tech-logo-removebg-preview-removebg-preview.png" /></div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div class="card-body text-center pb-3 ">
                            <div class="row  justify-content-center">
                                <div class="col text-center justify-content-center ">
                                    <p class="bold text-center px-md-3 text-white"> Growth of data is exponential and our ability
                                        to get true insight that matter was challenging with classic, traditional Bi
                                        tools. Vertix allow us to unserstand what is driving exceptions so we can take
                                        action Growth of data our ability to get true insight that matter was
                                        challenging with classic.</p>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-auto mb-4"/>
                        <div class="card-footer text-center border-0 mt-0 pt-0 mb-3">
                            <div class="row text-center name mt-auto ">
                                <div class="col">
                                    <h4 class="mb-0 Elizabeth">Bimol Sarker</h4>
                                    <small class="mt-0 text-white">Mern Stack Developer</small>
                                    <p className='text-white'><span class="fa fa-star  text-warning mr-1"></span><span
                                            class="fa fa-star text-warning  mr-1"></span><span
                                            class="fa fa-star text-warning  mr-1"></span><span
                                            class="fa fa-star-half-o text-warning mr-1"></span><span
                                            class="fa fa-star-o text-warning mr-1"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12 mt-5 ">
                    <div class="card mt-3 ">
                        <div class="layer"></div>
                        <div class="content">
                            <div class="card-header text-center border-0">
                                <div class="row justify-content-center  my-4">
                                    <div class="col">
                                        <div class="d-flex flex-lg-row flex-column-reverse no-gutters justify-content-center">
                                            <div class="col-3  text-right"><img class="img-fluid" id="quotes" src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" width="110" height="110"/></div>
                                            <div class="col pr-lg-5"><img class=" img-1 mr-lg-5 " src="https://i.imgur.com/HjKTNkG.jpg" /></div>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                            <div class="card-body text-center pb-3 ">
                                <div class="row  justify-content-center">
                                    <div class="col text-center justify-content-center ">
                                        <p class="bold text-center px-md-3 text-white"> Growth of data is exponential and our ability
                                            to get true insight that matter was challenging with classic, traditional Bi
                                            tools. Vertix allow us to unserstand what is driving exceptions so we can take
                                            action Growth of data our ability to get true insight that matter was
                                            challenging with classic.</p>
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-auto mb-4"/>
                            <div class="card-footer text-center border-0 mt-0 pt-0 mb-3">
                                <div class="row text-center name mt-auto ">
                                    <div class="col">
                                        <h4 class="mb-0 Elizabeth">SMike Housin</h4>
                                        <small class="mt-0 text-white">Director of Marketing</small>
                                        <p className='text-white'> <span class="fa fa-star  text-warning mr-1"></span><span
                                                class="fa fa-star text-warning  mr-1"></span><span
                                                class="fa fa-star-o text-warning  mr-1"></span><span
                                                class="fa fa-star-o text-warning mr-1"></span><span
                                                class="fa fa-star-o text-warning mr-1"></span></p>
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
};

export default TestimonialSection;