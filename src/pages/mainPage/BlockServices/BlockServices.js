import React from 'react';
import {Link} from "react-router-dom";

import classes from './BlockServices.module.css';

import CustomLink from "../../../common/CustomLink/CustomLink";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import sprite from "../../../assets/images/sprite/sprite.svg";
import OnMouseHover from "../../../common/OnMouseHover/OnMouseHover";

const BlockServices = (props) => {

  let servicesList = props.services.map((item, index) => {
    if (index < 5) {
      return (
        <li key={item.id} className={classes.item}>
          <OnMouseHover>
            <Link to={`./vare-tjenester/${item.slug}`} className={classes.name}>
              {item.name}
              <svg width="24" height="24">
                <use href={sprite + '#arrow'}/>
              </svg>
            </Link>
          </OnMouseHover>
          <OnMouseHover>
            <Link to={`/cases`} className={classes.more}>
              See works
            </Link>
          </OnMouseHover>
          <p className={classes.description}>{item.description}</p>
        </li>
      )
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
          <CustomLink path={'/vare-tjenester'}>
            see all services
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default BlockServices;