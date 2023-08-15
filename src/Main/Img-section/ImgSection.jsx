import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import './ImgSection.css'

const ImgSection = () => {
    return (
        <div className='mt-5'>
            <SectionTitle heading={"Healthy Cooking"}></SectionTitle>
            <div className="img-content my-5">
                <div className="img-sec">
                <img src="https://i.ibb.co/chfX5KF/h2-img-1-1.jpg" alt="" />
                </div>
                <div className="img-con">
                    <h4 className='mb-5'>It's time to kick start a new lifestyle. Start eating, feeling & living better today. Build good habits with us in no time.</h4>
                    <p>If you’re ready to change your relationship with food for the better, follow us @food-recipe for daily meal plans and updates.</p>
                    <button className='btn btn-primary text-black'>Learn More</button>
                </div>
                
            </div>
        </div>
    );
};

export default ImgSection;