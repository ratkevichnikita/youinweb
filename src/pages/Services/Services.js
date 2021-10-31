// global dependencies
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import pages from './../../JSON/json-pages';
import servicesList from "../../JSON/json-services";

//components
import HeaderContainer from "../../components/Header/HeaderContainer";
import Footer from "../../components/Footer/Footer";
import SectionLink from "../../common/SectionLink/SectionLink";

//styles
import './styles.scss'

//images
import sprite from "../../assets/images/sprite/sprite.svg";
import OnMouseHover from "../../common/OnMouseHover/OnMouseHover";

const Services = React.memo(() => {

  const [pageList,setPageList] = useState([])
  let pageListArr = [];

  useEffect(() => {
    for(let key in pages ){
      pageListArr.push(pages[key])
    }
    setPageList(pageListArr)
    // eslint-disable-next-line
  }, [pageList.length])

  let services = servicesList.map(item => {

    let graphics;
    let numberOfPart = '';

    if(item.id === 0) {
      numberOfPart = 'first';
      graphics = <div className="services__graphics first-graphics">
        <svg height="215" width="215" fill="#fff" fillOpacity={0} >
          <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="140" width="140" fill="#fff" fillOpacity={0}>
          <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="90" width="90">
          <circle cx="45" cy="45" r="45" fill="#F84525"/>
        </svg>
      </div>
    }
    if(item.id === 1) {
      numberOfPart = 'second';
      graphics = <div className="services__graphics second second-graphics">
              <svg height="140" width="140" fill="#fff" fillOpacity={0} >
                <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
              </svg>
              <svg height="140" width="140">
                <circle cx="70" cy="70" r="68" fill="#F84525"/>
             </svg>
              <svg height="140" width="140" fill="#fff" fillOpacity={0}>
                <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
              </svg>
           </div>
    }
    if(item.id === 2) {
      numberOfPart = 'therd';
      graphics =  <div className="services__graphics therd-graphics">
        <svg height="140" width="140" fill="#fff" fillOpacity={0} >
          <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="90" width="90">
          <circle cx="45" cy="45" r="45" fill="#F84525"/>
        </svg>
        <svg height="215" width="215" fill="#fff" fillOpacity={0}  >
          <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
      </div>
    }
    if(item.id === 3) {
      numberOfPart = 'fourth';
      graphics =  <div className="services__graphics fourth fourth-graphics">
        <svg height="100" width="100" fill="#fff" fillOpacity={0} >
          <circle cx="50" cy="50" r="48" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="110" width="110" fill="#fff" fillOpacity={0} >
          <circle cx="55" cy="55" r="53" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="140" width="140">
          <circle cx="70" cy="70" r="68" fill="#F84525"/>
        </svg>
      </div>
    }
    if(item.id === 4) {
      numberOfPart = 'fifth';
      graphics = <div className="services__graphics fifth fifth-graphics">
        <svg height="140" width="140" fill="#fff" fillOpacity={0}>
          <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="215" width="215" fill="#fff" fillOpacity={0}>
          <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="90" width="90">
          <circle cx="45" cy="45" r="45" fill="#F84525"/>
        </svg>
      </div>
    }
    if(item.id === 5) {
      numberOfPart = 'sixth';
      graphics = <div className="services__graphics sixth sixth-graphics">
        <svg height="140" width="140" fill="#fff"   >
          <circle cx="70" cy="70" r="68" fill="#F84525" />
        </svg>
        <svg height="110" width="110" >
          <circle cx="55" cy="55" r="53" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0} />
        </svg>
        <svg height="140" width="140" fill="#fff" fillOpacity={0} >
          <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
      </div>
    }
    if(item.id === 6) {
      numberOfPart = 'seventh';
      graphics = <div className="services__graphics seventh seventh-graphics">
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="48" fill="#F84525"/>
        </svg>
        <svg height="215" width="215" fill="#fff" fillOpacity={0}>
          <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="140" width="140" fill="#fff" fillOpacity={0}>
          <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
      </div>
    }
    if(item.id === 7) {
      numberOfPart = 'eighth';
      graphics = <div className="services__graphics eighth eighth-graphics">
        <svg height="140" width="140" >
          <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0} />
        </svg>
        <svg height="140" width="140" fill="#fff" fillOpacity={0} >
          <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="140" width="140" fill="#fff"   >
          <circle cx="70" cy="70" r="68" fill="#F84525" />
        </svg>
      </div>
    }
    if(item.id === 8) {
      numberOfPart = 'ninth';
      graphics = <div className="services__graphics ninth ninth-graphics">
        <svg height="140" width="140" fill="#fff" fillOpacity={0}>
          <circle cx="70" cy="70" r="68" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="215" width="215" fill="#fff" fillOpacity={0}>
          <circle cx="107" cy="107" r="106" stroke="#F84525" strokeWidth="1" fill="#fff" fillOpacity={0}/>
        </svg>
        <svg height="90" width="90">
          <circle cx="45" cy="45" r="45" fill="#F84525"/>
        </svg>
      </div>
    }
    return (
        <li key={item.id} className={`services__item p-80 ${numberOfPart}`}>
          <OnMouseHover >
            <Link to={`/services/${item.slug}/`}>
              {graphics}
              <div className="services__info">
                <span className="services__counter">{item.id >= 9 ? `${item.id + 1}` : `0${item.id + 1}`}</span>
                <h3>{item.name}</h3>
                <p>
                  {item.description}
                </p>
                <div className="services__box">
                  <div className="services__icon">
                    <svg width="15" height="15">
                      <use href={sprite + '#arrow'}/>
                    </svg>
                  </div>
                  <p className="services__hidden-word">
                    <span>Les mer</span>
                  </p>
                </div>
              </div>
            </Link>
          </OnMouseHover>
        </li>
    )
  })

  return (
    <>
      <HeaderContainer black />
      <section className="alone-section">
        <div className="wrapper">
          <div className="services">
            <ul className="services__list">
              {services}
            </ul>
          </div>
        </div>
      </section>
      <SectionLink path={'cases'}>
        <p>Our cases</p>
      </SectionLink>
      <Footer/>
    </>
  );
});

export default Services;