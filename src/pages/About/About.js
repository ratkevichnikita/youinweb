// global dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper'

//components
import Offer from "../../components/Offer/Offer";
import HeaderContainer from "../../components/Header/HeaderContainer";
import Footer from "../../components/Footer/Footer";

//styles
import './styles.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

//images
import round from "../../assets/images/round.svg";
import img from '../../assets/images/aboutPage/about.jpg';
import SectionLink from "../../common/SectionLink/SectionLink";
// import slide from "../../assets/images/cases/case/slider4.jpg";

SwiperCore.use([Pagination,Navigation]);

const About = React.memo(() => {
  return (
    <>
      <div className="header header-bg-image header-about">
        <HeaderContainer />
        <Offer>
          <h1>
            <span className="translate-parent"><span className="translate-content">GG is a company</span></span>
            <span className="translate-parent"><span className="translate-content">with its own </span></span>
            <span className="translate-parent"><span className="translate-content">philosophy</span></span>

          </h1>
          <div className="offer__box">
            <div>
              <p className="offer__desc">
                <span className="translate-parent"><span className="translate-content"> GG is located in USA in NewYork.</span></span>
                <span className="translate-parent"><span className="translate-content"> We are share one simple philosophy: </span></span>
                <span className="translate-parent"><span className="translate-content">the best way to build a relationship with a product or service is </span></span>
                <span className="translate-parent"><span className="translate-content">to engage and engage the target audience. So, we: Engage.</span></span>
              </p>
            </div>
            <img src={round} className="round-img" alt="GreyGlobal is a company with its own philosophy and atmosphere"/>
          </div>
        </Offer>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className="company-description">
            <div className="company-description__img">
              <img src={img} alt="company-desciption"/>
            </div>
            <div className="company-description__info">
              <h2>Komplett kommunikasjonshus</h2>
              <p>
                GreyGlobal er et komplett kommunikasjonshus og består av flere kompetanseområder: reklame, design, PR, sosiale medier og content samt grafisk rådgivning og formidling og et bredt spekter av digitale tjenester. Hos oss jobber vi sammen og tverrfaglig på tvers av kompetansefelt for å skreddersy løsninger etter kundens behov.
              </p>
            </div>
          </div>
          <ul className="company-statistic pt-150">
            <li>
              <p className="company-statistic__title">
                + 20
                <span>years</span>
              </p>
              <p className="company-statistic__desc">
                This is how many years we have been helping to develop and support your business.
              </p>
            </li>
            <li>
              <p className="company-statistic__title">
                44
                <span>people</span>
              </p>
              <p className="company-statistic__desc">
                Our company employs real professionals in their field. Our people are our pride and greatest value!
              </p>
            </li>
            <li>
              <p className="company-statistic__title">
                + 250
                <span>projects</span>
              </p>
              <p className="company-statistic__desc">
                That is how many projects we have successfully implemented. And many customers stay with us forever!
              </p>
            </li>
            <li>
              <p className="company-statistic__title">
                44
                <span>people</span>
              </p>
              <p className="company-statistic__desc">
                This is how many years we have been helping to develop and support your business.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section bg">
        <div className="wrapper">
          <div className="company-description">
            <div className="company-description__info">
              <h2>Hands on og lave skuldre</h2>
              <p>
                GreyGlobal er kjent for et godt miljø og lave skuldre og vi har en god og avslappet stemning på kontoret som fører til høy trivselsfaktor både for oss og våre kunder. Kombinasjonen av et uformelt miljø, mye kompetanse og lidenskap for jobben gir tillitsfulle kunderelasjoner som varer.
              </p>
            </div>
            <div className="company-description__img">
              <img src={img} alt="company-desciption"/>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrapper">
            <div className="company-quote">
              <h3>GreyGlobal er et norskeid byrå, men er en del av Havas – et av verdens store reklamenettverk. Involve PR er også en del av Nordic PR Partners, et godt samkjørt nordisk nettverk.</h3>
              <span>Said someone very smart :)</span>
            </div>
        </div>
      </section>
      <section className="pb-150">
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
              speed={800}
              lazy={true}
              pagination={ { type: 'fraction' } }
            >
              {/*<SwiperSlide>*/}
              {/*  <img data-src={slide} src={slide} alt=""/>*/}
              {/*</SwiperSlide>*/}
              {/*<SwiperSlide>*/}
              {/*  <img data-src={slide} src={slide} alt=""/>*/}
              {/*</SwiperSlide>*/}
              {/*<SwiperSlide>*/}
              {/*  <img data-src={slide} src={slide} alt=""/>*/}
              {/*</SwiperSlide>*/}
            </Swiper>
          </div>

      </section>
      <SectionLink path={'kontakt'}>
        <p>Contact</p>
      </SectionLink>
      <Footer />
    </>
  );
});

export default About;