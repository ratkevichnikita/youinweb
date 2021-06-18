// global dependencies
import React from 'react';

//components
import HeaderContainer from "../../../components/Header/HeaderContainer";
import Footer from "../../../components/Footer/Footer";
import SectionLink from "../../../common/SectionLink/SectionLink";
import Offer from "../../../components/Offer/Offer";

//images
import round from "../../../assets/images/round.svg";
import CaseAbout from "./CaseAbout/CaseAbout";
import CaseQuote from "./CaseQuote/CaseQuote";
import CaseGallery from "./CaseGallry/CaseGallery";
import CaseStatistics from "./CaseStatistics/CaseStatistics";

const Case = () => {

  return (
    <>
      <div className="header header-bg-image header-case">
        <HeaderContainer/>
        <Offer>
          <h1>Philippe <br/>
            de Cheron</h1>
          <div className="offer__box pt-80">
            <div>
              <ul className="offer__list-for-case">
                <li>
                  Design
                </li>
                <li>
                  Profil
                </li>
                <li>
                  Reklame
                </li>
              </ul>
            </div>
            <img className="ml-auto round-img" src={round} alt=""/>
          </div>
        </Offer>
      </div>
      <CaseAbout/>
      <CaseQuote />
      <CaseGallery />
      <CaseStatistics />
      <SectionLink path={'#'}>
        <p>Next case</p>
      </SectionLink>
      <Footer/>
    </>
  );
};

export default Case;