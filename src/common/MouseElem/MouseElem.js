import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Context} from "../../Context/Context";

const MouseElem = () => {

  const {elemOnHover} = useContext(Context)

  const [mousePosition, setMousePosition] = useState({left: 0, top: 0});

  const mouseElem = useRef(null);

  useEffect(() => {
    if (elemOnHover) {
      mouseElem.current.classList.add('active');
    } else {
      mouseElem.current.classList.remove('active');
    }
  }, [elemOnHover])

  useLayoutEffect(() => {

    let posX = mousePosition.left > 0 ? mousePosition : 0;
    let posY = mousePosition.top > 0 ? mousePosition : 0;

    function move() {
      mouseElem.current.style.left = posX + 'px';
      mouseElem.current.style.top = posY + 'px';
    }

    document.addEventListener("mousemove", (event) => {
      posX = event.clientX;
      posY = event.clientY;
    });

    setInterval(move, 30);

    return () => {
      setMousePosition({left: posX, top: posY});
    }

  }, [])



  return (
    <span ref={mouseElem} id="mouseElem"/>
  );
};

export default MouseElem;