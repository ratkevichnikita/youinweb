import React from 'react';
import {Link} from "react-router-dom";

//components
import HeaderContainer from "../../components/Header/HeaderContainer";
import Offer from "../../components/Offer/Offer";
import Footer from "../../components/Footer/Footer";
import Form from "../../common/Form/Form";

//styles
import './styles.scss'

//images
import map from '../../assets/images/map.jpg';

const Contacts = () => {
  return (
    <>
      <div className="header header-height">
        <HeaderContainer black/>
        <Offer black>
          <h1>
            <span className="translate-parent"><span className="translate-content">Contact us in any</span></span>
            <span className="translate-parent"><span className="translate-content">convenient way</span></span>
            <span className="translate-parent"><span className="translate-content">or come to visit us</span></span>
          </h1>
          <div className="offer__box pt-150 mw-full">
            <ul className="contacts__info">
              <li>
                <span className="contacts__icon"/>
                <div>
                  <p className="contacts__sub-text translate-parent">
                    <span className="translate-content">Telefon:</span>
                  </p>
                  <Link to="#" className="contacts__main-text translate-parent">
                    <span className="translate-content">23 25 36 00</span>
                  </Link>
                </div>
              </li>
              <li>
                <span className="contacts__icon"/>
                <div>
                  <p className="contacts__sub-text translate-parent">
                    <span className="translate-content">E-post:</span>
                  </p>
                  <Link to="#" className="contacts__main-text translate-parent">
                    <span className="translate-content">post@involve.no</span>
                  </Link>
                </div>
              </li>
              <li>
                <span className="contacts__icon"/>
                <div>
                  <p className="contacts__sub-text translate-parent">
                    <span className="translate-content">E-post faktura:</span>
                  </p>
                  <Link to="#" className="contacts__main-text translate-parent">
                    <span className="translate-content"> faktura@involve.no</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </Offer>
      </div>
      <section >
        <div className="wrapper">
          <div className="contacts section">
            <ul className="contacts__info contacts__info_column">
                <li className="pb-80">
                  <span/>
                  <div>
                    <p className="contacts__sub-text">
                      Besøksadresse:
                    </p>
                    <p className="contacts__main-text">
                      Bestumstubben 11 0281 Oslo
                    </p>
                  </div>
                </li>
                <li className="pb-80">
                  <span/>
                  <div>
                    <p className="contacts__sub-text">
                      Postadresse:
                    </p>
                    <p className="contacts__main-text">
                      Postboks 4151 Sjølyst 0217 OSLO
                    </p>
                  </div>
                </li>
                <li>
                  <span/>
                  <div>
                    <p className="contacts__sub-text">
                      Foretaksregistrert:
                    </p>
                    <p className="contacts__main-text">
                      NO 997 726 537
                    </p>
                  </div>
                </li>
              </ul>
            <div className="contacts__map">
              <img src={map} alt="map"/>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg">
        <div className="wrapper">
            <Form />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contacts;