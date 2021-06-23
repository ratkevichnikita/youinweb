// global dependencies
import React, {useEffect, useRef, useState} from 'react';
import newsList from "../../JSON/json-news";

//styles
import './styles.scss';
import HeaderContainer from "../../components/Header/HeaderContainer";
import Footer from "../../components/Footer/Footer";

const News = () => {

  const [newsItems, setNewsItems] = useState([]);
  let listOfCategoryNews;
  let listOfNews;
  // const customBtn = useRef(null)
  // const container = useRef(null)
  //
  // function getMousePos(xRef, yRef) {
  //   let panelRect = container.current.getBoundingClientRect();
  //   return {
  //     x: Math.floor(xRef ) / (panelRect.right - panelRect.left) * container.current.offsetWidth,
  //     y: Math.floor(yRef ) /  (panelRect.bottom - panelRect.top) * container.current.offsetHeight
  //   };
  // }
  //
  // let handleMove = (e) => {
  //   let mousePos = getMousePos(e.clientX, e.clientY);
  //   let buttonCenterX = customBtn.current.offsetLeft + (customBtn.current.offsetWidth / 2);
  //   let buttonCenterY = customBtn.current.offsetTop + (customBtn.current.offsetHeight / 2);
  //     let distX = mousePos.x - buttonCenterX;
  //     let distY = mousePos.y - buttonCenterY;
  //     customBtn.current.style.transform = "translate("+(distX ) / 12 + "px," + (distY) / 8 + "px)";
  // }
  //
  useEffect(()=> {
    setNewsItems(newsList);
  },[]);

  listOfCategoryNews = newsItems.map(item => {
    return (
      <li key={item.id} className="item">
        <p  className="elem">{item.category}</p>
      </li>
    )
  })

  return (
    <>
      <HeaderContainer black />
      <section className="alone-section">
        <div className="wrapper">
          <div className="news">
            <ul className="news__category">
              {listOfCategoryNews}
            </ul>
            <ul className="news__list">
              <li className="news__item">

              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default News;