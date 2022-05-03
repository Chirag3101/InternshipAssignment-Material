import React from "react";
import Tabs from "./Tabs";
import Options from "./Options";
import Eye from "../images/Eye.svg";

function Table() {
  return (
    <>
      <div className="container w-10/12 mx-auto relative overflow-x-auto sm:rounded-lg">
        <div className="p-4">
          {/* <div className="w-full">
            <Tabs />
          </div> */}
          <div className="w-full justify-start">
            <Options />
          </div>
        </div>
        <table className="container text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Department/Role Name
              </th>
              <th scope="col" className="px-6 py-3">
                Access Level
              </th>
              <th scope="col" className="px-6 py-3">
                No. of members
              </th>
              <th scope="col" className="px-6 py-3">
                Last Updated
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Teachers
              </th>
              <td className="px-6 py-4">
                <div class="relative">
                  <label
                    for="floating_outlined"
                    class="text-sm text-green-500 bg-green-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    All Access
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">4</td>
              <td className="px-6 py-4">1 minute ago</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img
                    src={Eye}
                    className="w-40px h-40px"
                    alt="Dashboard Logo"
                  />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
              >
                External Faculty
              </th>
              <td className="px-6 py-4">
                <div class="relative">
                  <label
                    for="floating_outlined"
                    class=" text-sm text-red-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-red-200 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Restricted Access
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">1 min ago</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img
                    src={Eye}
                    className="w-40px h-40px"
                    alt="Dashboard Logo"
                  />
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Lab Assistants
              </th>
              <td className="px-6 py-4">
                <div class="relative">
                  <label
                    for="floating_outlined"
                    class="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    No Access
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">9</td>
              <td className="px-6 py-4">1 min ago</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img
                    src={Eye}
                    className="w-40px h-40px"
                    alt="Dashboard Logo"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
