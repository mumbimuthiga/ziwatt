import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Data
import Products from "../../Products.json";

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
                <h1>Celebrate Every Moment with a Thoughtful Gift</h1>
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
                <h1>Curated Gifts for the Ones Who Matter</h1>
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
                <h1>Find the Perfect Gift for Every Occasion</h1>
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
      {/* Hero End */}
      {/* Products Section */}
      <div className="product-container py-5 my-5">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title mb-5 product-title text-center">
              <h2 className="fw-semibold fs-1">Our Featured Products</h2>
              <p className="text-muted">Where Style meets Sentiment</p>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              nextEl: "product-swipper-next",
              prevEl: "product-swipper-prev",
            }}
            breakpoints={{
              1399: { slidesPerView: 4 },
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              767: { slidesPerView: 1.5 },
              0: { slidesPerView: 1 },
            }}
            className="mt-4 swiper position-relative"
          >
            {Products.filter(
              (product) => product.id >= 5 && product.id <= 10
            ).map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-item text-center position-relative">
                  <div className="product-image w-100 position-relative overflow-hidden">
                    <img src={product.image}  className="img-fluid" alt="" />
                    <img src={product.secondImage}  className="img-fluid" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default index;
