import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import { copyConfigFile, fileExists } from "./utils";

class Tsconfig extends Command {
  static description = "describe the command here";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
    target: flags.string({ char: "t", default: "node", options: ["node"] }),
  };

  static args = [];

  async run() {
    let confirm;
    const { flags } = this.parse(Tsconfig);

    if (fileExists() && !flags.force) {
      confirm = await cli.confirm("Exists, overwrite ");
    }

    if (fileExists() && !confirm) {
      this.log("Canceled");
    }

    if (!fileExists() || confirm) {
      copyConfigFile();
      this.log("File has been copied");
    }
  }
}

export = Tsconfig;
