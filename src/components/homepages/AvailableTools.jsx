import React from "react";

import Card from "./Card";
const AvailableTools = ({ toolsData }) => {
 
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-20 gap-4 ">
        {toolsData.map((toolData) => {
          return (
            <div>
              <Card toolData={toolData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableTools;
