import React from "react";
import { Outlet } from "react-router-dom";
import { navData } from "../api/data";
import NavigationItem from "../components/Navigation/NavigationItem";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div>Sidebar Navigation By iAmine</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            {navData.map((el, i) => (
              <NavigationItem name={el.name} items={el.item} key={i} />
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-full ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
