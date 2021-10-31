// global dependencies
import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import newsList from "../../JSON/json-news";

//components
import HeaderContainer from "../../components/Header/HeaderContainer";
import Footer from "../../components/Footer/Footer";
import OnMouseHover from "../../common/OnMouseHover/OnMouseHover";

//styles
import './styles.scss';

const News = () => {

  const params = useParams();

  const [newsItems, setNewsItems] = useState([]);

  let listOfCategoryNews;
  // let listOfNews;
  let categoryCounts = {};
  let newsCaptions = [];
  let newsNames = []
  let currentNews;
  let prefix;

  //получаем массив с категориями новостей
  for (let el of newsItems) {
    newsCaptions.push(el.category)
  }

  // убираем дубликаты и считаем количество новостей относящихся к категориям
  newsCaptions.forEach((x) => {
    categoryCounts[x] = (categoryCounts[x] || 0) + 1;
  });

  // название категорий и их количество записываем в массив
  for (let item in categoryCounts) {
    newsNames.push([item, categoryCounts[item]])
  }

  // записываем в стайт массив новостей
  useEffect(() => {
    setNewsItems(newsList);
  }, []);

  // выводим список кейсов взамисимости от типа
  if (params.label) {
    prefix = newsItems.filter(item => item.category === params.label)
  } else {
    prefix = newsItems
  }

  // Выводим список категорий и считаем количесво новостей в них
  listOfCategoryNews = newsNames.map(item => {
    return (
      <li key={item[0]} className={item[0] === params.label ? `active` : ''}>
        <OnMouseHover>
          <Link to={`/news/${item[0]}`}>
            <span>{item[1]}</span>
            <p className="elem">{item[0]}</p>
          </Link>
        </OnMouseHover>
      </li>
    )
  });

  currentNews = prefix.map(item => {
    return (
      <li key={item.id} className="news__item">
        <Link to={`/news/${item.id}/${item.slug}`}>
        <div className="news__image">
          <img src={`${item.previewImage}/preview${item.id}.jpg`} alt={item.title}/>
        </div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
        </Link>
      </li>
    )
  })

  return (
    <>
      <HeaderContainer black/>
      <section className="alone-section">
        <div className="wrapper">
          <div className="news">
            <ul className="news__category">
              <li className={params.label ? '' : 'active'}>
                <Link to="/news">
                  <span>{newsItems.length}</span>
                  <p>All</p>
                </Link>
              </li>
              {listOfCategoryNews}
            </ul>
            <ul className="news__list">
              {currentNews}
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default News;