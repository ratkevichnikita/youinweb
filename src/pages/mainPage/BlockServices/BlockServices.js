import React, {useRef} from 'react';
import {Link} from "react-router-dom";

import classes from './BlockServices.module.css';

import CustomLink from "../../../common/CustomLink/CustomLink";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import sprite from "../../../assets/images/sprite/sprite.svg";
import OnMouseHover from "../../../common/OnMouseHover/OnMouseHover";

const BlockServices = (props) => {

  const customBtn = useRef(null);
  const container = useRef(null);

  function getMousePos(xRef, yRef) {
    let panelRect = container.current.getBoundingClientRect();

    return {
      x: Math.floor(xRef ) / (panelRect.left) * container.current.offsetWidth,
      y: Math.floor(yRef ) /  (panelRect.top) * container.current.offsetHeight
    };
  }

  let handleMove = (e) => {
    let mousePos = getMousePos(e.clientX, e.clientY);
    let buttonCenterX = customBtn.current.offsetLeft + (customBtn.current.offsetWidth );
    let buttonCenterY = customBtn.current.offsetTop + (customBtn.current.offsetHeight );
    let distX = mousePos.x - buttonCenterX;
    let distY = mousePos.y - buttonCenterY;
    customBtn.current.style.transform = "translate("+(distX )  + "px," + (distY)  + "px)";
    console.log('work')
  }

   let servicesList = props.services.map((item, index) => {

    if (index < 5) {

      return (
        <li key={item.id} className={classes.item}>
           <OnMouseHover>
             <Link to={`./services/${item.slug}`} className={classes.name}>
               {item.name}
               <svg width="24" height="24">
                 <use href={sprite + '#arrow'}/>
               </svg>
             </Link>
           </OnMouseHover>
           <OnMouseHover >
             <Link onMouseMove={(e) => handleMove(e)} ref={container}  to={`/cases/${item.label}`} className={classes.more}>

               <span ref={customBtn}>See works</span>

             </Link>
           </OnMouseHover>
           <p className={classes.description}>{item.description}</p>
         </li>
      )
    } else {
      return null
    }
  });

  return (
    <section className={`section bg`}>
      <div className="wrapper">
        <div>
          <SectionTitle>
             <span className="sub-title">
              Våre tjenester
            </span>
            <h3>
              We’re technologists and entrepreneurs, so we understand both the technical and business challenges of
              creating digital products.
            </h3>
          </SectionTitle>
          <ul className={`p-80 ${classes.list}`}>
            {servicesList}
          </ul>
        </div>
        <div className={classes.btn}>
          <CustomLink path={'/services'}>
            see all services
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default BlockServices;