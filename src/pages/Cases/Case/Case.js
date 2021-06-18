// global dependencies
import React, {useContext} from 'react';
import {Context} from "../../../Context/Context";
//components

import HeaderContainer from "../../../components/Header/HeaderContainer";
import Footer from "../../../components/Footer/Footer";
import SectionLink from "../../../common/SectionLink/SectionLink";
import Offer from "../../../components/Offer/Offer";
import CaseAbout from "./CaseAbout/CaseAbout";
import CaseQuote from "./CaseQuote/CaseQuote";
import CaseGallery from "./CaseGallry/CaseGallery";
import CaseStatistics from "./CaseStatistics/CaseStatistics";

//images
import round from "../../../assets/images/round.svg";
import {useParams} from "react-router-dom";

const Case = () => {

    const {casesList} = useContext(Context);

    let params = useParams();

    let getCurrentService = [];
    let caseImage;
    let caseTitle;

    if (casesList.length > 0) {
        getCurrentService = casesList.filter(item => item.slug === params.slug );
        caseTitle = getCurrentService.map(item => item.name);
        caseImage = getCurrentService.map(item => item.bgImage + 'bg' + item.id + '.jpg').join('');
    }

  return (
    <>
      <div style={{backgroundImage: `url(${caseImage})`}} className="header header-bg-image header-case">
        <HeaderContainer/>
        <Offer>
          <h1>{caseTitle}</h1>
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
            <img className="ml-auto round-img" src={round} alt="circle"/>
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