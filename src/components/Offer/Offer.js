import React from 'react';

// styles
import  './styles.scss'

const Offer = ({children,black}) => {
  return (
    <div className={black ? `offer offer-black` : 'offer'}>
      <div className="wrapper h-full">
        <div className="offer__title">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Offer;