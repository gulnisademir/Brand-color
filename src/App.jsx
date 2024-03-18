import { useContext } from "react";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/content";
import { MainContext } from "./MainContext";
import { Copied } from "./components/Copied";

function App() {

const {copied} = useContext(MainContext)
  return (
    <>
    {copied && <Copied color={copied}/>}
      <SideBar/>
      <Content/>
      
    </>
  );
}
export default App;
