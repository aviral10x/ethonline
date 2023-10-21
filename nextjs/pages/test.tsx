import React from "react";
import Navbar from "@/components/Navbar";
import { CircuitUI } from "@/components/noir";

const test = () => {
  return (
    <div>
      <Navbar />
      <CircuitUI circuitName="test1" />
    </div>
  );
};

export default test;
