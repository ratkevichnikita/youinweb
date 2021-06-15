// global dependencies
import React, {useEffect, useState} from 'react';
import newsList from "../../JSON/json-news";

//components
import Footer from "../../components/Footer/Footer";
import HeaderContainer from "../../components/Header/HeaderContainer";

//styles
import './styles.scss';

const News = () => {

  const [newsItems, setNewsItems] = useState([]);
  let listOfNews;

  useEffect(()=> {
    setNewsItems(newsList);
  },[]);

  if(newsItems.length > 0) {
    listOfNews = newsItems.map(item => {
      return (
        <li key={item.id}>
          <span>2</span>
          <p>{item.category}</p>
        </li>
      )
    })
  }

  return (
    <>
      <HeaderContainer black/>
      <section className="alone-section">
        <div className="wrapper">
          <div className="news">
            <ul className="news__category">
              <li>
                <span>2</span>
                <p>All</p>
              </li>
              {listOfNews}
            </ul>
            <ul className="news__list">
              <li>
                <div className="news__image">
                  <img src={''} alt=""/>
                </div>
                <h5>
                  Involve reorganizes for further growth
                </h5>
                <p>
                  Both new clients and several new projects have led to some significant organizational changes for the Havas-affiliate, Involve in Oslo.   Although 2020 has been challenging, we experienced ...
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default News;