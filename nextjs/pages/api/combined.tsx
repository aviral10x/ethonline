import { exec } from "child_process";
import { readFile, writeFile } from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { fileName, content } = req.body;

    if (!fileName) {
      res.status(400).json({ error: "Missing fileName parameter" });
      return;
    }

    // Check if content is provided; if so, save the file
    if (content !== undefined) {
      const filePath = `./circuits/${fileName}/src/main.nr`;

      // Write the new content to the file
      await writeFile(filePath, content, "utf-8");

      res.status(200).json({ message: "File saved successfully" });
    } else {
      // Content is not provided, run the nargo new command
      exec(`nargo new circuits/${fileName}`, async (error, stdout, stderr) => {
        if (error || stderr) {
          console.error(`Error: ${error || stderr}`);
          res.status(500).json({ error: "Compilation failed" });
          return;
        }

        console.log(`Compilation successful:\n${stdout}`);

        try {
          // Read the content of the created file
          const fileContent = await readFile(`./circuits/${fileName}/src/main.nr`, "utf-8");

          res.status(200).json({
            message: "Compilation successful",
            output: stdout,
            fileContent,
          });
        } catch (readFileError: any) {
          console.error(`Error reading file: ${readFileError.message}`);
          res.status(500).json({ error: "Error reading file" });
        }
      });
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
}
