import React from 'react';
import OnMouseHover from "../OnMouseHover/OnMouseHover";

import './styles.scss'

const BouncingLetters = ({children}) => {
  return (
    <OnMouseHover>
      <div className="bouncing-letters">
        {children}
      </div>
    </OnMouseHover>
  );
};

export default BouncingLetters;