//global dependencies
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../../Context/Context";

//route links
import {
  ABOUT_ROUTE,
  CASES_ROUTE,
  CONTACTS_ROUTE,
  MAIN_PAGE_ROUTE, NEWS_ROUTE,
  SERVICES_ROUTE,
  TEAM_ROUTE
} from "../../utils/consts";

//components
import BouncingLetters from "../../common/BounsingLetters/BouncingLetters";
import OnMouseHover from "../../common/OnMouseHover/OnMouseHover";

//styles
import './styles.scss'

//images
import sprite from "../../assets/images/sprite/sprite.svg";

const Footer = () => {

  const {handleOpen} = useContext(Context)

  return (
    <footer className="pt-150">
      <div className="wrapper">
        <div className="block-footer">
          <ul className="block-footer__list">
            <li className="block-footer__item">
              <p>
                Menu
              </p>
              <ul className="block-footer__list-inner">
                <li>
                  <OnMouseHover>
                    <Link to={`/`}>
                      Home
                    </Link>
                  </OnMouseHover>
                </li>
                <li>
                  <OnMouseHover>
                    <Link to={`/cases`}>
                      Cases
                    </Link>
                  </OnMouseHover>
                </li>
                <li>
                  <OnMouseHover>
                    <Link to={`/services`}>
                      Services
                    </Link>
                  </OnMouseHover>
                </li>
                <li>
                  <OnMouseHover>
                    <Link to={`/about`}>
                      About
                    </Link>
                  </OnMouseHover>
                </li>
                <li>
                  <OnMouseHover>
                    <Link to={`/team`}>
                      Team
                    </Link>
                  </OnMouseHover>
                </li>
                <li>
                  <OnMouseHover>
                    <Link to={`/contacts`}>
                      Contact
                    </Link>
                  </OnMouseHover>
                </li>
                <li>
                  <OnMouseHover>
                    <Link to={`/news`}>
                      News
                    </Link>
                  </OnMouseHover>
                </li>
              </ul>
            </li>
            <li className="block-footer__item">
              <p>
                FollowInvolve
              </p>
              <ul className="block-footer__list-inner">
                <li className="border-bottom">
                  <OnMouseHover>
                    <a href="https://www.facebook.com/involveoslo/?ref=page_internal" target="_blank"
                       rel="noreferrer nofollow">
                      Facebook
                    </a>
                  </OnMouseHover>
                </li>
                <li className="border-bottom">
                  <OnMouseHover>
                    <a href="https://www.instagram.com/involveoslo/" target="_blank" rel="noreferrer nofollow">
                      instagram
                    </a>
                  </OnMouseHover>
                </li>
                <li className="border-bottom">
                  <OnMouseHover>
                    <a href="https://www.linkedin.com/company/involve-/" target="_blank" rel="noreferrer nofollow">
                      Linkedin
                    </a>
                  </OnMouseHover>
                </li>
              </ul>
            </li>
            <li className="block-footer__item">
              <p>
                Find us here
              </p>
              <ul className="block-footer__list-inner">
                <li>
                  Bestumstubben 11, 0281
                </li>
                <li>
                  Oslo, Norway
                </li>
                <li className="map-link">
                  <OnMouseHover>
                    <a
                      href="https://www.google.com/maps/place/Involve!/@59.918747,10.6636983,19z/data=!3m2!4b1!5s0x46416db3e788feeb:0xf83ed3920825b693!4m5!3m4!1s0x46416db51b570a1d:0xf422041e436d9f92!8m2!3d59.918747!4d10.6642455"
                      target="_blank" rel="noreferrer nofollow">
                      View on Maps
                    </a>
                  </OnMouseHover>
                </li>
              </ul>
            </li>
            <li className="block-footer__item">
              <p>
                Say hello
              </p>
              <ul className="block-footer__list-inner">
                <li>
                  <OnMouseHover>
                    <a href="mailto:post@involve.no">
                      post@involve.no
                    </a>
                  </OnMouseHover>
                </li>
                <li>
                  <OnMouseHover>
                    <a href="tel:23253600">
                      23 25 36 00
                    </a>
                  </OnMouseHover>
                </li>
              </ul>
            </li>
            <li className="block-footer__item text-right block-footer__customLink">
              <Link to="" onClick={handleOpen}>
                <BouncingLetters>
                  <span>s</span>
                  <span>t</span>
                  <span>a</span>
                  <span>r</span>
                  <span className="mr-7">t</span>
                  <span className="mr-7">a</span>
                  <span>p</span>
                  <span>r</span>
                  <span>o</span>
                  <span>j</span>
                  <span>e</span>
                  <span>c</span>
                  <span>t</span>
                  <span>?</span>
                </BouncingLetters>
                <svg width="15" height="15">
                  <use href={sprite + '#arrow'}/>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className="block-footer__down">
          <p>
            2021 © Involve — All rights reserved.
          </p>
          <svg width="121" height="28">
            <use href={sprite + '#logo'}/>
          </svg>
          <Link to="#">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;