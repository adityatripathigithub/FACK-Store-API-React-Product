import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
    const [products] = useContext(productContext);

    let distinct_category =
        products && products.reduce((acc, cv) => [...acc, cv.category], []);
        
    distinct_category = [...new Set(distinct_category)];
    
    console.log(distinct_category);

    const color = (() =>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
    })

    return (
        <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
            <a
                className="py-2 px-5 border rounded border-blue-200 text-blue-300"
                href="/create"
            >
                Add new product
            </a>

            <hr className="w-[80%] my-3" />

            <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>

            <div className=" w-[80%]">
                {distinct_category.map((c, i) => (
                    <Link
                        key={i}
                        to={`/?category=${c}`}
                        className="flex items-center mb-3"
                    >
                        <span style={{backgroundColor : color()}} className="rounded-full  w-[15px] h-[15px]  mr-2"></span>{" "}
                        {c}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
