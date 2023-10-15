// pages/CompilePage.js
import { useState } from "react";

const CompilePage = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleCompileClick = async () => {
    try {
      const response = await fetch("/api/compile", {
        method: "POST",
        body: JSON.stringify({ code }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Compilation failed");
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  const handleVerify = async () => {
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify({ code }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Compilation failed");
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Code Compilation</h1>
      <textarea
        className="bg-black"
        value={code}
        onChange={handleCodeChange}
        rows={10}
        cols={50}
      />
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handleCompileClick}
      >
        Initialise Code
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handleCompileClick}
      >
        Compile Code
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handleVerify}
      >
        Verify Code
      </button>
    </div>
  );
};

export default CompilePage;
