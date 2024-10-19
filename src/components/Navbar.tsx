'use client';
import { forwardRef } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

interface Props {
  toggleCollapsed: () => void;
}

const Navbar = forwardRef(
  ({ toggleCollapsed }: Props, toggleRef: React.Ref<HTMLButtonElement>): JSX.Element => {
    return (
      <nav className="flex justify-between items-center p-2 bg-white shadow-md border-b border-gray-300">
        <div className="flex items-center">
          <button
            ref={toggleRef}
            aria-label="Toggle sidebar"
            type="button"
            className="w-10 h-10 p-2 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out"
            onClick={toggleCollapsed}
          >
            <RiMenu2Fill className="text-gray-600" size={24} />
          </button>
        </div>
        <div >
        <ul className="flex space-x-4">
            <li>All</li>
            <li>Shops</li>
            <li>Best Seller</li>
        </ul>
        </div>

        <div className="flex space-x-6">
          <IoCartOutline size={30} className="text-gray-600 cursor-pointer item-center" />
          <FiUser size={30} className="text-gray-600 cursor-pointer item-center"/>
          <CgDarkMode size={30} className="text-gray-600 cursor-pointer item-center" />
        </div>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
