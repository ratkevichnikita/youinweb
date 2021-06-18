// global dependencies
import React, {useEffect, useRef, useState} from 'react';
import newsList from "../../JSON/json-news";

//styles
import './styles.scss';

const News = () => {

  // const [newsItems, setNewsItems] = useState([]);
  // let listOfNews;
  //
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
  // useEffect(()=> {
  //   setNewsItems(newsList);
  // },[]);
  //
  // listOfNews = newsItems.map(item => {
  //   return (
  //     <li key={item.id} ref={container} onMouseMove={(e) => handleMove(e)} className="item">
  //       <p ref={customBtn} className="elem" >{item.category}</p>
  //     </li>
  //   )
  // })

  return (
    <>
      <section className="alone-section">
        <div className="wrapper">
          <div className="news">
            <ul className="news__category">
              {/*<li ref={container} onMouseMove={(e) => handleMove(e)} className="item">*/}
              {/*  <p ref={customBtn} className="elem" >button</p>*/}
              {/*</li>*/}
              {/*{listOfNews}*/}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;