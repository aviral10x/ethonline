import { writeFile } from "fs/promises";
import { join } from "path";

function replacer(key: string, value: any) {
  if (typeof value === "object" && value !== null) {
    if (value instanceof HTMLElement) {
      return "[Circular: HTMLElement]";
    }
    // Add additional checks for other types causing circular references
  }
  return value;
}

export default async function handler(req: any, res: any) {
  try {
    const { fileName, content } = req.body;

    if (!fileName || !content) {
      res.status(400).json({ error: "Missing fileName or content parameters" });
      return;
    }

    const filePath = join(__dirname, `./circuits/${fileName}/src/main.nr`);

    // Write the new content to the file
    await writeFile(filePath, JSON.stringify(content, replacer), "utf-8");

    res.status(200).json({ message: "File saved successfully" });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
}
