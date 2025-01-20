import React, { useContext, useEffect, useState } from "react";
import Search from "../component/Search";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filterProducts, setFilterProducts] = useState(second);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      );
    }

    return filtered;
  };

  const applySorting = (productList) => {
    switch (productList) {
      case "low":
        return productList.sort((a, b) => a.price - b.price);
      case "high":
        return productList.sort((a, b) => a.price - b.price);
      default:
        return productList;
    }
  };

  useEffect(() => {
    let filtered = applyFilter();
    let sorted = applySorting(filtered);
    setFilterProducts(sorted);
    setCurrentPage(1); // Reset to the first page when filters change
  }, [category, sortType, products, search]);

  return (
    <div className="max-padd-container !px-0">
      <div className="flex flex-col sm:flex-row gap-8 mb-16">
        {/* FILTER */}
        <div className="min-w-72 bg-primary p-4 mt-8 pl-6 lg:pl-12">
          <Search />
          <div className="pl-5 py-3 mt-4 bg-white rounded-xl">
            <h5 className="h5 mb-4 ">Categiries</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {[
                "Headphones",
                "Cameras",
                "Mobiles",
                "Speakers",
                "Mouse",
                "Watches",
              ].map((cat) => (
                <label key={cat} className="flex gap-2 medium-14 text-gray-30">
                  <input type="checkbox" value={cat} className="w-3" />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h5>Sort By</h5>
            <select>
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div>
          <div>{"productss"}</div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
