import React from "react";
import Sync from "../images/Sync.svg";
function Tabs() {
  return (
    <>
      <ul className="flex flex-wrap text-sm ml-10 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <a
            href="#"
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          >
            Permissions
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Approval Matrix
          </a>
        </li>

        <li className="inline-flex content- mr-2">
          <img src={Sync} className="w-40px h-40px" alt="Dashboard Logo" />
          <h1 className="text-right  p-4 rounded-t-lg ">
            Last Synced 15 mins ago
          </h1>
        </li>
      </ul>
    </>
  );
}

export default Tabs;
