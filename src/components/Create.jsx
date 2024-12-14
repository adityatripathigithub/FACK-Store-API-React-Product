import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
    const navigate = useNavigate;

    const [products, setproducts] = useContext(productContext);
    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [descripation, setdescripation] = useState("");

    const AddProductHandler = (e) => {
        e.preventDefault();

        if (title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5 || price.trim().length < 1 || descripation.trim().length < 5) {
            alert("Each and every input have must have atlese 4 charactor ");
            return;
        }

        const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            descripation,
        };
        setproducts([...products, product]);
        localStorage.setItem("product", JSON.stringify([...products, product]));
        navigate("/");
    };

    return (
        <form onSubmit={AddProductHandler} className="flex flex-col items-center w-screen h-screen p-[5%]">
            <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>
            <input type="url" placeholder="image link" className="text-1xl bg-zinc-100 w-1/2 rounded p-3 mb-3" onChange={(e) => setimage(e.target.value)} value={image} />
            <input type="text" placeholder="Title" className="text-1xl bg-zinc-100 w-1/2 rounded p-3 mb-3" onChange={(e) => settitle(e.target.value)} value={title} />

            <div className="w-1/2 flex justify-between">
                <input type="text" placeholder="category" className="text-1xl bg-zinc-100 w-[48%] rounded p-3 mb-3" onChange={(e) => setcategory(e.target.value)} value={category} />
                <input type="number" placeholder="price" className="text-1xl bg-zinc-100 w-[48%] rounded p-3 mb-3" onChange={(e) => setprice(e.target.value)} value={price} />
            </div>

            <textarea className="text-1xl bg-zinc-100 w-1/2 rounded p-3 mb-3" placeholder="Enter Product Description hear..." onChange={(e) => setdescripation(e.target.value)} value={descripation} rows="10"></textarea>

            <div className="w-1/2">
                <button className="py-2 px-5 border rounded hover:bg-blue-200 hover:text-black duration-[0.3s]  border-blue-200 text-blue-300">Add new product</button>
            </div>
        </form>
    );
};

export default Create;
