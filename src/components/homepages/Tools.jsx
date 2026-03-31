import React, { use, useState } from "react";
import AvailableTools from "./AvailableTools";
import YourCart from "./YourCart";

const Tools = ({ toolsDataPromise, carts, setCarts }) => {
  const toolsData = use(toolsDataPromise);

  // const [carts, setCarts] = useState([]);
  // console.log(carts);
  const [selectedType, setSelectedType] = useState("product");

  return (
    <div className="container mx-auto">
      <div
        className="my-3 w-fit rounded-4xl p-0.5 mx-auto flex
       justify-center items-center mb-6 bg-gray-100 "
      >
        <a
          onClick={() => setSelectedType("product")}
          className={`btn border-none rounded-4xl  ${
            selectedType === "product"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white"
              : "bg-gray-100  "
          }`}
        >
          Products
        </a>
        <a
          onClick={() => setSelectedType("cart")}
          className={`btn border-none rounded-4xl ${
            selectedType === "cart"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white"
              : "bg-gray-100 text-[#4F39F6]}"
          }`}
        >
          Cart<span>({carts.length})</span>
        </a>
      </div>
      {selectedType === "product" ? (
        <AvailableTools
          toolsData={toolsData}
          carts={carts}
          setCarts={setCarts}
        />
      ) : (
        <YourCart
          carts={carts}
          setCarts={setCarts}
        />
      )}
      {}
    </div>
  );
};

export default Tools;

