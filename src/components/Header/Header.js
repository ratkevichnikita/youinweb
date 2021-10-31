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
                  pagesListForHamburgerMenu,
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
              <div className="header__box">
                <OnMouseHover clas={'header-logo'}>
                  <Link to='/' className="header__logo">
                    <svg width="121" height="28">
                      <use href={sprite + '#logo'}/>
                    </svg>
                  </Link>
                </OnMouseHover>
                <div className="header__info">
                  <p><span>Maiden 1A 0275 NewYork </span></p>
                  <Link to="mailto:post@greyglobal.no"><span>post@greyglobal.no</span></Link>
                  <Link to="tel:23 25 36 00"><span>23 22 36 11</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {
        modalOpen && (
          <Modal setArrImages={setArrImages}>
            <div className="wrapper">
              <div className="modal__inner">
                <nav className="nav">
                  <ul className="nav__list">
                    {pagesListForHamburgerMenu}
                  </ul>
                </nav>
                <div className="modal-images">
                  <img data-name="Home" src={home} className="modal-image" alt="home page"/>
                  <img data-name="Cases" src={cases} className="modal-image" alt="cases page"/>
                  <img data-name="Services" src={services} className="modal-image" alt="services page"/>
                  <img data-name="About" src={about} className="modal-image" alt="about page"/>
                  <img data-name="Team" src={team} className="modal-image" alt="team page"/>
                  <img data-name="Contacts" src={contacts} className="modal-image" alt="contacts page"/>
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
                        <Link to="#" target="_blank"
                           rel="noreferrer nofollow">
                          <span> Facebook</span>
                        </Link>
                      </OnMouseHover>
                    </li>

                    <li data-name="insta" className="modal-link-js" onMouseLeave={() => {
                      hiddenImages()
                    }} onMouseEnter={(event) => {
                      showImages(event)
                    }}>
                      <OnMouseHover clas={'social-link'}>
                        <Link to="#" target="_blank" rel="noreferrer nofollow">
                          <span>Instagram</span>
                        </Link>
                      </OnMouseHover>
                    </li>
                    <li data-name="linkedin" className="modal-link-js" onMouseLeave={() => {
                      hiddenImages()
                    }} onMouseEnter={(event) => {
                      showImages(event)
                    }}>
                      <OnMouseHover clas={'social-link'}>
                        <Link to="#" target="_blank" rel="noreferrer nofollow">
                          <span> Linkedin</span>
                        </Link>
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