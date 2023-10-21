// pages/circuits.tsx
import React from "react";
import CircuitRenderer from "../components/CircuitRederer";
import circuitData from "../generated/circuits.json";

const CircuitsPage = () => {
  return <CircuitRenderer circuits={circuitData} />;
};

export default CircuitsPage;
