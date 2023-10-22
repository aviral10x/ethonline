import React from "react";
import Image from "next/image";
import InteractNoir from "../public/interactwithnoircode.png";
import InteractSolidity from "../public/interactwithsolidityverifiers.png";
import NoirCode from "../public/noircode.png";

const Features = () => {
  return (
    <section className="bg-black py-14">
      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="text-center md:text-left md:mr-16">
          <h1 className="text-4xl text-white md:text-5xl">Write Noir Code</h1>
        </div>
        <div className="flex items-center justify-center py-14">
          <Image src={NoirCode} alt="Explore Feature Image" className="w-[50%]" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="text-center md:text-left md:mr-16">
          <h1 className="text-4xl text-white md:text-5xl">Interact with the Functions</h1>
        </div>
        <div className="flex items-center justify-center py-14">
          <Image src={InteractNoir} alt="Deploy Feature Image" className="w-[50%]" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="text-center md:text-left md:mr-16">
          <h1 className="text-4xl text-white md:text-5xl">Interact with Solidity Verifiers</h1>
        </div>
        <div className="flex items-center justify-center py-14">
          <Image src={InteractSolidity} alt="Verify Feature Image" className="w-[50%]" />
        </div>
      </div>
    </section>
  );
};

export default Features;
