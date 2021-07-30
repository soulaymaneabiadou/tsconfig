import * as fs from "fs";
import * as path from "path";

// @ts-ignore
const source = path.join(process.mainModule.path, "../src/tsconfig.json");

const destination = path.join(process.cwd(), "/tsconfig.json");

export const fileExists = () => {
  return fs.existsSync(destination);
};

export const copyConfigFile = () => {
  fs.copyFileSync(source, destination);
};
