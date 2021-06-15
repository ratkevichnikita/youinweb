import React from 'react';

import './styles.scss'
import img from "../../../../assets/images/services/img.jpg";

const Steps = ({getCurrentService}) => {

    let advantagesOfCurrentService;
    let advanatages ;

    if(getCurrentService.length > 0) {
      advantagesOfCurrentService = getCurrentService.map(item => item.advantages)
      advanatages = advantagesOfCurrentService[0].map((item,index) => {
        return (
          <li key={index} className="steps__item">
            <span />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </li>
        )
      })
    }

    return (
      <section className="section bg">
        <div className="wrapper">
          <div className="steps">
            <div className="steps__title">
              <span>about</span>
              <h2>
                How it work
              </h2>
            </div>
            <ul className="steps__list">
              {advanatages}
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Steps;