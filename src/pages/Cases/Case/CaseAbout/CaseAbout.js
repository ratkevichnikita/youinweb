//global dependencies
import React from 'react';

//styles
import './styles.scss';

const CaseAbout = ({getCurrentCase}) => {
  let description = getCurrentCase.map(item => item.description);
  let items
  if(description.length > 0) {

     items = description[0]?.map(item => {
      return (
        <div key={item.title} className="case-about__item">
          <div className="case-about__image">
            <img src={item.image} alt="" />
          </div>
          <div className="case-about__info">
            <h2>
              {item.title}
            </h2>
            <p>
              {item.text}
            </p>
          </div>
        </div>
      )
    })
  }
  return (
    <section className="section">
      <div className="wrapper">
        {
          items && (
            <div className="case-about">
              <div className="case-about__content">
                {items}
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default CaseAbout;