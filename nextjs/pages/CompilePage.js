import React, { useEffect, useReducer, useRef, useState } from "react";
import Editor, { Monaco, loader } from "@monaco-editor/react";

const CompilePage = () => {
  // console.log(props);
  const [code, setCode] = useState("");
  // const [output, setOutput] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [compileContent, setCompileFileContent] = useState("");
  const [verifyContent, setVerifyFileContent] = useState("");

  function handleEditorChange(value, event) {
    console.log(value);
  }

  const handleInitialise = async () => {
    try {
      // const response = await fetch("/api/initialise", {
      //   method: "POST",
      //   body: JSON.stringify({ code }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const response = await fetch("/api/initialise");
      const data = await response.json();

      // setOutput(data.output);
      setFileContent(data.fileContent);

      if (!response.ok) {
        throw new Error("Compilation failed");
      }

      // const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  const handleCompileClick = async () => {
    try {
      // const response = await fetch("/api/compile", {
      //   method: "POST",
      //   body: JSON.stringify({ code }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const response = await fetch("/api/compile");
      const data = await response.json();

      setCompileFileContent(data.fileContent);

      if (!response.ok) {
        throw new Error("Compilation failed");
      }

      // const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  const handleVerify = async () => {
    try {
      // const response = await fetch("/api/verify", {
      //   method: "POST",
      //   body: JSON.stringify({ code }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const response = await fetch("/api/verify");
      const data = await response.json();

      setVerifyFileContent(data.fileContent);

      if (!response.ok) {
        throw new Error("Compilation failed");
      }

      // const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  async function handleSolidityCompile() {
    if (!sourceCode) {
      toast({
        title: "No source code",
        description: "You need to provide source code to perform compilation!!!",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      // console.log("no Source code set");
      return;
    }

    /// For proper handling we can change the API call format
    const response = await fetch("./api/compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sourceCode }),
    });

    console.log(response);
    const formattedResponse = (await response.json()).output;
    // console.log(formattedResponse, "formatted response");

    if (response.status == 200) {
      // setOutput(formattedResponse);
      toast({
        title: "Compilation successfull",
        description: "Your code was compiled succesfully, You can deploy your contract now.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      // console.log("Successfully Compiled");
      setError("Successfully Compiled");
      /// analyze the ABI and show const
      handleABI(formattedResponse.abi);

      setCompiled(true);
    } else {
      setError(formattedResponse);
      toast({
        title: "Compilation error",
        description: `${formattedResponse}`,
        status: "error",
        duration: 2700,
        isClosable: true,
      });
    }
  }

  return (
    <div>
      <div className="flex">
        {/* Left column with file list */}
        <div className="w-1/5 p-4 bg-gray-200">
          <h3 className="text-xl text-black font-bold mb-4">File List</h3>
          <ul>
            <li className="cursor-pointer mb-2 hover:underline">{fileContent}</li>
            <li className="cursor-pointer mb-2 hover:underline">{compileContent}</li>
            <li className="cursor-pointer mb-2 hover:underline">{verifyContent}</li>
          </ul>
        </div>

        {/* Right column with Monaco Editor */}
        <div className="w-4/5 p-4">
          <h3 className="text-xl font-bold mb-4"></h3>
          <div>
            <Editor
              height="50vh"
              defaultValue="//test"
              defaultLanguage="rust"
              theme="vs-dark"
              onChange={handleEditorChange}
            />
          </div>
        </div>
      </div>

      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handleInitialise}
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handleSolidityCompile}
      >
        Compile Solidity Code
      </button>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/initialise");
//   let myprops = await data.json();
//   return {
//     props: { myprops },
//   };
// }

export default CompilePage;
