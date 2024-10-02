import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleCustomDropdown = () => {
    setIsCustomDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCustomDropdownOpen(false); // Close dropdown after selection
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".dropdown-container") && !event.target.closest(".custom-dropdown")) {
      setIsDropdownOpen(false);
      setIsCustomDropdownOpen(false); // Close dropdown on outside click
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className="bg-primary">
        <section className="grid grid-cols-12 px-6">
          <div className="col-span-2">
            <img
              src="src/assets/omfg-logo-black.png"
              alt="Logo"
              className="object-contain h-[45px]"
            />
          </div>
          <div className="col-span-6">
            <div className="flex py-2 gap-2">
              {/* Custom Dropdown Section */}
              <div className="hidden md:flex relative w-56 custom-dropdown">
                <div
                  className="bg-white text-primary opacity-70 p-2 rounded text-lg font-bold h-10 flex items-center justify-between cursor-pointer w-full"
                  onClick={toggleCustomDropdown}
                >
                  <span>{selectedOption}</span>
                  <AiOutlineDown className="text-primary opacity-70 pointer-events-none" />
                </div>

                {isCustomDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-full bg-white border border-primary rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li
                        onClick={() => handleOptionClick("All")}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                      >
                        All
                      </li>
                      <li
                        onClick={() => handleOptionClick("Category 1")}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                      >
                        Category 1
                      </li>
                      <li
                        onClick={() => handleOptionClick("Category 2")}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                      >
                        Category 2
                      </li>
                      <li
                        onClick={() => handleOptionClick("Category 3")}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                      >
                        Category 3
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Center Section - Search Bar */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white p-1 rounded text-lg w-full outline-none placeholder:text-primary h-10 opacity-70 pl-10"
                />
                {/* Search Icon */}
                <AiOutlineSearch className="absolute right-2 top-1.5 text-primary opacity-70 h-7 w-7 left-2" />
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex items-center justify-end gap-1 px-2 col-span-1 relative dropdown-container">
              <a
                className="flex items-center gap-1 cursor-pointer"
                onClick={toggleDropdown}
              >
                <span className="hidden lg:block text-white">
                  <span className="block text-sm font-medium">Welcome</span>
                  <span className="block text-sm font-medium">Mayur Srivastava</span>
                  <span className="block text-xs">Admin</span>
                </span>

                <AiOutlineDown className="w-4 h-4 text-white" />
              </a>

              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-primary rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
