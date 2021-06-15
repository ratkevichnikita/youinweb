import React, {useContext} from 'react';
import {Context} from "../../Context/Context";

const OnMouseHover = ({children,clas}) => {

  const {setElemOnHover} = useContext(Context)

  let handleEnter = () => {
    setElemOnHover(true);
  }

  let handleLeave = () => {
    setElemOnHover(false);
  }

  return (
    <div className={clas ? `${clas} on-mouse-hover` : 'on-mouse-hover'} onMouseEnter={() => handleEnter()} onMouseLeave={() => handleLeave()}>
      {children}
    </div>
  );
};

export default OnMouseHover;