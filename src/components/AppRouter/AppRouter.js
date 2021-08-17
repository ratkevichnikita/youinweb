import React from 'react';
import ScrollToTop from "../../common/ScrollToTop/ScrollToTop";
import {Switch, Route} from "react-router-dom";
import {Routes} from "../../routes";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop/>
      <Switch>
        {Routes.map(({path, Component}) =>
          <Route key={path} exact path={path} render={() => <Component/>}/>
        )}
      </Switch>
    </>
  )
    ;
};

export default AppRouter;