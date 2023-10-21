// import { exec } from "child_process";
// import { readFile, readdir } from "fs/promises";
// import { join } from "path";
// export default async function handler(req, res) {
//   try {
//     exec('for d in circuits/*/; do (cd "$d" && pwd && nargo compile); done', async (error, stdout, stderr) => {
//       if (error || stderr) {
//         console.error(`Error: ${error || stderr}`);
//         res.status(500).json({ error: "Compilation failed" });
//         return;
//       }
//       console.log(`Compilation successful:\n${stdout}`);
//       // try {
//       //   const directories = await readdir("./circuits");
//       //   const fileContents = await Promise.all(
//       //     directories.map(async directory => {
//       //       const filePath = join("./circuits", directory, "target", `${directory}.json`);
//       //       return {
//       //         directory,
//       //         content: await readFile(filePath, "utf-8"),
//       //       };
//       //     }),
//       //   );
//       res.status(200).json({
//         message: "Compilation successful",
//         output: stdout,
//       });
//       // } catch (readFileError) {
//       //   console.error(`Error reading file: ${readFileError.message}`);
//       //   res.status(500).json({ error: "Error reading file" });
//       // }
//     });
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }
// import { exec } from "child_process";
// import { readFile, readdir, writeFile } from "fs/promises";
// import { join, resolve } from "path";
// const TARGET_FILE = "../nextjs/generated/circuits.json";
// const CIRCUITS_FOLDER_PATH = "./circuits";
// function getData(project) {
//   const filePath = `${CIRCUITS_FOLDER_PATH}/${project}/target/${project}.json`;
//   try {
//     console.log("🤓 trying to read:", filePath);
//     const code = JSON.parse(readFile(filePath, "utf8"));
//     return code;
//   } catch (err) {
//     console.error(`❌ error when reading file (${filePath}) with error: ${err.stack}\n`);
//   }
// }
// async function exportAsJson() {
//   const data = {};
//   const circuits = await readdir(CIRCUITS_FOLDER_PATH);
//   for (const name of circuits) {
//     data[name] = getData(name);
//   }
//   writeFile(resolve(TARGET_FILE), JSON.stringify(data, null, 2));
// }
// exportAsJson();
// //for d in circuits/*/; do (cd "$d"; pwd; nargo compile); done
// export default async function handler(req, res) {
//   try {
//     exec("./compile_circuits.sh", async (error, stdout, stderr) => {
//       if (error || stderr) {
//         console.error(`Error: ${error || stderr}`);
//         res.status(500).json({ error: "Compilation failed" });
//         return;
//       }
//       console.log(`Compilation successful:\n${stdout}`);
//       try {
//         await exportAsJson(); // Run TypeScript script to export data as JSON
//         const generatedData = await readFile(resolve(TARGET_FILE), "utf-8");
//         res.status(200).json({
//           message: "Compilation and export successful",
//           output: stdout,
//           generatedData: JSON.parse(generatedData),
//         });
//       } catch (exportError) {
//         console.error(`Error exporting data: ${exportError.message}`);
//         res.status(500).json({ error: "Error exporting data" });
//       }
//     });
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }
import { exec } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { readFile, readdir, writeFile } from "fs/promises";
import { resolve } from "path";

const TARGET_FILE = "../nextjs/generated/circuits.json";
const CIRCUITS_FOLDER_PATH = "./circuits";

function getData(project: string) {
  const filePath = `${CIRCUITS_FOLDER_PATH}/${project}/target/${project}.json`;
  try {
    console.log("🤓 trying to read:", filePath);
    const code = JSON.parse(readFileSync(filePath, "utf8") as string);
    return code;
  } catch (err: any) {
    console.error(`❌ error when reading file (${filePath}) with error: ${err.stack}\n`);
  }
}

async function exportAsJson() {
  const data: any = {};
  const circuits = await readdir(CIRCUITS_FOLDER_PATH);
  for (const name of circuits) {
    data[name] = getData(name);
  }
  writeFileSync(resolve(TARGET_FILE), JSON.stringify(data, null, 1));
}

exportAsJson();

async function compileCircuits() {
  console.log("compiling circuits...");

  const directories = await readdir(CIRCUITS_FOLDER_PATH);

  for (const directory of directories) {
    const circuitPath = resolve(CIRCUITS_FOLDER_PATH, directory);

    try {
      console.log(`Compiling ${directory}...`);
      await exec(`nargo compile`, { cwd: circuitPath });
    } catch (error: any) {
      console.error(`Error compiling ${directory}: ${error.message}`);
      throw new Error("Compilation failed");
    }
  }
}

export default async function handler(req: any, res: any) {
  try {
    await compileCircuits();

    console.log("Compilation successful");

    try {
      await exportAsJson(); // Run TypeScript script to export data as JSON
      const generatedData = await readFile(resolve(TARGET_FILE), "utf-8");

      res.status(200).json({
        message: "Compilation and export successful",
        generatedData: JSON.parse(generatedData),
      });
    } catch (exportError: any) {
      console.error(`Error exporting data: ${exportError.message}`);
      res.status(500).json({ error: "Error exporting data" });
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
}
