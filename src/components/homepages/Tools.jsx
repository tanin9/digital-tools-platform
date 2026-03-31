import React, { use, useState } from "react";
import AvailableTools from "./AvailableTools";
import YourCart from "./YourCart";

const Tools = ({ toolsDataPromise }) => {
 
  const toolsData = use(toolsDataPromise);
  
  const [selectedType, setSelectedType] = useState("product");
  console.log(selectedType);
  

  return (
    <div className="container mx-auto">
      <div className="my-3 flex gap-2 justify-center items-center mb-6">
        <a
          onClick={() => setSelectedType("product")}
          className={`btn rounded-4xl ${
            selectedType === "product"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white"
              : "bg-white text-[#4F39F6]"
          }`}
        >
          Products
        </a>
        <a
          onClick={() => setSelectedType("cart")}
          className={`btn rounded-4xl ${
            selectedType === "cart"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white"
              : "bg-white text-[#4F39F6]}"
          }`}
        >
          Cart<span>(2)</span>
        </a>
      </div>
      {selectedType === "product" ? (
        <AvailableTools toolsData={toolsData} />
      ) : (
        <YourCart/>
      )}
      {}
    </div>
  );
};

export default Tools;


// {/* <div className="container mx-auto">
//     <div className="my-3 flex gap-2 justify-center items-center">
//       <a className="btn bg-white text-[#4F39F6] rounded-4xl">Products</a>
//       <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white rounded-4xl">
//         Cart<span>(2)</span>
//       </a>
//       {/* <a className="btn bg-white text-[#4F39F6] rounded-4xl">Products</a>
//         <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white rounded-4xl">
//           Cart<span>(2)</span>
//         </a> */}
//     </div> */}