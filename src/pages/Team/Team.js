//global dependencies
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import teamList from "../../JSON/json-team";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper'

//styles
import './styles.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

//components
import HeaderContainer from "../../components/Header/HeaderContainer";
import Offer from "../../components/Offer/Offer";
import Footer from "../../components/Footer/Footer";
import SectionLink from "../../common/SectionLink/SectionLink";

//images
import img from "../../assets/images/aboutPage/about.jpg";
import round from "../../assets/images/round.svg";
import team1 from '../../assets/images/team/team1.jpg';
import team2 from '../../assets/images/team/team2.jpg';
import team3 from '../../assets/images/team/team3.jpg';


SwiperCore.use([Pagination,Navigation]);

const Team = () => {

  const [teamItems, setTeamItems] = useState([]);

  useEffect(() => {
    setTeamItems(teamList)
  }, [])

  let listOfReklameAndDesign;
  let listOfPrAndContent;
  let listOfSisteleddProduksjon;
  let listOfAdmin;
  let fullListOfTeam

  if(teamItems.length > 0) {
    let getListOfTeam = (teamName) => {
      return teamItems
         .filter(item => item.subdivision === teamName)
        .map(item => {
          return (
            <li key={item.id}>
              <div className="team__image">
                <img src={`${item.image}/${item.id}.jpg`} alt={item.name}/>
              </div>
              <h4 className="team__name">{item.name}</h4>
              <p className="team__subdivision">{item.position}</p>
              <Link to="#" className="team__phone" >{item.phoneNumber}</Link>
              <Link to="#" className="team__mail" >{item.email}</Link>
            </li>
          )
        })
    }

    listOfReklameAndDesign = getListOfTeam('reklame_design');
    listOfPrAndContent = getListOfTeam('pr_content');
    listOfSisteleddProduksjon = getListOfTeam('sisteledd_produksjon');
    listOfAdmin = getListOfTeam('admin.');
    // fullListOfTeam = getListOfTeam()
  }

  return (
    <>
      <div className="header header-bg-image header-team">
        <HeaderContainer />
        <Offer>
          <h1>
            <span className="translate-parent"><span className="translate-content">A team of </span></span>
            <span className="translate-parent"><span className="translate-content">professionals is the</span></span>
            <span className="translate-parent"><span className="translate-content"> key to a successful</span></span>
            <span className="translate-parent"><span className="translate-content">business</span></span>
          </h1>
          <div className="offer__box">
            <img src={round} className="round-img ml-auto" alt="Involve is a company with its own philosophy and atmosphere"/>
          </div>
        </Offer>
      </div>
      <section id="reklame" className="section">
        <div className="wrapper">
          <h2 className="team__title">
            Reklame & Design
          </h2>
          <ul className="team__list pt-80">
            {listOfReklameAndDesign}
          </ul>
        </div>
      </section>
      <section className="section bg">
        <div className="wrapper">
          <h2 className="team__title">
            PR & Content
          </h2>
          <ul className="team__list pt-80">
            {listOfPrAndContent}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrapper">
          <h2 className="team__title">
            Sisteledd & Produksjon
          </h2>
          <ul className="team__list pt-80">
            {listOfSisteleddProduksjon}
          </ul>
        </div>
      </section>
      <section className="section bg">
        <div className="wrapper">
          <h2 className="team__title">
            Admin.
          </h2>
          <ul className="team__list pt-80">
            {listOfAdmin}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="company-gallery-title">
          <span>fotogalleri</span>
          <h2>Our activities</h2>
        </div>
        <div className="company-gallery pt-80">
          <Swiper
            id="case-gallery"
            navigation
            spaceBetween={40}
            loop={true}
            slidesPerView={2.15}
            centeredSlides={true}
            autoHeight={true}
            speed={800}
            lazy={true}
            pagination={ { type: 'fraction' } }
          >
            <SwiperSlide>
              <img data-src={team1} src={team1} alt="Our activities"/>
            </SwiperSlide>
            <SwiperSlide>
              <img data-src={team2} src={team2} alt="Our activities"/>
            </SwiperSlide>
            <SwiperSlide>
              <img data-src={team3} src={team3} alt="Our activities"/>
            </SwiperSlide>
          </Swiper>
        </div>

      </section>
      <SectionLink path="/vare-tjenester">
        <p>Our services</p>
      </SectionLink>
      <Footer />
    </>
  );
};

export default Team;