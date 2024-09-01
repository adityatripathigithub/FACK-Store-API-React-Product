import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";

const App = () => {
  const { search, pathname } = useLocation();
  console.log(search, pathname);
  return (
    <div className="h-screen w-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="text-red-400 absolute left-[16%] top-[1%] text-xl bg-red-100 p-2 rounded hover:bg-green-200 hover:text-black duration-[0.2s]"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
