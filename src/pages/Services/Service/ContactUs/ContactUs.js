import React from 'react';

// styles
import './styles.scss';

//images
import img from './../../../../assets/images/services/img2.jpg';
import BouncingLetters from "../../../../common/BounsingLetters/BouncingLetters";
import {Link} from "react-router-dom";
import sprite from "../../../../assets/images/sprite/sprite.svg";

const ContactUs = ({handleOpen}) => {
  return (
    <section className="section">
      <div className="wrapper">
        <div className="contacts-us">
          <div className="contacts-us__info">
            <h2>Want to know more or have questions/suggestions?</h2>
            <Link to="#" className="contacts-us__box" onClick={handleOpen}>
              <BouncingLetters >
                <span>D</span>
                <span>i</span>
                <span>s</span>
                <span>c</span>
                <span>u</span>
                <span>s</span>
                <span className="mr-7">s</span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span className="mr-7">r</span>
                <span>p</span>
                <span>r</span>
                <span>o</span>
                <span>j</span>
                <span>e</span>
                <span>c</span>
                <span className="mr-7">t</span>
                <span>w</span>
                <span>i</span>
                <span>t</span>
                <span className="mr-7">h</span>
                <span>u</span>
                <span>s</span>
              </BouncingLetters>
              <svg width="15" height="15">
                <use href={sprite + '#arrow'}/>
              </svg>
            </Link>

          </div>
          <div className="contacts-us__image">
            <img src={img} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;