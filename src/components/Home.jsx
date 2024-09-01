import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loding from "./Loding";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(productContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredproducts, setfilteredproducts] = useState(null);

  const getproductscatagory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredproducts || category == "undefined")
      setfilteredproducts(products);
    if (category != "undefined") getproductscatagory();
  }, [category, products]);

  return products ? (
    <>
      <Nav />

      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hideen overflow-y-auto">
        {filteredproducts &&
          filteredproducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="mr-3 mb-3 card p-3 border shadow rounded w-[19%] h-[30vh] flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110 duration-[0.2s] mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-400 duration-[0.2s]">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loding />
  );
};

export default Home;
