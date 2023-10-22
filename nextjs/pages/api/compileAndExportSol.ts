import { exec } from "child_process";
import { readdir } from "fs/promises";
import { resolve } from "path";

const CIRCUITS_FOLDER_PATH = "./circuits";
const VERIFIERS_FOLDER_PATH = "../hardhat/contracts/verifiers";

export default async function handler(req: any, res: any) {
  try {
    console.log("Exporting sol verifiers...");

    const directories = await readdir(CIRCUITS_FOLDER_PATH);

    for (const directory of directories) {
      const circuitPath = resolve(CIRCUITS_FOLDER_PATH, directory);

      try {
        console.log(`Exporting verifier for ${directory}...`);
        await exec("nargo codegen-verifier", { cwd: circuitPath });

        const verifierSourcePath = resolve(circuitPath, "contract", directory, "plonk_vk.sol");
        const verifierDestPath = resolve(VERIFIERS_FOLDER_PATH, `${directory}.sol`);

        await exec(`mv ${verifierSourcePath} ${verifierDestPath}`);
      } catch (error: any) {
        console.error(`Error exporting verifier for ${directory}: ${error.message}`);
        throw new Error("Export failed");
      }
    }

    res.status(200).json({ message: "Sol verifiers exported successfully" });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
}
