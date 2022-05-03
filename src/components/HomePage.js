import React, { useState } from "react";
import Sidebar from "./SideBar";
import Table from "./Table";
import Tabs from "./Tabs";

function HomePage() {
  const [showInTable, setShowInTable] = useState(false);
  const disable = () => {
    setShowInTable(false);
  };
  const enable = () => {
    setShowInTable(true);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="container">
        <Tabs />
        <div className="container">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
