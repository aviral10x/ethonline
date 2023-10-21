import { writeFile } from "fs/promises";
import { join } from "path";

export default async function handler(req, res) {
  try {
    const { fileName, content } = req.body;

    if (!fileName || !content) {
      res.status(400).json({ error: "Missing fileName or content parameters" });
      return;
    }

    const filePath = join(__dirname, `./circuits/${fileName}/src/main.nr`);

    // Write the new content to the file
    await writeFile(filePath, content, "utf-8");

    res.status(200).json({ message: "File saved successfully" });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
}
