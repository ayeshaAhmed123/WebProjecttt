import React, { useEffect } from "react";
import Sidebar from "./SellerSidBar";
import SellerNavbar from "./SellerNavbar";
import { useState } from "react";
function Seller() {
  return (
    <div>
      {/* Navbar */}
      <SellerNavbar />

      <Sidebar />
    </div>
  );
}

export default Seller;
