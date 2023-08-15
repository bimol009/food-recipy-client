import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-8 mb-8">
      
      <h3 className="uppercase text-4xl text-warning font-bold pb-2">{heading}</h3>
      <p className="text-2xl text-warning mb-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
