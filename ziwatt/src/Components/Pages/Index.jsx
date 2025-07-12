import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

function index() {
  return (
    <>
      {/* Hero  */}
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
          }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content">
                <h5>-ESSENTIAL ITEMS</h5>
                <h1>
                  Celebrate Every Moment with a Thoughtful Gift
                </h1>
                <p className="my-3">
                  imply dummy text of the printing and typesetting
                  industry.Lorem Ipsum has been the industry's standard
                </p>
                <a href="" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content">
                <h5>-New Collection</h5>
                <h1>
                  Curated Gifts for the Ones Who Matter
                </h1>
                <p className="my-3">
                  imply dummy text of the printing and typesetting
                  industry.Lorem Ipsum has been the industry's standard
                </p>
                <a href="" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content">
                <h5>-Get the Glow</h5>
                <h1>
                  Find the Perfect Gift for Every Occasion
                </h1>
                <p className="my-3">
                  imply dummy text of the printing and typesetting
                  industry.Lorem Ipsum has been the industry's standard
                </p>
                <a href="" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default index;
