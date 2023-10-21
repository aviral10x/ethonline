// const solc = require("solc");
// export default function handler(req, res) {
//   if (!req.body.sourceCode) {
//     return res.status(400).json({ message: "Input required" });
//   }
//   const code = req.body.sourceCode;
//   var input = {
//     language: "Noir",
//     sources: {
//       "file.nr": {
//         content: code,
//       },
//     },
//     settings: {
//       outputSelection: {
//         "*": {
//           "*": ["*"],
//         },
//       },
//     },
//   };
//   var output = JSON.parse(solc.compile(JSON.stringify(input)));
//   //   console.log(output);
//   // Error handling
//   if (output.errors) {
//     // console.log(output.errors);
//     // console.log(output.errors[0].formattedMessage);
//     res.status(400).json({ output: output.errors[0].formattedMessage });
//   }
//   var response;
//   /// getting out the contract file.sol
//   for (var contractName in output.contracts["file.nr"]) {
//     // preparing the response on successFull compilation
//     response = {
//       abi: output.contracts["file.nr"][contractName].abi, /// get the abi
//       bytecode: `0x${output.contracts["file.nr"][contractName].evm.bytecode.object}`, // get the bytecode
//     };
//     res.status(200).json({ output: response });
//   }
// }
// pages/api/compile.js
// import cors from "cors";
// const corsMiddleware = cors();
// export default async function handler(req, res) {
//   // await corsMiddleware(req, res);
//   try {
//     const { exec } = require("child_process");
//     exec("nargo compile", (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error: ${error.message}`);
//         res.status(500).json({ error: "Compilation failed" });
//         return;
//       }
//       if (stderr) {
//         console.error(`Error: ${stderr}`);
//         res.status(500).json({ error: "Compilation failed" });
//         return;
//       }
//       console.log(`Compilation successful:\n${stdout}`);
//       res
//         .status(200)
//         .json({ message: "Compilation successful", output: stdout });
//     });
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }
// // pages/api/createFolders.js
import { exec } from "child_process";
import { readFile } from "fs/promises";

// Using fs.promises for asynchronous file reading

export default async function handler(req, res) {
  try {
    exec("nargo compile", async (error, stdout, stderr) => {
      if (error || stderr) {
        console.error(`Error: ${error || stderr}`);
        res.status(500).json({ error: "Compilation failed" });
        return;
      }

      console.log(`Compilation successful:\n${stdout}`);

      try {
        // Read the content of the created file
        // const fileContent = await readFile("./target/frontend.json", "utf-8");

        res.status(200).json({
          message: "Compilation successful",
          output: stdout,
          //   fileContent,
        });
      } catch (readFileError) {
        console.error(`Error reading file: ${readFileError.message}`);
        res.status(500).json({ error: "Error reading file" });
      }
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
}
