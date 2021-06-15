// global dependencies
import React from 'react';
import {Link} from "react-router-dom";

//components
import Modal from "../Modal/Modal";
import OnMouseHover from "../../common/OnMouseHover/OnMouseHover";

//styles
import './styles.scss';

// images
import sprite from "../../assets/images/sprite/sprite.svg";
import home from '../../assets/images/modal/home.jpg';
import cases from '../../assets/images/modal/cases.jpg';
import services from '../../assets/images/modal/services.jpg';
import team from '../../assets/images/modal/team.jpg';
import contacts from '../../assets/images/modal/contacts.jpg';
import about from '../../assets/images/modal/about.jpg';
import news from '../../assets/images/modal/news.jpg';
import facebook from '../../assets/images/modal/facebook.jpg';
import insta from '../../assets/images/modal/insta.jpg';
import linkedin from '../../assets/images/modal/linkedin.jpg';

const Header = ({
                  black,
                  isModalOpen,
                  setArrImages,
                  modalOpen,
                  showImages,
                  hiddenImages,
                  active,
                  pagesListForHeaderMenu,
                  handleOpen,
                  pagesListForHamburgerMenu
                }) => {
  return (
    <>
      <header id="header" className={(black || modalOpen) ? `header-black header` : `header`}>
        <div className="header-hard"/>
        <div className="header__inner">
          <div className="header__container">
            <div className="header__top">
              <div className="header__menu">
                <OnMouseHover>
                  <span onClick={() => isModalOpen()
                  } className={modalOpen ? `active` : ''}/>
                </OnMouseHover>
                <div className="header__menu-container">
                  <OnMouseHover>
                    <p className={modalOpen ? `open header__menu-title` : `header__menu-title`}
                       onClick={() => isModalOpen()
                       }>
                      <span>Menu</span>
                      <span>Close</span>
                    </p>
                  </OnMouseHover>
                  <ul className={!active ? `header__menu-list` : `header__menu-list  hidden`}>
                    {pagesListForHeaderMenu}
                    <li onClick={() => isModalOpen()}>
                      <OnMouseHover>
                        <Link to={'#'}>
                          More...
                        </Link>
                      </OnMouseHover>
                    </li>
                  </ul>
                </div>
              </div>

              <OnMouseHover clas={'header-logo'}>
                <Link to='/' className="header__logo">
                  <svg width="121" height="28">
                    <use href={sprite + '#logo'}/>
                  </svg>
                </Link>
              </OnMouseHover>
              <div className="header__btn-wrapper">
                <OnMouseHover clas={'header__btn'}>
                  <button onClick={handleOpen}>
                    ESTIMATE PROJECT
                    <svg width="10" height="10">
                      <use href={sprite + '#arrow'}/>
                    </svg>
                  </button>
                </OnMouseHover>
              </div>

            </div>
          </div>
        </div>
      </header>
      {
        modalOpen && (
          <Modal setArrImages={setArrImages}>
            <div className="info">
              <p><span>Hoffsveien 1A 0275 Oslo </span></p>
              <Link to="mailto:post@involve.no"><span>post@involve.no</span></Link>
              <Link to="tel:23 25 36 00"><span>23 25 36 00</span></Link>
            </div>
            <div className="wrapper">
              <div className="modal__inner">
                <nav className="nav">
                  <ul className="nav__list">
                    {pagesListForHamburgerMenu}
                    {/*<li data-name="home" onMouseLeave={() => {*/}
                    {/*  hiddenImages()*/}
                    {/*}} onMouseEnter={(event) => {*/}
                    {/*  showImages(event)*/}
                    {/*}} className="nav__item modal-link-js">*/}
                    {/*  <OnMouseHover>*/}
                    {/*    <Link to="/" className="nav__link">*/}
                    {/*      <p>Home</p>*/}
                    {/*      <svg width="17" height="17">*/}
                    {/*        <use href={sprite + '#arrow'}/>*/}
                    {/*      </svg>*/}
                    {/*    </Link>*/}
                    {/*  </OnMouseHover>*/}
                    {/*</li>*/}
                    {/*<li data-name="cases" className="nav__item modal-link-js" onMouseLeave={() => {*/}
                    {/*  hiddenImages()*/}
                    {/*}} onMouseEnter={(event) => {*/}
                    {/*  showImages(event)*/}
                    {/*}}>*/}
                    {/*  <OnMouseHover>*/}
                    {/*    <Link to="/cases" className="nav__link">*/}
                    {/*      <p>Cases</p>*/}
                    {/*      <svg width="17" height="17">*/}
                    {/*        <use href={sprite + '#arrow'}/>*/}
                    {/*      </svg>*/}
                    {/*    </Link>*/}
                    {/*  </OnMouseHover>*/}
                    {/*</li>*/}
                    {/*<li data-name="services" className="nav__item modal-link-js" onMouseLeave={() => {*/}
                    {/*  hiddenImages()*/}
                    {/*}} onMouseEnter={(event) => {*/}
                    {/*  showImages(event)*/}
                    {/*}}>*/}
                    {/*  <OnMouseHover>*/}
                    {/*    <Link to="/vare-tjenester" className="nav__link">*/}
                    {/*      <p>Vare-tjenester</p>*/}
                    {/*      <svg width="17" height="17">*/}
                    {/*        <use href={sprite + '#arrow'}/>*/}
                    {/*      </svg>*/}
                    {/*    </Link>*/}
                    {/*  </OnMouseHover>*/}
                    {/*</li>*/}
                    {/*<li data-name="about" className="nav__item modal-link-js" onMouseLeave={() => {*/}
                    {/*  hiddenImages()*/}
                    {/*}} onMouseEnter={(event) => {*/}
                    {/*  showImages(event)*/}
                    {/*}}>*/}
                    {/*  <OnMouseHover>*/}
                    {/*    <Link to="/om-oss" className="nav__link">*/}
                    {/*      <p>Om-oss</p>*/}
                    {/*      <svg width="17" height="17">*/}
                    {/*        <use href={sprite + '#arrow'}/>*/}
                    {/*      </svg>*/}
                    {/*    </Link>*/}
                    {/*  </OnMouseHover>*/}
                    {/*</li>*/}
                    {/*<li data-name="team" className="nav__item modal-link-js" onMouseLeave={() => {*/}
                    {/*  hiddenImages()*/}
                    {/*}} onMouseEnter={(event) => {*/}
                    {/*  showImages(event)*/}
                    {/*}}>*/}
                    {/*  <OnMouseHover>*/}
                    {/*    <Link to="/ansatte" className="nav__link">*/}
                    {/*      <p>Team</p>*/}
                    {/*      <svg width="17" height="17">*/}
                    {/*        <use href={sprite + '#arrow'}/>*/}
                    {/*      </svg>*/}
                    {/*    </Link>*/}
                    {/*  </OnMouseHover>*/}
                    {/*</li>*/}
                    {/*<li data-name="contacts" className="nav__item modal-link-js" onMouseLeave={() => {*/}
                    {/*  hiddenImages()*/}
                    {/*}} onMouseEnter={(event) => {*/}
                    {/*  showImages(event)*/}
                    {/*}}>*/}
                    {/*  <OnMouseHover>*/}
                    {/*    <Link to="/kontakt" className="nav__link">*/}
                    {/*      <p>Kontakt</p>*/}
                    {/*      <svg width="17" height="17">*/}
                    {/*        <use href={sprite + '#arrow'}/>*/}
                    {/*      </svg>*/}
                    {/*    </Link>*/}
                    {/*  </OnMouseHover>*/}
                    {/*</li>*/}
                    {/*<li data-name="news" className="nav__item modal-link-js" onMouseLeave={() => {*/}
                    {/*  hiddenImages()*/}
                    {/*}} onMouseEnter={(event) => {*/}
                    {/*  showImages(event)*/}
                    {/*}}>*/}
                    {/*  <OnMouseHover>*/}
                    {/*    <Link to="#" className="nav__link">*/}
                    {/*      <p>Aktuelt</p>*/}
                    {/*      <svg width="17" height="17">*/}
                    {/*        <use href={sprite + '#arrow'}/>*/}
                    {/*      </svg>*/}
                    {/*    </Link>*/}
                    {/*  </OnMouseHover>*/}
                    {/*</li>*/}
                  </ul>
                </nav>
                <div className="modal-images">
                  <img data-name="Home" src={home} className="modal-image" alt="home page"/>
                  <img data-name="Cases" src={cases} className="modal-image" alt="cases page"/>
                  <img data-name="Vare-tjenester" src={services} className="modal-image" alt="services page"/>
                  <img data-name="Om oss" src={about} className="modal-image" alt="about page"/>
                  <img data-name="Ansatte" src={team} className="modal-image" alt="team page"/>
                  <img data-name="Kontakt" src={contacts} className="modal-image" alt="contacts page"/>
                  <img data-name="News" src={news} className="modal-image" alt="news page"/>
                  <img data-name="facebook" src={facebook} className="modal-image" alt="social facebook"/>
                  <img data-name="insta" src={insta} className="modal-image" alt="social instagram"/>
                  <img data-name="linkedin" src={linkedin} className="modal-image" alt="social linkedin"/>
                </div>
                <div className="modal__social">
                  <h3>
                    <span>More</span>
                  </h3>
                  <ul className="modal__social-list">

                    <li data-name="facebook" className="modal-link-js" onMouseLeave={() => {
                      hiddenImages()
                    }} onMouseEnter={(event) => {
                      showImages(event)
                    }}>
                      <OnMouseHover clas={'social-link'}>
                        <a href="https://www.facebook.com/involveoslo/?ref=page_internal" target="_blank"
                           rel="nofollow">
                          <span> Facebook</span>
                        </a>
                      </OnMouseHover>
                    </li>

                    <li data-name="insta" className="modal-link-js" onMouseLeave={() => {
                      hiddenImages()
                    }} onMouseEnter={(event) => {
                      showImages(event)
                    }}>
                      <OnMouseHover clas={'social-link'}>
                        <a href="https://www.instagram.com/involveoslo/" target="_blank" rel="noreferrer nofollow">
                          <span>Instagram</span>
                        </a>
                      </OnMouseHover>
                    </li>
                    <li data-name="linkedin" className="modal-link-js" onMouseLeave={() => {
                      hiddenImages()
                    }} onMouseEnter={(event) => {
                      showImages(event)
                    }}>
                      <OnMouseHover clas={'social-link'}>
                        <a href="https://www.linkedin.com/company/involve-/" target="_blank" rel="noreferrer nofollow">
                          <span> Linkedin</span>
                        </a>
                      </OnMouseHover>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Modal>
        )
      }
    </>
  );
};

export default Header;