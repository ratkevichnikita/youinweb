// global dependencies
import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {Context} from "../../Context/Context";
import pages from "../../JSON/json-pages";

//components
import Header from "./Header";
import OnMouseHover from "../../common/OnMouseHover/OnMouseHover";

//images
import sprite from "../../assets/images/sprite/sprite.svg";

const HeaderContainer = React.memo(({black}) => {

  const [active, setActive] = useState(false);
  const [arrImages, setArrImages] = useState([]);
  const [pagesList, setPagesList] = useState([]);

  const {handleOpen, modalOpen, setModalOpen} = useContext(Context)

  let location = useLocation();
  let params = useParams();

  let scrollTop;
  let onScroll;
  let pagesListForHeaderMenu;
  let pagesListForHamburgerMenu;

  useEffect(() => {
    setPagesList(pages)
  }, [])

  let highlightHeaderLink = (elem) => {
    let xlink = '';
    if(params.label) {
      xlink = '/' + params.label + '/'
    }
    return `/${elem.pageSlug}${xlink}` === location.pathname ? `active` : ''
  }

  if (pagesList.length > 0) {
    pagesListForHeaderMenu = pagesList.map((item, index) => {
      if (item.pageName === 'Cases' || item.pageName === 'Vare-tjenester' || item.pageName === 'Kontakt') {

        return (
          <li key={item + index} className={highlightHeaderLink(item)}>
            <OnMouseHover>
              <Link to={item.pageSlug === 'home' ? '/' : `/${item.pageSlug}`}>{item.pageName}</Link>
            </OnMouseHover>
          </li>
        )
      }
    });
    pagesListForHamburgerMenu = pagesList.map((item,index) => {
      return (
        <li key={index} data-name={`${item.pageName}`} onMouseLeave={() => {
          hiddenImages()
        }} onMouseEnter={(event) => {
          showImages(event)
        }}
            className={`/${item.pageSlug}` === location.pathname ? `nav__item modal-link-js current-page` : 'nav__item modal-link-js'}>
          <OnMouseHover>
            <Link to={item.pageSlug === 'home' ? '/' : `/${item.pageSlug}`} className="nav__link">
              <p>{item.pageName}</p>
              <svg width="17" height="17">
                <use href={sprite + '#arrow'}/>
              </svg>
            </Link>
          </OnMouseHover>
        </li>
      )
    })
  }

  let showImages = (event) => {
    let target = event.currentTarget;

    for (let el of arrImages) {
      if (target.dataset.name === el.dataset.name) {
        el.classList.add('show')
      }
    }
  }

  let isModalOpen = () => {
    setModalOpen(!modalOpen)
    modalOpen ? setActive(false) : setActive(true);
  }

  let hiddenImages = () => {
    for (let el of arrImages) {
      el.classList.remove('show')
    }
  }

  useEffect(() => {
    scrollTop = Math.round(window.scrollY);
    onScroll = () => {
      let header = document.getElementById('header');
      scrollTop = Math.round(window.scrollY);
      if (scrollTop > 0) {
        header.classList.add('scrolled')
        setActive(true)
      } else {
        header.classList.remove('scrolled')
        setActive(false)
      }
      if ((scrollTop + 30) > window.innerHeight) {
        header.classList.add('header-black')
      } else if (location.pathname !== `/cases` && location.pathname !== `/cases/${params.label}/` && location.pathname !== `/vare-tjenester` && location.pathname !== `/vare-tjenester/${params.label}/` && location.pathname !== `/kontakt`  && location.pathname !== `/news`) {
        header.classList.remove('header-black')
      }
    }

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    }

  }, [location.pathname, params.label])

  return (
    <Header black={black} hiddenImages={hiddenImages} handleOpen={handleOpen} isModalOpen={isModalOpen}
            modalOpen={modalOpen}
            pagesListForHeaderMenu={pagesListForHeaderMenu} setArrImages={setArrImages} showImages={showImages}
            active={active} pagesListForHamburgerMenu={pagesListForHamburgerMenu}/>
  );
});

export default HeaderContainer;