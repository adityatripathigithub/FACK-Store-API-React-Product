import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();


const Context = (props) => {
  const [products, setproducts] = useState(

    JSON.parse(localStorage.getItem("products")) || null
  );


  const getproducts = async () => {
    try {
      const { data } = await axios("./products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);



  return (
    <productContext.Provider value={[products, setproducts]}>
      {props.children}
    </productContext.Provider>
  );
};

export default Context;
