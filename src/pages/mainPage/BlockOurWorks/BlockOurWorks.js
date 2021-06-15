//global dependencies
import React from 'react';
import {Link} from "react-router-dom";

//components
import CustomLink from "../../../common/CustomLink/CustomLink";
import OnMouseHover from "../../../common/OnMouseHover/OnMouseHover";

//styles
import classes from './BlcokOurWokrs.module.css'

const BlockOurWorks = (props) => {

  let casesList = props.cases.map((item,index) => {
    if(index < 4) {
      return (
        <li className={classes.worksItem}>
          <OnMouseHover>
            <Link to={`/cases/${item.id}/${item.name}`}>
              <div className={classes.image}>
                <img src={`/static/images/cases/img${item.id}.jpg`} alt="preview of work"/>
              </div>
              <div className={classes.worksTitle}>
                <h4>
                  Maui Jim
                </h4>
                <p>
                  Content / PR / Reclame
                </p>
              </div>
            </Link>
          </OnMouseHover>
        </li>
      )
    }
  })

  return (
    <section className={`section ${classes.works}`}>
      <div className="wrapper">
        <h2 className="text-center">
          Our work
        </h2>
        <div className={`p-80 ${classes.inner}`}>
          <ul className={classes.worksList}>
            {casesList}
          </ul>
        </div>
        <div className={classes.worksBtn}>
          <CustomLink path={"/cases"}>
            <p>more work</p>
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default BlockOurWorks;