import './App.css'
import Board from './components/homepages/Board'
import Badge from "./components/homepages/Badge";
import Workflow from "./components/homepages/Workflow";
import Footer from './components/homepages/Footer'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/homepages/Pricing';
import Steps from './components/homepages/Steps';


function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Board></Board>
      <Badge></Badge>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App
