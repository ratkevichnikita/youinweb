//global dependencies
import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

//components
import HeaderContainer from "../../components/Header/HeaderContainer";
import Footer from "../../components/Footer/Footer";
import BlockClients from "../mainPage/BlockClients/BlockClients";
import SectionLink from "../../common/SectionLink/SectionLink";

//styles
import './styles.scss';
import OnMouseHover from "../../common/OnMouseHover/OnMouseHover";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Context} from "../../Context/Context";

const Cases = React.memo(() => {

  const params = useParams();
  const {casesList} = useContext(Context)
  const [casesItems, setCasesItems] = useState([]);

  const [paramsLabel, setParamsLabel] = useState('');

  let counts = {};
  let casesCaptions = [];
  let casesNames = []
  let currentCases;
  let prefix;

  for (let el of casesList) {
    casesCaptions.push(el.type)
  }
  // убираем дубликаты и считаем количество кейсов
  casesCaptions.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  // название кейсов и их количество записываем в массив
  for (let item in counts) {
    casesNames.push([item, counts[item]])
  }


  // выводим список кейсов на страницу
  let captions = casesNames.map((item, index) => {
    let firstLetter = item[0].slice(0, 1).toUpperCase();
    let withoutFirstLetter = item[0].slice(1);
    let toUppercaseLetters = firstLetter + withoutFirstLetter;

    return (
      <li key={index} className={item[0] === paramsLabel ? `active` : ''}>
        <OnMouseHover>
          <Link to={`/cases/${item[0]}/`}>
            <span>{item[1]}</span>
            <p>{toUppercaseLetters}</p>
          </Link>
        </OnMouseHover>
      </li>
    )
  })

  // выводим список кейсов взамисимости от типа
  if (params.label) {
    prefix = casesList.filter(item => item.type === params.label)
  } else {
    prefix = casesList
  }

  currentCases = <TransitionGroup component={"ul"} className="projects__list" > {prefix.map(item => {
    let firstLetter = item.type.slice(0, 1).toUpperCase();
    let withoutFirstLetter = item.type.slice(1);
    let toUppercaseLetters = firstLetter + withoutFirstLetter;
    return (
      <CSSTransition
        key={item.id}
        timeout={500}
        classNames="opacity"
      >
        <li key={item.id} className="projects__item">
          <OnMouseHover>
            <Link to={`/case/${item.slug}`}>
              <div className="projects__image">
                <img src={`${item.mainImage}/img${item.id}.jpg`} alt={`${item.name}`}/>
              </div>
              <span>{toUppercaseLetters}</span>
            </Link>
          </OnMouseHover>
        </li>
      </CSSTransition>
    )
  })} </TransitionGroup>

  useEffect(() => {
    setCasesItems(currentCases)
    setParamsLabel(params.label)
    // eslint-disable-next-line
  }, [params.label,casesList.length])

  return (
    <>
      <HeaderContainer black/>
      <section className="alone-section">
        <div className="wrapper">
          <div className="projects">
            <ul className="projects__captions">
              <li className={paramsLabel ? '' : 'active'}>
                <Link to="/cases">
                  <span>{casesList.length}</span>
                  <p>All</p>
                </Link>
              </li>
              { captions }
            </ul>
              { casesItems }
          </div>
        </div>
      </section>
      <BlockClients/>
      <SectionLink path={'/services'}>
        <p> Our services</p>
      </SectionLink>
      <Footer/>
    </>
  );
}) ;

export default Cases;