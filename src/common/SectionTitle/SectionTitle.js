import React from 'react';
import classes from "../SectionTitle/SectionTitle.module.css";

const SectionTitle = ({children}) => {
  return (
    <div className={classes.title}>
      {children}
    </div>
  );
};

export default SectionTitle;