import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const MainLayout = () => {
    return ( 
        <>
          <Header/>
          <Outlet/>
        </>
     );
}
 
export default MainLayout;