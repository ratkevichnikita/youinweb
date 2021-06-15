//global dependencies
import React from 'react';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper';


//components
import CustomLink from "../../../common/CustomLink/CustomLink";
import OnMouseHover from "../../../common/OnMouseHover/OnMouseHover";

// styles
import './styles.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

SwiperCore.use([Pagination, Navigation]);

const BlockOurTeam = (props) => {

  const slides = props.team.map(item => {
    return (
      <SwiperSlide key={item.id} >
        <OnMouseHover>
          <Link to="/ansatte/">
            <img data-src={`${item.image}/${item.id}.jpg`} src={`${item.image}/${item.id}.jpg`} alt="item.name"/>
            <div className="ourteam__box">
              <h4>
                {item.name}
              </h4>
              <p>
                {item.position}
              </p>
            </div>
          </Link>
        </OnMouseHover>
      </SwiperSlide>
    )
  })

  return (
    <section className="section bg">
      <div className="wrapper">
        <div className="ourteam">
          <div className="ourteam__title">
            <h2>Our team</h2>
          </div>
          <div className="ourteam__slider">
            <Swiper
              id="ourteam"
              navigation={{
                nextEl: '.swiper-button-next',
              }}
              spaceBetween={50}
              loop={true}
              slidesPerGroup={4}
              slidesPerView={4}
              speed={800}
              lazy={true}
              pagination={{type: 'fraction'}}
            >
              {slides}
            </Swiper>
            <div className="swiper-button-next" />
          </div>
          <div className="ourteam__btn">
            <CustomLink path={"/ansatte"}>
              Hele laget
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockOurTeam;