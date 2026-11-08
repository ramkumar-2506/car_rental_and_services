import { Outlet } from "react-router-dom";

import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ScrollProgress from "../components/Common/ScrollProgress";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50">
      <ScrollProgress />
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-[76px]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
