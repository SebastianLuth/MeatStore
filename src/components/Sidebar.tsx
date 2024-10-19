'use client';

import { forwardRef } from "react";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(({ collapsed }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-80 min-h-screen p-4 pl-0 bg-white border-r border-gray-100 transition-spacing motion-reduce:transition-none duration-300 sm:duration-500 ease-in-out ${
        collapsed ? "ml-0 sm:-ml-80" : "ml-80 sm:ml-0"
      }`}
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-300">
        <h1 className={`text-lg font-bold transition-all ${collapsed ? 'opacity-0' : 'opacity-100'}`}>Sidebar</h1>
      </div>
      <nav className={`mt-4 ${collapsed ? 'hidden' : 'block'}`}>
        <ul className="flex flex-col space-y-2 px-4">
          <li>
            <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
              Item 1
            </button>
          </li>
          <li>
            <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
              Item 2
            </button>
          </li>
          <li>
            <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
              Item 3
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
