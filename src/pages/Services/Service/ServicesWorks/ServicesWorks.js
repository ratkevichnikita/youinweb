import React from 'react';

//style
import './styles.scss';

//images
import img1 from '../../../../assets/images/cases/img1.jpg';
import img2 from '../../../../assets/images/cases/img2.jpg'
import img3 from '../../../../assets/images/cases/img3.jpg';
import img4 from '../../../../assets/images/cases/img4.jpg';
import img5 from '../../../../assets/images/cases/img5.jpg';
import img6 from '../../../../assets/images/cases/img6.jpg';

const ServicesWorks = () => {
  return (
    <section className="section">
      <div className="wrapper">
        <div className="works ">
          <h2 className="text-center">Our work on this service</h2>
          <ul className="works__list pt-80">
            <li>
              <img src={img1} alt=""/>
            </li>
            <li>
              <img src={img2} alt=""/>
            </li>
            <li>
              <img src={img3} alt=""/>
            </li>
            <li>
              <img src={img4} alt=""/>
            </li>
            <li>
              <img src={img5} alt=""/>
            </li>
            <li>
              <img src={img6} alt=""/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesWorks;