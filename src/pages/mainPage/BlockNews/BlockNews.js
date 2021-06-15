import React from 'react';
import SectionTitle from "../../../common/SectionTitle/SectionTitle";

import './styles.scss'

import news1 from './../../../assets/images/news/news1.jpg';
import news2 from './../../../assets/images/news/news2.jpg';
import {Link} from "react-router-dom";
import sprite from "../../../assets/images/sprite/sprite.svg";
import CustomLink from "../../../common/CustomLink/CustomLink";

const BlockNews = () => {
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
            <li className="block-news__item">
              <div className="block-news__image">
                <img src={news1} alt="Involve reorganizes for further growth"/>
              </div>
              <div className="block-news__title">
                <h4>
                  Involve reorganizes for further growth
                </h4>
                <p>
                  Both new clients and several new projects have led to some significant organizational changes for the Havas-affiliate, Involve in Oslo.   Although 2020 has been challenging, we experienced ...
                </p>
              </div>
              <Link to="#" className="block-news__link">
                <svg width="15" height="15">
                  <use href={sprite + '#arrow'}/>
                </svg>
              </Link>
            </li>
            <li className="block-news__item">
              <div className="block-news__image">
                <img src={news2} alt="Norway – home of slow TV, mountain hiking an techy wearables?"/>
              </div>
              <div className="block-news__title">
                <h4>
                  Norway – home of slow TV, mountain hiking an techy wearables?
                </h4>
                <p>
                  The creative Norwegian agency Involve, in Oslo, has renewed its deal with Havas. An important step for both parties, with a goal of a bigger impact in the Scandinavian market – and not least ...
                </p>
              </div>
              <Link to="#" className="block-news__link" >
                <svg width="15" height="15">
                  <use href={sprite + '#arrow'}/>
                </svg>
              </Link>
            </li>
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