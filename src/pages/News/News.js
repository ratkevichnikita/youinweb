// global dependencies
import React, {useEffect, useState} from 'react';
import newsList from "../../JSON/json-news";

//styles
import './styles.scss';

const News = () => {

  const [newsItems, setNewsItems] = useState([]);
  let listOfNews;

  // let customBtn = document.querySelector('.elem');
  // let container = document.querySelector('.item');
  // let buttonCenterX = customBtn.offsetLeft + (customBtn.offsetWidth / 2);
  // let buttonCenterY = customBtn.offsetTop + (customBtn.offsetHeight / 2);
  // function getMousePos(xRef, yRef) {
  //   let panelRect = container.getBoundingClientRect();
  //   return {
  //     x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * container.offsetWidth,
  //     y: Math.floor(yRef - panelRect.top) /  (panelRect.bottom - panelRect.top) * container.offsetHeight
  //   };
  // }
  // container.addEventListener("mousemove", function(e) {
  //   let mousePos = getMousePos(e.clientX, e.clientY),
  //     distX = mousePos.x - buttonCenterX,
  //     distY = mousePos.y - buttonCenterY;
  //   if (Math.abs(distX) < 500 && distY < 200) {
  //     customBtn.style.transform = "translate("+(-1 * distX) / 4 + "px," + (-1 * distY) / 4 + "px)";
  //   }
  // })

  useEffect(()=> {
    setNewsItems(newsList);
  },[]);

  if(newsItems.length > 0) {
    listOfNews = newsItems.map(item => {
      return (
        <li className="item" key={item.id}>
          <p className="elem" >{item.category}</p>
        </li>
      )
    })
  }

  return (
    <>
      <section className="alone-section">
        <div className="wrapper">
          <div className="news">
            <ul className="news__category">
              {listOfNews}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;