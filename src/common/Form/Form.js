//global dependencies
import React, {useState} from 'react';

//components
import OnMouseHover from "../OnMouseHover/OnMouseHover";

//styles
import './styles.scss';

//images
import sprite from "../../assets/images/sprite/sprite.svg";

const Form = () => {

  const [stateFieldName, setStateFieldName] = useState(false);

  const [stateFieldPhone, setStateFieldPhone] = useState(false);

  const [stateFieldMail, setStateFieldMail] = useState(false);

  const [stateFieldArea, setStateFieldArea] = useState(false);

  return (
    <div className="form">
      <div className="form__title">
        <h2>
          Noen spørsmål?
          La oss kommunisere!
        </h2>
        <p>
          La kontakter og skrive til oss spørsmål, vi vil kontakte deg snart!
        </p>
      </div>
      <form className="form__content" action="#">
        <p className={stateFieldName ? `form__wrap active` : 'form__wrap'}>
          <input
                 onFocus={() => setStateFieldName(true)} onBlur={() => setStateFieldName(false)} id="name" type="text"
                 className="form__item"/>
          <label className={stateFieldName ? `form__label active` : 'form__label'} htmlFor="name">Name</label>
        </p>
        <p className={stateFieldPhone ? `form__wrap active` : 'form__wrap'}>
          <input
                 onFocus={() => setStateFieldPhone(true)} onBlur={() => setStateFieldPhone(false)} id="phone"
                 type="text" className="form__item"/>
          <label className={stateFieldPhone ? `form__label active` : 'form__label'} htmlFor="phone">Phone</label>
        </p>
        <p className={stateFieldMail ? `form__wrap active` : 'form__wrap'}>
          <input
                 onFocus={() => setStateFieldMail(true)} onBlur={() => setStateFieldMail(false)} id="email" type="text"
                 className="form__item"/>
          <label className={stateFieldMail ? `form__label active` : 'form__label'} htmlFor="email">E-mail</label>
        </p>
        <p className={stateFieldArea ? `form__wrap active` : 'form__wrap'}>
          <textarea id="area"
                    onFocus={() => setStateFieldArea(true)} onBlur={() => setStateFieldArea(false)}
                    className={stateFieldArea ? `form__item form__area active` : 'form__item form__area'}/>
          <label className={stateFieldArea ? `form__label active` : 'form__label'} htmlFor="area">Message</label>
        </p>
        <OnMouseHover>
          <button className="form__btn">
            Send
            <svg width="10" height="10">
              <use href={sprite + '#arrow'}/>
            </svg>
          </button>
        </OnMouseHover>
      </form>
    </div>
  );
};

export default Form;