//global dependencies
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Route, useLocation} from "react-router-dom";
import {Context} from "./Context/Context";
import services from "./JSON/json-services";
import cases from './JSON/json-cases';

//components
import MainPage from "./pages/mainPage/mainPage";
import Cases from "./pages/Cases/Cases";
import Services from "./pages/Services/Services";
import Service from "./pages/Services/Service/Service";
import About from "./pages/About/About";
import Case from "./pages/Cases/Case/Case";
import Team from "./pages/Team/Team";
import ScrollToTop from "./common/ScrollToTop/ScrollToTop";
import Modal from "./components/Modal/Modal";
import Contacts from "./pages/Contacts/Contacts";
import Form from "./common/Form/Form";
import News from "./pages/News/News";

//styles
import './App.css';
import './assets/styles/helpers.css';

//images
import sprite from "./assets/images/sprite/sprite.svg";

function App() {

  const [mousePosition, setMousePosition] = useState({left: 0, top: 0});
  const [elemOnHover, setElemOnHover] = useState(false);
  const mouseElem = useRef(null);
  //for Context
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [servicesList, setServicesList] = useState([]);
  const [casesList, setCasesList] = useState([]);

  function handleOpen(event) {
    event.preventDefault()
    setModalForm(!modalForm);
  }

  let location = useLocation();

  useEffect(() => {
    setServicesList(services);
    setCasesList(cases)
  }, [services,cases])

  useEffect(() => {
    if (elemOnHover) {
      mouseElem.current.classList.add('active');
    } else {
      mouseElem.current.classList.remove('active');
    }
  }, [elemOnHover])

  useLayoutEffect(() => {

    let posX = mousePosition.left > 0 ? mousePosition : 0;
    let posY = mousePosition.top > 0 ? mousePosition : 0;

    function move() {
      mouseElem.current.style.left = posX + 'px';
      mouseElem.current.style.top = posY + 'px';
    }

    document.addEventListener("mousemove", (event) => {
      posX = event.clientX;
      posY = event.clientY;
    });

    setInterval(move, 30);

    return () => {
      setMousePosition({left: posX, top: posY});
    }

  }, [])

  useEffect(() => {
    return () => {
      setModalOpen(false);
      setElemOnHover(false);
    }
  }, [location.pathname])

  useEffect(() => {
    if (modalOpen || modalForm) {
      document.body.classList.add('is-modal-open');
    } else {
      document.body.classList.remove('is-modal-open');
    }

  }, [modalOpen,modalForm])

  return (
    <Context.Provider value={{
      setElemOnHover, handleOpen, servicesList, modalOpen, setModalOpen, casesList
    }}>
      <div className="App">
        <span ref={mouseElem} id="mouseElem"/>
        <>
          <ScrollToTop/>
          <Route exact path="/" render={() => <MainPage/>}/>
        </>
        <>
          <ScrollToTop/>
          <Route exact path="/cases/:label?" render={() => <Cases/>}/>
        </>
        <>
          <ScrollToTop/>
          <Route path="/case/:slug/" render={() => <Case/>}/>
        </>
        <>
          <ScrollToTop/>
          <Route exact path="/vare-tjenester" render={() => <Services/>}/>
        </>
        <>
          <ScrollToTop/>
          <Route path="/vare-tjenester/:slug" render={() => <Service/>}/>
        </>
        <>
          <ScrollToTop/>
          <Route path="/om-oss" render={() => <About />}/>
        </>
        <>
          <ScrollToTop/>
          <Route path="/ansatte" render={() => <Team />}/>
        </>
        <>
          <ScrollToTop/>
          <Route path="/kontakt" render={() => <Contacts />}/>
        </>
        <>
          <ScrollToTop/>
          <Route path="/news" render={() => <News />}/>
        </>
        {
          modalForm && (
            <Modal classModal={'form-modal'}>
              <div>
                <div className="modal__small">
                    <span onClick={handleOpen} className="modal__close" >
                       <svg width="20" height="20">
                          <use href={sprite + '#close'}/>
                        </svg>
                    </span>
                   <Form />
                </div>
              </div>
            </Modal>
          )
        }
      </div>
    </Context.Provider>
  );
}

export default App;
