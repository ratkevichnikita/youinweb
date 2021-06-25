//global dependencies
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import newsList from "../../../JSON/json-news";

//styles
import './styles.scss'

//components
import CustomLink from "../../../common/CustomLink/CustomLink";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";

//images
import sprite from "../../../assets/images/sprite/sprite.svg";
import OnMouseHover from "../../../common/OnMouseHover/OnMouseHover";

const BlockNews = () => {

  const [listOfNews, setListOfNews] = useState([]);

  useEffect(() => {
    setListOfNews(newsList)
  }, [])

  let newsItems = listOfNews.map((item, index) => {
    if (index < 2) {
      return (
        <li key={item.slug} className="block-news__item">
          <OnMouseHover>
            <Link to={`./news/${item.slug}`}>
              <div className="block-news__image">
                <img src={`${item.previewImage}/preview${item.id}.jpg`} alt={item.title}/>
              </div>
              <div className="block-news__title">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <div className="block-news__box" >
                <div className="block-news__link">
                  <svg width="15" height="15">
                    <use href={sprite + '#arrow'}/>
                  </svg>
                </div>
                 <p className="block-news__hidden-word">
                   <span>Les mer</span>
                 </p>
              </div>
            </Link>
          </OnMouseHover>
        </li>
      )
    } else {
      return null
    }

  })

  return (
    <section className="section bg">
      <div className="wrapper">
        <div className="block-news">
          <SectionTitle>
             <span className="sub-title">
              Aktuelt
            </span>
            <h3>
              We’re technologists and entrepreneurs, so we understand
            </h3>
          </SectionTitle>
          <ul className="block-news__list p-80">
            {newsItems}
          </ul>
          <div className="block-news__btn">
            <CustomLink path={"/news"}>
              Les hele nyheten
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockNews;