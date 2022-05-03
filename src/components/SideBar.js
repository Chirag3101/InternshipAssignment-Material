import React from "react";
import Projects from "../images/Dashboard.svg";
import Permissions from "../images/Permissions.svg";
import Classroom from "../images/Classroom.svg";
function SideBar() {
  return (
    <>
      <aside className="w-64" aria-label="Sidebar">
        <div className="h-screen overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-white-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  src={Projects}
                  className="w-40px h-40px"
                  alt="Dashboard Logo"
                />
                <span className="ml-3">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  src={Classroom}
                  className="w-40px h-40px"
                  alt="Dashboard Logo"
                />
                <span className="ml-3 whitespace-nowrap">Classrooms</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  src={Permissions}
                  className="w-40px h-40px"
                  alt="Dashboard Logo"
                />
                <span className="ml-3 whitespace-nowrap">Permissions</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
