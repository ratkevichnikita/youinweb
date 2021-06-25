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
        <li key={item.name} className={classes.worksItem}>
          <OnMouseHover >
            <Link to={`/case/${item.slug}`}>
              <div className={classes.image}>
                <img src={`/static/images/cases/img${item.id}.jpg`} alt="preview of work"/>
              </div>
              <div className={classes.worksTitle}>
                <h4>
                  {item.name}
                </h4>
                <p>
                  {item.type}
                </p>
              </div>
            </Link>
          </OnMouseHover>
        </li>
      )
    } else {
      return null
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