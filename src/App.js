//global dependencies
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Context} from "./Context/Context";
import services from "./JSON/json-services";
import cases from './JSON/json-cases';

//components
import Modal from "./components/Modal/Modal";
import Form from "./common/Form/Form";
import MouseElem from "./common/MouseElem/MouseElem";

//styles
import './App.css';
import './assets/styles/helpers.css';

//images
import sprite from "./assets/images/sprite/sprite.svg";
import AppRouter from "./components/AppRouter/AppRouter";


function App() {

  const [elemOnHover, setElemOnHover] = useState(false);

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

  // Добавить в стейт список услуг и список портфолио
  useEffect(() => {
    setServicesList(services);
    setCasesList(cases)
  }, [services,cases])

  // Добавить класс body когда открыто модальное окно
  useEffect(() => {
    if (modalOpen || modalForm) {
      document.body.classList.add('is-modal-open');
    } else {
      document.body.classList.remove('is-modal-open');
    }

  }, [modalOpen,modalForm])

  useEffect(() => {
    return () => {
      setModalOpen(false);
      setElemOnHover(false);
    }
  }, [location.pathname])

  return (
    <Context.Provider value={{
      setElemOnHover, handleOpen, servicesList, modalOpen, setModalOpen, casesList, elemOnHover
    }}>
      <div className="App">
       <MouseElem />
        <AppRouter />
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
