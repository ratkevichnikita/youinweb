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
      <div className="header header-black header-main">
        <HeaderContainer />
        <Offer black>
          <h1>
            <span className="translate-parent"><span className="translate-content">Advertising. Design. PR</span></span>
            <span className="translate-parent"><span className="translate-content">We value time and</span></span>
            <span className="translate-parent"><span className="translate-content">details</span></span>
          </h1>
          <div className="offer__box">

              <CustomLink opensModal >
                <p>Contact us</p>
              </CustomLink>

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
