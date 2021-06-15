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
                  Hva ønsket kunden seg:
                </h2>
                <p>
                  Midgard vikingsenter har som misjon å spre kunnskap om et av landets kjæreste kulturminner;
                  vikinghistorien i Vestfold. I forbindelse med navnebytte fra Midgard historisk senter til Midgard
                  vikingsenter, var reprofilering viktig for å fortsette å fortelle historien om Vestfold som hele
                  Norges vikingfylke. Vikingsenteret ønsket seg en ny, allsidig, men unik logo.
                </p>
              </div>
            </div>
            <div className="case-about__item">
              <div className="case-about__image">
                <img src={img2} alt="" />
              </div>
              <div className="case-about__info">
                <h2>
                  Hva gjorde vi?
                </h2>
                <p>
                  For å vise at det er kunnskap om vikinghistorie som senteret arbeider for, utarbeidet Involve en
                  stilisert, grafisk viking som logoelement. Den moderniserte figuren brukes som emblem i logoen, og
                  teksten ble spesialtilpasset emblemet. Logoen formidler ”levende vikingtid” da Midgard bringer
                  vikinghistorien til live for sine besøkende gjennom arrangementer som gilder, aktivitetsdager og
                  lignende. Vi har også utviklet en komplett designmanual hvor fargepalett, bildemaner, fonter,
                  markedsmateriell og andre designelementer ble integrert.
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