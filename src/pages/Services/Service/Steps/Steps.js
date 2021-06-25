//global dependencies
import React from 'react';

//styles
import './styles.scss'

const Steps = ({getCurrentService}) => {

    let advantagesOfCurrentService;
    let advantages ;

    if(getCurrentService.length > 0) {
      advantagesOfCurrentService = getCurrentService.map(item => item.advantages)
      advantages = advantagesOfCurrentService[0].map((item,index) => {
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
              {advantages}
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Steps;