//rrd
import { Outlet } from "react-router-dom";
import { Navbar } from "../sections";
//sections
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
