import React from "react";

import Card from "./Card";
const AvailableTools = ({ toolsData, carts, setCarts }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-20 gap-4 ">
        {toolsData.map((toolData, id) => {
          return (
            <div key={id}>
              <Card
                toolData={toolData}
                carts={carts}
                setCarts={setCarts}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableTools;
