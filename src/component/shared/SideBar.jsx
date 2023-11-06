import React from "react";
import classNames from "classnames";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/const/navigation";
import { Link, useLocation } from "react-router-dom";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const linkStyle =
  "flex  item-center px-8 py-3 text-md text-gray-700 hover:bg-[#e0edff] ";
function SideBar({ setIsSidebarOpen }) {
  return (
    <div className="flex flex-col w-[272px] p-3 bg-[#fff] h-screen overflow-y-scroll max-md:absolute">
      <div className="item-center justify-center gap-2 px-8 py-6 text-[#0048AD] text-[20px] font-bold">
        abc firm
      </div>
      <div className="flex-1 ">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLink
            key={item.key}
            item={item}
            handleClick={setIsSidebarOpen}
          />
        ))}
      </div>
      <div className="mt-5">
        <UpgradeCard />
      </div>
    </div>
  );
}

function SideBarLink({ item, handleClick }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "bg-[#e0edff]" : " ",
        linkStyle
      )}
      onClick={() => handleClick(false)}
    >
      <span className="mr-3">{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}

function UpgradeCard() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center bg-[#e0edff] px-4 py-6 w-60 rounded-lg">
      <div>
        <BsFillRocketTakeoffFill color="#0048AD" />
      </div>
      <h3 className="text-[#101928] font-bold">Upgrade Account</h3>
      <p className="text-[12px]">Access to Unlimited Transcription </p>
      <button className="bg-[#0048AD] w-[95%] py-3 text-[#fff] rounded-md mt-2">
        Upgrade
      </button>
    </div>
  );
}
export default SideBar;
