import React from 'react';

const footer = () => {


    const year = (new Date()).getFullYear()

  return (
    <div className="bott">
    <div className="lds-heart"><div></div></div>
    <br/>
    &copy;   AH Welgemoed {year}
    </div>
  );
};

export default footer;