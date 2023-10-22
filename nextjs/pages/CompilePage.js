import React, { useEffect, useReducer, useRef, useState } from "react";
// import circuits from "../circuits/";
import Editor, { Monaco, loader } from "@monaco-editor/react";
import { readFile } from "fs/promises";

const CompilePage = () => {
  // console.log(props);
  // const [code, setCode] = useState("");
  const [codeName, setCodeName] = useState("");
  // const [filePath, setFilePath] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const [editorContent, setEditorContent] = useState("");

  const [fileContent, setFileContent] = useState("");
  const [newFileContent, setNewFileContent] = useState("");

  const [compileContent, setCompileFileContent] = useState("");
  const [verifyContent, setVerifyFileContent] = useState("");

  // const editorRef = useRef("");
  // console.log(editorRef);

  // function handleEditorDidMount(editor, monaco) {
  //   // here is the editor instance
  //   // you can store it in `useRef` for further usage
  //   editorRef.current = editor;
  //   console.log(editor);
  // }

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

  async function handleSolidityCompile() {
    try {
      const response = await fetch(`/api/compileAndExportSol`);
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        const data = await response.json();
        console.error(`Export failed: ${data.error}`);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  const handleSave = async fileName => {
    try {
      setIsSaving(true);

      const content = editorContent;
      console.log(typeof content);

      const response = await fetch(`/api/saveFile?fileName=${fileName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName,
          content,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Save failed: ${data.error}`);
      }

      console.log(data.message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="w-full p-4">
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
              // onMount={handleEditorDidMount}
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
        onClick={handleSolidityCompile}
      >
        Compile Solidity Code
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handleSave}
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Changes"}
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
        Upload to IPFS{" "}
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
