import React, {useRef} from 'react';
import {Link} from "react-router-dom";

import classes from './BlockServices.module.css';

import CustomLink from "../../../common/CustomLink/CustomLink";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import sprite from "../../../assets/images/sprite/sprite.svg";
import OnMouseHover from "../../../common/OnMouseHover/OnMouseHover";
import SingleService from "./SingleService";


const BlockServices = (props) => {

  // const customBtn = useRef(null);
  // const container = useRef(null);
  //
  //
  // function getMousePos(xRef, yRef) {
  //   let panelRect = container.current.getBoundingClientRect();
  //   return {
  //     x: Math.floor(xRef ) / (panelRect.right - panelRect.left) * container.current.offsetWidth,
  //     y: Math.floor(yRef ) /  (panelRect.bottom - panelRect.top) * container.current.offsetHeight
  //   };
  // }
  //
  // let handleMove = (e) => {
  //   let mousePos = getMousePos(e.clientX, e.clientY);
  //   let buttonCenterX = customBtn.current.offsetLeft + (customBtn.current.offsetWidth / 2);
  //   let buttonCenterY = customBtn.current.offsetTop + (customBtn.current.offsetHeight / 2);
  //   let distX = mousePos.x - buttonCenterX;
  //   let distY = mousePos.y - buttonCenterY;
  //   customBtn.current.style.transform = "translate("+(distX ) / 12 + "px," + (distY) / 8 + "px)";
  //   console.log('work')
  // }

  //  let servicesList = props.services.map((item, index) => {
  //
  //   if (index < 5) {
  //
  //     return (
  //       <SingleService />
  //     )
  //   }
  // });

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
            {/*{servicesList}*/}
          </ul>
        </div>
        <div className={classes.btn}>
          <CustomLink path={'/vare-tjenester'}>
            see all services
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default BlockServices;