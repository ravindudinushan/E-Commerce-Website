import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* IMAGE */}
      <Link
        to={`/product/${product._id}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flexCenter p-2 bg-[#f5f5f5] overflow-hidden relative"
      >
        <img
          src={
            product.image.length > 1 && hovered
              ? product.image[1]
              : product.image[0]
          }
          alt="productImg"
          className="transition-all duration-300"
        />
      </Link>
      {/* INFO */}
      <div className="p-3">
        <h4 className="bold-15 line-clamp-1 !py-0">{product.name}</h4>
        <div className="flexBetween pt-1">
          <p className="h5">{product.category}</p>
          <h5 className="h5 pr-2">${product.price}.00</h5>
        </div>
        <p className="line-clamp-2 py-1">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;
