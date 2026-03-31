import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
const Card = ({ toolData, carts, setCarts }) => {
  const tagStyles = {
    "best-seller": "bg-yellow-100 text-yellow-700",
    popular: "bg-blue-100 text-blue-700",
    new: "bg-green-100 text-green-700",
  };
  const [isSelected, seclected] = useState(false);
  const handleCarts = () => {
    seclected(true);

    const isFound = carts.find((data) => data.id === toolData.id);
      if (isFound)
      {
          toast.error("Item already in cart!");
          return;
      }

    setCarts([...carts, toolData]);
    toast.success("Item add to cart!");
  };

  return (
    <div className="h-full ">
      <div
        className="transition delay-150 duration-300 ease-in-out
       hover:-translate-y-1 hover:scale-110 hover:bg-white hover:mt-2 hover:border-[#4F39F6]
         flex flex-col h-full space-y-4 px-8 py-6 bg-gray-100 border
         border-gray-200 rounded-3xl"
      >
        <div className="flex justify-between ">
          <div className="border border-gray-200 rounded-full p-3 ">
            <img
              src={toolData.icon}
              alt=""
            />
          </div>
          <div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[toolData.tagType]}`}
            >
              {toolData.tag}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xl lg:text-2xl font-bold">{toolData.name}</p>
          <p>{toolData.description}</p>
          <p className="text-2xl font-bold">
            ${toolData.price}
            <span className=" text-[1.5vh] font-light">/{toolData.period}</span>
          </p>
        </div>
        <div className="grow">
          <ul className="space-y-2">
            {toolData.features.map((feature, id) => (
              <li
                key={id}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <FaCheck className="text-green-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <button
            className={`btn w-full ${isSelected === true ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514F5]"} text-white  rounded-4xl`}
            onClick={handleCarts}
          >
            {isSelected === true ? (
              <p className="flex items-center gap-2">
                <FaCheck /> Add to Cart
              </p>
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
