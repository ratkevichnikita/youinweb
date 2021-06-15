//global dependencies
import React from 'react';
import {Link} from "react-router-dom";

//styles
import './styles.scss';

//images
import sprite from "../../assets/images/sprite/sprite.svg";
import OnMouseHover from "../OnMouseHover/OnMouseHover";

const SectionLink = ({path,children}) => {
  return (
    <section className="section bg">
      <div className="wrapper">
        <OnMouseHover clas={'section-link-parent'}>
          <Link to={`${path}`} className="section-link">
            {children}
            <span className="section-link__inner">
                <span className="section-link__round">

                </span>
                <svg width="45" height="45">
                  <use href={sprite + '#arrow'}/>
                </svg>
            </span>
          </Link>
        </OnMouseHover>
      </div>
    </section>
  );
};

export default SectionLink;