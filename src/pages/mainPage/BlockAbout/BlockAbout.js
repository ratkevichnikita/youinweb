//global dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, EffectCube, Navigation,Autoplay } from 'swiper';

//components
import CustomLink from "../../../common/CustomLink/CustomLink";

// styles
import classes from "./BlockAbout.module.css";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

//images
import slide from '../../../assets/images/slider/slide.jpg';
import slide2 from '../../../assets/images/slider/slide2.jpg';
import slide3 from '../../../assets/images/slider/slide3.jpg';

SwiperCore.use([Pagination,Navigation,EffectCube,Autoplay ]);

const BlockAbout = () => {
  return (
    <section className={`section`}>
      <div className="wrapper">
        <div>
          <div className={classes.inner}>
            <div className={classes.slider}>
              <Swiper
                id="slider-about"
                navigation
                loop={true}
                slidesPerView={1}
                speed={800}
                autoplay={{
                  delay: 5000,
                }}
                pagination={ { type: 'fraction' } }
                effect="cube"
                cubeEffect={{
                  slideShadows: false,
                  shadow: false,
                }}
              >
                <SwiperSlide><img src={slide} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide2} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide3} alt=""/></SwiperSlide>
              </Swiper>
            </div>
            <div className={classes.info}>
              <div className={classes.title}>
                <span className="sub-title">om oss</span>
                <h2>Creating better products faster</h2>
              </div>
              <p className={classes.description}>Involve er kjent for et godt miljø og lave skuldre og vi har en god og avslappet stemning på kontoret som fører til høy trivselsfaktor både for oss og våre kunder. Kombinasjonen av et uformelt miljø, mye kompetanse og lidenskap for jobben gir tillitsfulle kunderelasjoner som varer.</p>
              <CustomLink path={"/about"}>
                finn ut mer
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockAbout;