//rrd
import { Outlet } from "react-router-dom";
import { Navbar } from "../sections";
//sections
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
