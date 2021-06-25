//global dependencies
import React, {useContext} from 'react';
import {Context} from "../../../Context/Context";
import {useParams} from "react-router-dom";

//styles
import './styles.scss';

//components
import HeaderContainer from "../../../components/Header/HeaderContainer";
import Offer from "../../../components/Offer/Offer";
import Steps from "./Steps/Steps";
import ServicesWorks from "./ServicesWorks/ServicesWorks";
import SectionLink from "../../../common/SectionLink/SectionLink";
import AboutService from "./AboutService/AboutService";
import Footer from "../../../components/Footer/Footer";
import ContactUs from "./ContactUs/ContactUs";

// images
import round from "../../../assets/images/round.svg";
import defaultGraphics from "../../../assets/images/services/default-graphics.svg";

const Service = React.memo(() => {

  const {handleOpen, servicesList} = useContext(Context);

  let params = useParams();

  let getCurrentService = [];
  let currentService;
  let getNumberOfNextPage = [];

  if (servicesList.length > 0) {
    getCurrentService = servicesList.filter(service => service.slug === params.slug );
    currentService = getCurrentService.map(item => {
      let graphics = <div className="services__graphics graphics"><img src={defaultGraphics} alt={`${item.name}`}/></div>;

      if(item.id === 0) {
        graphics = <div className="services__graphics graphics first">
          <svg className="first-1" height="215" width="215" fill="#fff" fillOpacity={0} >
            <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg className="first-2" height="140" width="140" fill="#fff" fillOpacity={0}>
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg className="first-3" height="90" width="90">
            <circle cx="45" cy="45" r="45" fill="#F84525"/>
          </svg>
        </div>
      }
      if(item.id === 1) {

        graphics = <div className="services__graphics graphics second">
          <svg className="second-1" height="140" width="140" fill="#fff" fillOpacity={0} >
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg height="140" width="140">
            <circle cx="70" cy="70" r="68" fill="#F84525"/>
          </svg>
          <svg className="second-3" height="140" width="140" fill="#fff" fillOpacity={0}>
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
        </div>
      }
      if(item.id === 2) {

        graphics =  <div className="services__graphics graphics therd">
          <svg className="therd-1" height="140" width="140" fill="#fff" fillOpacity={0} >
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg className="therd-2" height="90" width="90">
            <circle cx="45" cy="45" r="45" fill="#F84525"/>
          </svg>
          <svg className="therd-3" height="215" width="215" fill="#fff" fillOpacity={0}  >
            <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
        </div>
      }
      if(item.id === 3) {

        graphics =  <div className="services__graphics graphics fourth">
          <svg className="fourth-1" height="100" width="100" fill="#fff" fillOpacity={0} >
            <circle cx="50" cy="50" r="48" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg className="fourth-2" height="110" width="110" fill="#fff" fillOpacity={0} >
            <circle cx="55" cy="55" r="53" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg className="fourth-3" height="140" width="140">
            <circle cx="70" cy="70" r="68" fill="#F84525"/>
          </svg>
        </div>
      }
      if(item.id === 4) {

        graphics = <div className="services__graphics graphics fifth">
          <svg className="fifth-1" height="140" width="140" fill="#fff" fillOpacity={0}>
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg className="fifth-2" height="215" width="215" fill="#fff" fillOpacity={0}>
            <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg className="fifth-3" height="90" width="90">
            <circle cx="45" cy="45" r="45" fill="#F84525"/>
          </svg>
        </div>
      }
      if(item.id === 5) {

        graphics = <div className="services__graphics graphics sixth">
          <svg className="sixth-1" height="140" width="140" fill="#fff"   >
            <circle cx="70" cy="70" r="68" fill="#F84525" />
          </svg>
          <svg height="110" width="110" >
            <circle cx="55" cy="55" r="53" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0} />
          </svg>
          <svg className="sixth-3" height="140" width="140" fill="#fff" fillOpacity={0} >
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
        </div>
      }
      if(item.id === 6) {

        graphics = <div className="services__graphics graphics seventh">
          <svg className="seventh-1" height="100" width="100">
            <circle cx="50" cy="50" r="48" fill="#F84525"/>
          </svg>
          <svg className="seventh-2" height="215" width="215" fill="#fff" fillOpacity={0}>
            <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg className="seventh-3" height="140" width="140" fill="#fff" fillOpacity={0}>
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
        </div>
      }
      if(item.id === 7) {

        graphics = <div className="services__graphics graphics eighth">
          <svg height="140" width="140" >
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0} />
          </svg>
          <svg height="140" width="140" fill="#fff" fillOpacity={0} >
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg height="140" width="140" fill="#fff"   >
            <circle cx="70" cy="70" r="68" fill="#F84525" />
          </svg>
        </div>
      }
      if(item.id === 8) {

        graphics = <div className="services__graphics graphics ninth">
          <svg height="140" width="140" fill="#fff" fillOpacity={0}>
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg height="215" width="215" fill="#fff" fillOpacity={0}>
            <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
          <svg height="90" width="90">
            <circle cx="45" cy="45" r="45" fill="#F84525"/>
          </svg>
        </div>
      }
      if(item.id === 9) {

        graphics = <div className="services__graphics graphics tenth">
          <svg height="140" width="140" >
            <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0} />
          </svg>
          <svg height="140" width="140" fill="#fff"   >
            <circle cx="70" cy="70" r="68" fill="#F84525" />
          </svg>
          <svg height="110" width="110" fill="#fff" fillOpacity={0} >
            <circle cx="55" cy="55" r="53" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
          </svg>
        </div>
      }

      return (
        <React.Fragment key={item.id}>
          {graphics}
          <h1 className="service-title">{item.name}</h1>
          <div className="offer__box ">
            <img className="ml-auto round-img" src={round} alt={item.name}/>
          </div>
        </React.Fragment>
      )
    })

    getNumberOfNextPage = servicesList.filter(item => item.id === +getCurrentService[0].id + 1).map(item => `/services/${item.slug}`);

  }

  return (
    <>
      <div className="header header-service">
        <HeaderContainer/>
        <Offer>
          {currentService}
        </Offer>
      </div>
      <AboutService getCurrentService={getCurrentService}/>
      <Steps getCurrentService={getCurrentService}/>
      <ServicesWorks/>
      <ContactUs handleOpen={handleOpen}/>
      <SectionLink path={getNumberOfNextPage.length === 0 ? '/services/reklame-markedsforing' : getNumberOfNextPage}>
        <p>Next service</p>
      </SectionLink>
      <Footer/>
    </>
  );
});

export default Service;