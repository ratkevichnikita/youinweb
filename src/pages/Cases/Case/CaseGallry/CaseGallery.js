// global dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper'

// styles
import './styles.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination,Navigation]);

const CaseGallery = ({getCurrentService}) => {
  let slidesUrls = getCurrentService.map(item => item.slideImages);
  let slides
    if(slidesUrls[0]?.length > 0) {
      slides = slidesUrls[0].map(item => {
        return (
          <SwiperSlide key={item}>
            <img data-src={item} src={item} alt=""/>
          </SwiperSlide>
        )
      })
    }

  return (
    <section className="section">
      {
        slides && (
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
                { slides }
              </Swiper>
            </div>
          </div>
        )
      }

    </section>
  );
};

export default CaseGallery;

