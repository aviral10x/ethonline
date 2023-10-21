// // pages/api/createFolders.js
// import { exec } from "child_process";
// import { readFile } from "fs/promises";
// // Using fs.promises for asynchronous file reading
// export default async function handler(req, res) {
//   try {
//     exec("nargo new circuits/$@", async (error, stdout, stderr) => {
//       if (error || stderr) {
//         console.error(`Error: ${error || stderr}`);
//         res.status(500).json({ error: "Compilation failed" });
//         return;
//       }
//       console.log(`Compilation successful:\n${stdout}`);
//       try {
//         // Read the content of the created file
//         // const fileContent = await readFile("./Nargo.toml", "utf-8");
//         res.status(200).json({
//           message: "Compilation successful",
//           output: stdout,
//           //   fileContent,
//         });
//       } catch (readFileError) {
//         console.error(`Error reading file: ${readFileError.message}`);
//         res.status(500).json({ error: "Error reading file" });
//       }
//     });
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }
// pages/api/createFolders.js
import { exec } from "child_process";
import { readFile } from "fs/promises";

export default async function handler(req, res) {
  try {
    const fileName = req.query.fileName;

    if (!fileName) {
      res.status(400).json({ error: "Missing fileName parameter" });
      return;
    }

    exec(`nargo new circuits/${fileName}`, async (error, stdout, stderr) => {
      if (error || stderr) {
        console.error(`Error: ${error || stderr}`);
        res.status(500).json({ error: "Compilation failed" });
        return;
      }

      console.log(`Compilation successful:\n${stdout}`);

      try {
        // Read the content of the created file
        // const fileContent = await readFile("./Nargo.toml", "utf-8");
        const fileContent = await readFile(`./circuits/${fileName}/src/main.nr`, "utf-8");

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
