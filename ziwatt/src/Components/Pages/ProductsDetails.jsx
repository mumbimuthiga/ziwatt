import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import products from "../../Products.json";
import { useParams } from "react-router-dom";

function ProductsDetails() {
  const id = useParams();
  const product = products.find((p) => p.id == id);
  const [image, setImage] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setImage([product.image, product.secondImage].filter(Boolean));
      setMainImage(product.image);
      setQuantity(1);
    }
  }, [product]);
  const colors = ["#000000", "#7B3F00", "#9BBE38"];

  return (
    <>
      <ol className="section-bannner position-relative py-3">
        <li className="position-relative">
          <Link to="/">Home</Link>
        </li>
        <li className="position-relative active"><a href="#" className="ps-5">Beauty & Cosmetics</a></li>
                <li className="position-relative active"><a href="#" className="ps-5">{product.Productname}</a></li>

      </ol>
    </>
  );
}

export default ProductsDetails;
