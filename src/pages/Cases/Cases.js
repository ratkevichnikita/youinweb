//global dependencies
import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import pages from './../../JSON/json-pages';
import casesList from './../../JSON/json-cases';

//components
import HeaderContainer from "../../components/Header/HeaderContainer";
import Footer from "../../components/Footer/Footer";
import BlockClients from "../mainPage/BlockClients/BlockClients";
import SectionLink from "../../common/SectionLink/SectionLink";

//styles
import './styles.scss';
import OnMouseHover from "../../common/OnMouseHover/OnMouseHover";

const Cases = React.memo(() => {

  const params = useParams();

  const [casesItems, setCasesItems] = useState([]);
  const [paramsLabel, setParamsLabel] = useState('')

  let pageList = [];
  let counts = {};
  let casesCaptions = [];
  let casesNames = []
  let currentCases;
  let prefix;


  useEffect(() => {
    //получаем список страниц для header
    for (let key in pages) {
      pageList.push(pages[key])
    }
  }, [])

  //получаем массив с названиями кейсов
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
  let captions = casesNames.map((item, index, arr) => {
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

  currentCases = prefix.map(item => {
    let firstLetter = item.type.slice(0, 1).toUpperCase();
    let withoutFirstLetter = item.type.slice(1);
    let toUppercaseLetters = firstLetter + withoutFirstLetter;
    return <li key={item.id} className="projects__item">
      <OnMouseHover>
        <Link to={`/cases/${item.id}/${item.name}`}>
          <div className="projects__image">
            <img src={`/static/images/cases/img${item.id}.jpg`} alt={`${item.name}`}/>
          </div>
          <span>{toUppercaseLetters}</span>
        </Link>
      </OnMouseHover>
    </li>
  })

  useEffect(() => {
    setCasesItems(currentCases)
    setParamsLabel(params.label)
  }, [params.label])

  return (
    <>
      <HeaderContainer black/>
      <section className="alone-section">
        <div className="wrapper">
          <div className="projects">
            <ul className="projects__captions">
              {/*<li className={paramsLabel ? '' : 'active'}>*/}
              {/*  <Link to="/cases">*/}
              {/*    <span>{casesList.length}</span>*/}
              {/*    <p>All</p>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*{captions}*/}
            </ul>
            <ul className="projects__list">
              {casesItems}
            </ul>
          </div>
        </div>
      </section>
      <BlockClients/>
      <SectionLink path={'vare-tjenester'}>
        <p> Our services</p>
      </SectionLink>
      <Footer/>
    </>
  );
});

export default Cases;