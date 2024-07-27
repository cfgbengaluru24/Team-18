import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-slate-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="https://pbs.twimg.com/profile_images/1276595758934953990/NbHzzi7h_400x400.jpg" alt="Logo" className="h-8 w-8 mr-3" />
              <span className="font-semibold text-gray-700 text-lg truncate">
                NCC Exchange Participants Association of India
              </span>
            </Link>
          </div>
          <div className="ml-4 flex items-center">
            <button
              onClick={onLogout}
              className="ml-4 py-2 px-4 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300"            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;