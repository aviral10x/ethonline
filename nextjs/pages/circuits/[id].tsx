// pages/circuits/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import { CircuitUI } from "@/components/noir";
import { CircuitName } from "@/utils/noir/circuit";

const CircuitPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(typeof id);

  return (
    <div>
      <CircuitUI circuitName={id as CircuitName} />
    </div>
  );
};

export default CircuitPage;
