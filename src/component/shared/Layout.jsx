import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import Modal from "../Modal";

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {isModalOpen && <Modal onClose={closeModal} />}

      {/* Sidebar (Hidden on mobile, shown on medium and larger screens) */}
      {/* Hamburger Menu */}
      <div className="md:hidden absolute text-3xl text-[#0048AD] top-5 left-1">
        <button onClick={toggleSidebar} className="mobile-hamburger">
          {isSidebarOpen ? "x " : "☰"}
        </button>
      </div>
      <div className={` ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <SideBar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      <div className="w-full overflow-y-scroll">
        <Header />

        <div>
          <Outlet context={{ openModal }} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
