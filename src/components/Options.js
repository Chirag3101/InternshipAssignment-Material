import React from "react";
import Edit from "../images/Edit.svg";
import Delete from "../images/Delete.svg";
import Plus from "../images/Plus.svg";

function Options() {
  return (
    <div>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li className="inline-flex">
          <button
            type="button"
            className="text-white inline-flex mt-10 bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {/* <img src={Plus} className="" alt="Dashboard Logo" /> */}+ Add
            Role
          </button>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <img src={Edit} className="w-40px mt-10 h-40px" alt="edit" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <img src={Delete} className="w-40px mt-10 h-40px" alt="Delete" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Options;
