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

const BlockNews = () => {

  const [listOfNews, setListOfNews] = useState([]);

  useEffect(() => {
    setListOfNews(newsList)
  }, [])

  let newsItems = listOfNews.map((item,index )=> {
    if(index < 2) {
      return (
        <li className="block-news__item">
          <div className="block-news__image">
            <img src={`${item.previewImage}/preview${item.id}.jpg`} alt={item.title}/>
          </div>
          <div className="block-news__title">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
          <Link to="#" className="block-news__link" >
            <svg width="15" height="15">
              <use href={sprite + '#arrow'}/>
            </svg>
          </Link>
        </li>
      )
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
            <CustomLink path={"/"}>
              Les hele nyheten
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockNews;