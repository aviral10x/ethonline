import React, { useEffect, useReducer, useRef, useState } from "react";
// import circuits from "../circuits/";
import Editor, { Monaco, loader } from "@monaco-editor/react";
import { readFile } from "fs/promises";
import Navbar from "@/components/Navbar";

const CompilePage = () => {
  // console.log(props);
  // const [code, setCode] = useState("");
  // const [codeName, setCodeName] = useState("");
  // const [filePath, setFilePath] = useState("");
  // const [isSaving, setIsSaving] = useState(false);

  const [editorContent, setEditorContent] = useState("");

  const [fileContent, setFileContent] = useState("");
  const [newFileContent, setNewFileContent] = useState("");

  const [compileContent, setCompileFileContent] = useState("");
  const [verifyContent, setVerifyFileContent] = useState("");

  const editorRef = useRef("");
  console.log(editorRef);

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor;
    console.log(editor);
  }

  function handleEditorChange(value, event) {
    // console.log(value);
    setEditorContent(value);
  }

  const handleNew = async () => {
    try {
      // Prompt the user for a file name (you can use any UI component for this)
      const fileName = prompt("Enter a file name:");
      // setCodeName(fileName);
      if (!fileName) {
        console.error("File name cannot be empty");
        return;
      }

      // Make the API request with the user-provided file name
      const response = await fetch(`/api/new?fileName=${fileName}`);
      const data = await response.json();

      // const newFilePath = `./circuits/${fileName}/src/main.nr`;

      // const content = await readFile(newFilePath, "utf-8");
      // setNewFileContent(content);
      // console.log(content);

      // Handle the response
      if (!response.ok) {
        throw new Error(`Compilation failed: ${data.error}`);
      }
      setEditorContent(data.fileContent);

      // Set the file path dynamically

      // Log the message or perform other actions as needed
      console.log(data.message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  // Use useEffect to set file content in the editor after the component has rendered
  // useEffect(() => {
  //   const fetchNewFileContent = async () => {
  //     try {
  //       // Read the file content using fs/promises

  //       const newFilePath = `../circuits/${fileName}/src/main.nr`;

  //       const content = await readFile(newFilePath, "utf-8");
  //       setNewFileContent(content);
  //     } catch (error) {
  //       console.error("Error reading file:", error.message);
  //     }
  //   };

  //   fetchNewFileContent();
  // }, [newFilePath]);

  // const handleInitialise = async () => {
  //   try {
  //     // const response = await fetch("/api/initialise", {
  //     //   method: "POST",
  //     //   body: JSON.stringify({ code }),
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // });
  //     const response = await fetch("/api/initialise");
  //     const data = await response.json();

  //     // setOutput(data.output);
  //     setFileContent(data.fileContent);

  //     if (!response.ok) {
  //       throw new Error("Compilation failed");
  //     }

  //     // const data = await response.json();
  //     console.log(data.message);
  //   } catch (error) {
  //     console.error(`Error: ${error.message}`);
  //   }
  // };

  const handleCompileClick = async () => {
    try {
      // const response = await fetch("/api/compile", {
      //   method: "POST",
      //   body: JSON.stringify({ code }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const response = await fetch("/api/compileAndExport");
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

  // const handleSave = async () => {
  //   try {
  //     setIsSaving(true);

  //     // Prompt the user for a file name
  //     const fileName = codeName;
  //     console.log(fileName);

  //     if (!fileName) {
  //       console.error("File name cannot be empty");
  //       return;
  //     }

  //     // Prompt the user for content
  //     const content = editorContent;
  //     console.log(content);

  //     if (content === null) {
  //       // The user clicked "Cancel"
  //       console.log("Content input canceled");
  //       return;
  //     }

  //     // Make the API request to save the content to the main.nr file
  //     const response = await fetch("/api/saveFile", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         fileName,
  //         content,
  //       }),
  //     });

  //     const data = await response.json();

  //     // Check for errors in the API response
  //     if (!response.ok) {
  //       throw new Error(`Save failed: ${data.error}`);
  //     }

  //     console.log(data.message);
  //   } catch (error) {
  //     console.error(`Error: ${error.message}`);
  //   } finally {
  //     setIsSaving(false);
  //   }
  // };

  return (
    <div>
      <Navbar />
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
              // ref={input}
              height="50vh"
              path="./circuits/nn/src/main.nr"
              defaultLanguage="rust"
              theme="vs-dark"
              onChange={handleEditorChange}
              defaultValue={newFileContent}
              onMount={handleEditorDidMount}
              value={editorContent}
            />
          </div>
        </div>
      </div>

      <br />
      {/* <form onSubmit={handleSubmit}>
        <label>
          File Name:
          <input type="text" value={fileName} onChange={e => setFileName(e.target.value)} />
        </label>
        <button type="submit">Create Folders</button>
      </form> */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={handleNew}>
        New Noir Code
      </button>
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handleInitialise}
      >
        Initialise Code
      </button> */}
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
      {/* <button onClick={handleSave} disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Changes"}
      </button> */}
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
