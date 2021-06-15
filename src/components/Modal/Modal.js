//global dependencies
import React, {useEffect} from 'react';

//styles
import './styles.scss';

const Modal = ({children,setArrImages, classModal}) => {

  useEffect(() => {
    let images = document.querySelectorAll('.modal-image');
    let x = [];
    [...images].map(item => {
      x.push(item)
      return setArrImages(x)
    })
  },[])

  return (
    <div id={classModal ? classModal : ''} className="modal">
      <div className={classModal ? `${classModal} modal__container` : 'modal__container' }>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;