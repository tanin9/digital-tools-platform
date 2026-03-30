import './App.css'
import Board from './components/homepages/Board'
import Badge from "./components/homepages/Badge";
import Workflow from "./components/homepages/Workflow";
import Footer from './components/homepages/Footer'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/homepages/Pricing';


function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Board></Board>
      <Badge></Badge>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App
