import React from "react";

const Header = () => {
  return (
    <header className="bg-primary grid grid-cols-3 items-center p-0">
      {/* Logo Section */}
      <div className="bg-primary col-span-1 items-center space-x-2">
        <img
          src="src/assets/omfg-logo-black.png" // Replace this with your actual logo path
          alt="Logo"
          className="2xl:h-16 h-12 outline-none md:h-14 object-contain "
        />
        
      </div>

      {/* Center Section - Dropdown and Search */}
      <div className="grid grid-cols-3 gap-2 bg-primary p-2 rounded-md place-self-center w-full max-w-md">
        <select className="bg-white text-primary p-1 rounded text-sm col-span-1">
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="bg-white p-1 rounded text-sm col-span-2 outline-none w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-primary absolute right-6 top-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65l4.35 4.35z"
          />
        </svg>
      </div>

      {/* User Information Section */}
      <div className="text-white justify-self-end">
        <div className="text-right">
          <p className="font-semibold text-sm">Welcome</p>
          <p className="font-semibold text-sm">Mayur Srivastava</p>
          <p className="text-xs">Admin</p>
        </div>
      </div>
    </header>
  );
};

export default Header;