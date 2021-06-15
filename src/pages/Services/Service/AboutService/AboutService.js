import React from 'react';

// images
import img from './../../../../assets/images/services/img.jpg';

//styles
import './styles.scss';

const AboutService = ({getCurrentService}) => {
  let descOfCurrentService
  if(getCurrentService.length > 0) {
    descOfCurrentService = getCurrentService.map(item => {
      return (
        <React.Fragment key={item.id}>
          <div  className="about-service__image">
            <img src={img} alt="our service"/>
          </div>
          <div className="about-service__info">
            <h2>Om tjenesten</h2>
            <p>{item.title}</p>
          </div>
        </React.Fragment>
      )
    })
  }

  return (
    <section className="section">
      <div className="wrapper">
        <div className="about-service">
          <div className="wrapper">
            <div className="about-service__content">
              {descOfCurrentService}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;