import React from 'react'
import { Link , NavLink } from 'react-router-dom'


function NavBar() {
   return (
    <header className="shadow-md sticky z-50 top-0 border-b border-gray-800 bg-[#1a1a1a]">
      <nav className="px-4 lg:px-6 py-3.5 mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between items-center w-full">
          
          {/* Custom Code Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-green-600/20">
              {"</>"}
            </div>
            <span className="text-xl font-bold text-gray-100 tracking-tight">
              Algo<span className="text-green-500">Tracker</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center justify-center w-full lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 rounded lg:p-0 transition-colors
                    ${isActive ? "text-green-500 font-semibold" : "text-gray-400 hover:text-gray-100"}`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pattern"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 rounded lg:p-0 transition-colors
                    ${isActive ? "text-green-500 font-semibold" : "text-gray-400 hover:text-gray-100"}`
                  }
                >
                  Patterns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 rounded lg:p-0 transition-colors
                    ${isActive ? "text-green-500 font-semibold" : "text-gray-400 hover:text-gray-100"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center lg:order-2 gap-3">
            <Link
              to="#"
              className="text-gray-400 hover:text-white font-medium text-sm px-3 py-2 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-900 font-medium rounded-lg text-sm px-4 py-2 transition-colors focus:outline-none"
            >
              Get started
            </Link>
          </div>
          
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
