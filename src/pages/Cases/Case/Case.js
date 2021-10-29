// global dependencies
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../Context/Context";
import {useParams} from "react-router-dom";

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

const Case = () => {

    const {casesList} = useContext(Context);
    const [nextCaseSlug, setNextCaseSlug] = useState(null)
    let params = useParams();

    let getCurrentCase = [];
    let currentCaseId;
    let caseImage;
    let caseTitle;
    let nextCase ;
    let indexOfCurrentCase;

    if (casesList.length > 0) {
        getCurrentCase = casesList.filter(item => item.slug === params.slug );
        currentCaseId =  getCurrentCase.map(item => item.id ).join('');
        indexOfCurrentCase = casesList.findIndex(item => +item.id === +currentCaseId)
        nextCase = casesList.find((item,index) => index === indexOfCurrentCase + 1)
        caseTitle = getCurrentCase.map(item => item.name);
        caseImage = getCurrentCase.map(item => item.bgImage + 'bg' + item.id + '.jpg').join('');

    }
    console.log(nextCase)
    useEffect(() => {
        if(nextCase) {
          setNextCaseSlug(nextCase.slug)
        }
      },[nextCase])

  return (
    <>
      <div style={{backgroundImage: `url(${caseImage})`}} className="header header-bg-image header-case">
        <HeaderContainer/>
        <Offer>
          <h1 className="translate-parent">
            <span  className="translate-content">
              {caseTitle}
            </span>
          </h1>
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
      <CaseAbout getCurrentCase={getCurrentCase} />
      <CaseQuote />
      <CaseGallery getCurrentCase={getCurrentCase} />
      <CaseStatistics getCurrentCase={getCurrentCase} />
      <SectionLink path={`/case/${nextCase ? nextCaseSlug : 'philippe-de-cheron'}`}>
        <p>Next case</p>
      </SectionLink>
      <Footer/>
    </>
  );
};

export default Case;