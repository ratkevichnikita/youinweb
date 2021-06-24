import React from 'react';
import ScrollToTop from "../../common/ScrollToTop/ScrollToTop";
import {Switch,Route} from "react-router-dom";
import {Routes} from "../../routes,js";

const AppRouter = () => {
  return (
      <Switch >
        {Routes.map(({path,Component}) => {
          console.log(Component)
          return <>
            <ScrollToTop/>
            <Route key={path} exact path={path} component={Component}/>
          </>
        })}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route exact path="/" render={() => <MainPage/>}/>*/}
      {/*</>*/}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route exact path="/cases/:label?" render={() => <Cases/>}/>*/}
      {/*</>*/}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route path="/case/:slug/" render={() => <Case/>}/>*/}
      {/*</>*/}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route exact path="/vare-tjenester" render={() => <Services/>}/>*/}
      {/*</>*/}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route path="/vare-tjenester/:slug" render={() => <Service/>}/>*/}
      {/*</>*/}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route path="/om-oss" render={() => <About/>}/>*/}
      {/*</>*/}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route path="/ansatte" render={() => <Team/>}/>*/}
      {/*</>*/}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route path="/kontakt" render={() => <Contacts/>}/>*/}
      {/*</>*/}
      {/*<>*/}
      {/*  <ScrollToTop/>*/}
      {/*  <Route path="/news" render={() => <News/>}/>*/}
      {/*</>*/}
    </Switch>
  )
    ;
};

export default AppRouter;