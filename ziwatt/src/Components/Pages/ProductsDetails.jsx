import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import products from "../../Products.json";
import { Link, useParams } from "react-router-dom";

function ProductsDetails() {
  const { id } = useParams();
  // console.log(id);
  const product = products.find((p) => p.id == id);
  // console.log(product);

  //const[image, setImage] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      setImages([product.image, product.secondImage].filter(Boolean));
      setQuantity(1);
    }
  }, [product]);
  const colors = ["#7B3F00","#000000", "#9BBE38"];
  //  console.log(images);

  return (
    <>
      <ol className="section-banner position-relative py-3">
        <li className="position-relative">
          <Link to="/">Home</Link>
        </li>
        <li className="position-relative active">
          <a href="#" className="ps-5">
            Beauty & Cosmetics
          </a>
        </li>
        <li className="position-relative active">
          <a href="#" className="ps-5">
            {product.Productname}
          </a>
        </li>
      </ol>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex flex-column-reverse flex-md-row mb-4">
              <div className="d-flex flex-column me-3 thumbnail-images">
                {console.log(images)}

                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={product.Productname}
                    onClick={() => setImages(img)}
                    className={`img-thumbnail ${
                      mainImage === img ? "border-dark" : ""
                    }`}
                    style={{
                      width: 60,
                      height: 60,
                      cursor: "pointer",
                      objectFit: "cover",
                      border: "1px solid red",
                    }}
                  />
                ))}
              </div>
              {mainImage && (
                <img src={mainImage} className="img-fluid" alt="" />
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <h5 className="fw-bold">{product.price}</h5>
            <h2 className="fw-semibold mb-4">{product.Productname}</h2>
            <p className="fw-semibold mb-1">Color Black</p>
            <div className="d-flex gap-2 mb-4">
              
              {
                console.log(colors)}
              {colors.map((color, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: color ,
                    width: 25,
                    height: 25,
                    borderRadius: "50%",
                    cursor: "pointer",
                    border: "1px solid #ccc",
                  }}
                ></div>
              ))}
            </div>
            <p className="fw-semibold mb-1">Quantity</p>
            <div className="d-flex align-items-center gap-3 quantity">
              <div
                className="d-flex align-items-center Quantity-box"
                style={{ maxwidth: "200px" }}
              >
                <button
                  className="btn-count border-0"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >-</button>
                <input type="text" className="form-control text-center mx-2" value={quantity} readOnly />
                    <button
                  className="btn-count border-0"
                  onClick={() => setQuantity((q) => Math.max(1, q + 1))}
                >+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDetails;
