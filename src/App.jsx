import './App.css'
import Board from './components/homepages/Board'
import Badge from "./components/homepages/Badge";
import Workflow from "./components/homepages/Workflow";
import Footer from './components/homepages/Footer'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/homepages/Pricing';
import Steps from './components/homepages/Steps';
import Tools from './components/homepages/Tools';
import { Suspense, useState } from 'react';

const fetchToolsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const toolsDataPromise = fetchToolsData();

  // const [cartsCount, setCartsCount] = useState([]);
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts.length}></Navbar>
      <Board></Board>
      <Badge></Badge>
      <Suspense
        fallback={
          <span className="loading loading-infinity loading-xl text-blue-400"></span>
        }
      >
        <Tools
          toolsDataPromise={toolsDataPromise}
          carts={carts} 
          setCarts={setCarts} 
        />
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App
