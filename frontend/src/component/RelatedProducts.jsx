import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { products } from "../assets/data";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0){
        let filtered = products.slice();
        filtered = filtered.filter((item) => category === item.category)

        setRelatedProducts(filtered.slice(0, 5))
    }
  }, [products]);
  return (
    <section className="py-16">
      <Title
        title1={"Related"}
        title2={"Products"}
        titleStyles={"pb-10"}
      />
      {/* CONTAINER */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {relatedProducts.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
