//global dependencies
import React from 'react';

//styles
import './styles.scss'

//images
import logo1 from '../../../assets/images/clients/logo1.png';
import logo2 from '../../../assets/images/clients/logo2.png';
import logo3 from '../../../assets/images/clients/logo3.png';
import logo4 from '../../../assets/images/clients/logo4.png';
import logo5 from '../../../assets/images/clients/logo5.png';
import logo6 from '../../../assets/images/clients/logo6.png';
import logo7 from '../../../assets/images/clients/logo7.png';
import logo8 from '../../../assets/images/clients/logo8.png';
import logo9 from '../../../assets/images/clients/logo9.png';

const BlockClients = () => {
  return (
    <section className="section">
      <div className="wrapper">
        <div className="clients">
          <div className="clients__title text-center">
            <span className="sub-title">Vi er pålitelige</span>
            <h2>
              Noen av våre kunder
            </h2>
          </div>
          <ul className="clients__list pt-80">
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo1} alt="clients logo"/>
              </div>
            </li>
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo2} alt="clients logo"/>
              </div>
            </li>
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo3} alt="clients logo"/>
              </div>
            </li>
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo4} alt="clients logo"/>
              </div>
            </li>
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo5} alt="clients logo"/>
              </div>
            </li>
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo6} alt="clients logo"/>
              </div>
            </li>
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo7} alt="clients logo"/>
              </div>
            </li>
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo8} alt="clients logo"/>
              </div>
            </li>
            <li className="clients__item">
              <div className="images">
                <img className="black" src={logo9} alt="clients logo"/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlockClients;