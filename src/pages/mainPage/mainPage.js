//global dependencies
import React, {useEffect, useState} from 'react';
import servicesList from "../../JSON/json-services";
import casesList from "../../JSON/json-cases";
import teamList from "../../JSON/json-team";

//components
import Offer from "../../components/Offer/Offer";
import Footer from "../../components/Footer/Footer";
import CustomLink from "../../common/CustomLink/CustomLink";

// blocks for page
import BlockOurWorks from "./BlockOurWorks/BlockOurWorks";
import BlockServices from "./BlockServices/BlockServices";
import BlockAbout from "./BlockAbout/BlockAbout";
import BlockOurTeam from "./BlockOurTeam/BlockOurTeam";
import BlockClients from "./BlockClients/BlockClients";
import BlockNews from "./BlockNews/BlockNews";

//images
import round from "../../assets/images/round.svg";
import HeaderContainer from "../../components/Header/HeaderContainer";

const MainPage = React.memo(() => {

  const [services, setServices] = useState([]);
  const [cases, setCases] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setCases(casesList);
    setServices(servicesList);
    setTeam(teamList);
  },[servicesList,casesList,teamList])

  return (
    <>
      <div className="header header-bg-image header-main">
        <HeaderContainer />
        <Offer>
          <h1>
            <span className="translate-parent"><span className="translate-content">Vår filosofi er å tiltrekke</span></span>
            <span className="translate-parent"><span className="translate-content">seg og interesse for</span></span>
            <span className="translate-parent"><span className="translate-content">målgruppen</span></span>
          </h1>
          <div className="offer__box">
            <div>
              <p className="offer__desc">
                Vi er 44 kommunikasjonsfolk som deler én enkel filosofi: den beste måten å skape relasjoner til et produkt
                eller en tjeneste er å involvere og engasjere målgruppen. Dermed er vi: Involve.
              </p>
              <CustomLink opensModal >
                <p>ESTIMATE PROJECT</p>
              </CustomLink>
            </div>
            <img src={round} className="round-img" alt="Vår filosofi er å tiltrekke seg og interesse for målgruppen"/>
          </div>
        </Offer>
      </div>
      <BlockOurWorks cases={cases} />
      <BlockServices services={services} />
      <BlockAbout />
      <BlockOurTeam team={team} />
      <BlockClients />
      <BlockNews />
      <Footer />
    </>
  );
});

export default MainPage;
