//global dependencies
import React, {useEffect, useState} from 'react';
import cases from '../../../../JSON/json-cases'

//style
import './styles.scss';
import {Link} from "react-router-dom";


const ServicesWorks = () => {

  const [casesImage, setCasesImage] = useState(null);
  let x ;

  useEffect(() => {
    setCasesImage(cases)
  }, [])

  if(casesImage) {
    casesImage.map((item,index) => {
      if(index <= 5) {
        return (
          <li key={item.id}>
            <Link to={`/case/${item.slug}`}>
              <img src={`${item.bgImage}img${item.id}.jpg`} alt=""/>
            </Link>
          </li>
        ) }
    })}

  return (
    <section className="section">
      <div className="wrapper">
        <div className="works ">
          <h2 className="text-center">Our work on this service</h2>
          <ul className="works__list pt-80">
            {
             x
            }
            {/*<li>*/}
            {/*  <img src={img1} alt=""/>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <img src={img2} alt=""/>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <img src={img3} alt=""/>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <img src={img4} alt=""/>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <img src={img5} alt=""/>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <img src={img6} alt=""/>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesWorks;