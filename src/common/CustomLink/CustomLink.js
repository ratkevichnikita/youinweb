//global dependencies
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../../Context/Context";

//components
import OnMouseHover from "../OnMouseHover/OnMouseHover";

//styles
import classes from "../../common/CustomLink/CustomLink.module.css";
//images
import sprite from "../../assets/images/sprite/sprite.svg";

const CustomLink = React.memo(({children, path, opensModal}) => {

  const {handleOpen} = useContext(Context)

  return (
    <OnMouseHover>
        <Link to={`${path}`} onClick={opensModal ? handleOpen : null  } className={classes.customLink}>
          <span />
          <div className={classes.customLinkBox}>
            {children}
            <svg width="10" height="10">
              <use href={sprite + '#arrow'}/>
            </svg>
          </div>
        </Link>
    </OnMouseHover>
  );
});

export default CustomLink;