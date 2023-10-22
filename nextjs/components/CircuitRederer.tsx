// components/CircuitRenderer.tsx
import React from "react";
import { CircuitUI } from "@/components/noir";
import { CircuitName } from "@/utils/noir/circuit";

interface CircuitRendererProps {
  circuits: Record<string, any>; // Replace 'any' with the actual type of your circuit data
}

const CircuitRenderer: React.FC<CircuitRendererProps> = ({ circuits }) => {
  return (
    <div>
      {Object.keys(circuits).map(circuitName => (
        <CircuitUI key={circuitName} circuitName={circuitName as CircuitName} className="p-2" />
      ))}
    </div>
  );
};

export default CircuitRenderer;
