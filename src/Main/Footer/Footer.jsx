import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="feature-footer-section p-5">
          <div className="feature-sec grid md:grid-cols-5 lg:grid-cols-5 gap-4">
            <div className="feature-section">
              <h3 className="title">CHEF COOKING</h3>
              <p className="feature-description">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
              </p>

              <div className="font-icon-img flex">
                <div className="icon-1">
                  <img src="/public/icon/icons/fb.png" alt="" />
                </div>
                <div className="icon-2">
                  <img src="public/icon/icons/twitter.png" alt="" />
                </div>
                <div className="icon-3">
                  <img src="public/icon/icons/youtube.png" alt="" />
                </div>
              </div>
            </div>

            <div className="text-white">
              <a className="navbar-brand fs-2 font-bold" href="#">
                Company
              </a>

              <ul className="mt-5 my-ul text-white">
                <li>About Us</li>
                <li>Work</li>
                <li>Latest News</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="text-white">
              <a className="navbar-brand fs-2 font-bold" href="#">
                Product
              </a>

              <ul className="mt-5 my-ul text-white">
                <li>Prototype</li>
                <li>Plans & Pricing</li>
                <li>Customers</li>
                <li>Integrations</li>
              </ul>
            </div>

            <div className="text-white">
              <a className="navbar-brand fs-2 font-bold" href="#">
                Support
              </a>

              <ul className="mt-5 my-ul text-white">
                <li>Help Desk</li>
                <li>Sales</li>
                <li>Become a Partner</li>
                <li>Developers</li>
              </ul>
            </div>

            <div className="text-white">
              <a className="navbar-brand fs-2 font-bold" href="#">
                Contact
              </a>

              <ul className="mt-5 my-ul text-white">
                <li>524 Broadway , NYC</li>
                <li>+1 777 - 978 - 5570</li>
              </ul>
            </div>
           
          </div>
          <hr className=" mb-5 mt-5"/>
          <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
      <div className='grid md:grid-cols-2 lg:grid-cols-2'>
        <div className="py-6 text-sm text-center text-gray-400 ">
        © 2023 nextPage Inc. All rights reserved.
        </div>
        <div className="py-6 text-sm text-center text-gray-400 ">
        Powered by CHEF COOKING
        </div>
      </div>
    </footer>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
