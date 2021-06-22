// global dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper'

// styles
import './styles.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

//images
import slide from "./../../../../assets/images/cases/case/slider1.jpg";
import slide2 from "./../../../../assets/images/cases/case/slider2.jpg";
import slide3 from "./../../../../assets/images/cases/case/slider3.jpg";

SwiperCore.use([Pagination,Navigation]);

const CaseGallery = () => {
  return (
    <section className="section">
        <div className="case-gallery">
          <div className="case-gallery__title">
            <span>fotogalleri</span>
            <h2>Details can be seen here</h2>
          </div>
          <div className="case-gallery__content pt-80">
            <Swiper
              id="case-gallery"
              navigation
              spaceBetween={40}
              loop={true}
              slidesPerView={2.15}
              centeredSlides={true}
              speed={800}
              lazy={true}
              pagination={ { type: 'fraction' } }
            >
              <SwiperSlide>
                <img data-src={slide} src={slide} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img data-src={slide2} src={slide2} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img data-src={slide3} src={slide3} alt=""/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </section>
  );
};

export default CaseGallery;

