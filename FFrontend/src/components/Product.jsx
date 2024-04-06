import React from "react";
import ReactStars from "react-rating-stars-component"

const Product = ({ product }) => {
  const options = {
    edit: false,
    value: product.rating,
    activeColor:"tomato",
    color:"#7c7d7d",
    size: window.innerWidth  < 600 ? 20 : 25,
    isHalf: true
  };
  return (
    <div
      className="card card-compact w-96  bg-base-100 shadow-xl "
      style={{ margin: "30px 0px", width: "280px", borderRadius: "3px" }}
    >
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{product.name}</h1>
        <span className="text-slate-400  ">Rs.{product.price}</span>
        <ReactStars {...options}/>
          <span>(256 reviews)</span>
        <div className="card-actions justify-end">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
