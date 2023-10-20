// export default async function handler(req, res) {
//   // await corsMiddleware(req, res);

//   try {
//     const { exec } = require("child_process");
//     exec("nargo codegen-verifier", (error, stdout, stderr) => {
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

import { exec } from "child_process";
import { readFile } from "fs/promises"; // Using fs.promises for asynchronous file reading

export default async function handler(req, res) {
  try {
    exec("nargo codegen-verifier", async (error, stdout, stderr) => {
      if (error || stderr) {
        console.error(`Error: ${error || stderr}`);
        res.status(500).json({ error: "Compilation failed" });
        return;
      }

      console.log(`Compilation successful:\n${stdout}`);

      try {
        // Read the content of the created file
        const fileContent = await readFile(
          "./contract/frontend/plonk_vk.sol",
          "utf-8"
        );

        res.status(200).json({
          message: "Compilation successful",
          output: stdout,
          fileContent,
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
