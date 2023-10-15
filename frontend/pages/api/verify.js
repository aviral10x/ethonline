export default async function handler(req, res) {
  // await corsMiddleware(req, res);

  try {
    const { exec } = require("child_process");
    exec("nargo codegen-verifier", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: "Compilation failed" });
        return;
      }
      if (stderr) {
        console.error(`Error: ${stderr}`);
        res.status(500).json({ error: "Compilation failed" });
        return;
      }
      console.log(`Compilation successful:\n${stdout}`);
      res
        .status(200)
        .json({ message: "Compilation successful", output: stdout });
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
}
