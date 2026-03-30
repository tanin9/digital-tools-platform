import React, { use } from 'react';

const Tools = ({ toolsDataPromise }) => {
    console.log(toolsDataPromise);
    const data = use(toolsDataPromise);
    console.log(data);
    

    return (
        <div>
            tools: {data.length}
        </div>
    );
};

export default Tools;