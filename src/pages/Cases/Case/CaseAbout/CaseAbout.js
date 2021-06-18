//global dependencies
import React from 'react';

//styles
import './styles.scss';

//images
import img from './../../../../assets/images/cases/case/img.jpg';
import img2 from './../../../../assets/images/cases/case/img2.jpg';

const CaseAbout = () => {
  return (
    <section className="section">
      <div className="wrapper">
        <div className="case-about">
          <div className="case-about__content">
            <div className="case-about__item">
              <div className="case-about__image">
                <img src={img} alt="" />
              </div>
              <div className="case-about__info">
                <h2>
                  The task set:
                </h2>
                <p>
                  An order to maintain its position in the market and achieve wider distribution, Scanox wanted to revitalize its product. They wanted to expand the target group beyond just service to also cover the decor and interior market. The paint was to be presented in several matte colors, adapted to modern trends in the interior. In addition, there should have been new, good solutions in the service.
                </p>
              </div>
            </div>
            <div className="case-about__item">
              <div className="case-about__image">
                <img src={img2} alt="" />
              </div>
              <div className="case-about__info">
                <h2>
                  And here's what we did
                </h2>
                <p>
                  We stand behind visual identity, design of Prospect and new website including own plot selector. The purpose is to make the new website appear modern, be transparent and easy to navigate.
                  <br/> <br/>
                  Behind the work lies an analysis of what has both worked and not worked as well as how the consumer has navigated. Based on this, we have created a website that emphasizes what the consumer is concerned with while maintaining the visual qualities that the customer wants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseAbout;