import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loding from "./Loding";
import { productContext } from "../utils/Context";

const Details = () => {
  const [products, setproducts] = useContext(productContext);

  const [product, setproduct] = useState([]);
  const { id } = useParams();

  // const getsingleproduct = async () => {

  //     try {
  //         const { data } = await axios.get(`/products/${id}`);
  //         setproduct(data)
  //     } catch (error) {
  //         console.log(error)

  //     }
  // }

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    // getsingleproduct();
  }, []);

  return product ? (
    <div className="w-[75%] h-full flex justify-center items-center m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[40%] mr-[100px]"
        src={`${product.image}`}
        alt=""
      />

      <div className="content w-[50%]">
        <h1 className="text-4xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-400">{`${product.title}`}</h3>
        <h2 className="text-red-300 mb-3">{`${product.price}`}</h2>
        <p className="mb-[5%]">{`${product.description}`}</p>

        <Link className="mr-5 py-2 px-5 border border-blue-200 rounded text-blue-300">
          Edit
        </Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loding />
  );
};

export default Details;
