import shellMenager from "./shell-menager";

async function decide (options) {
    const npmCommands = ["npm run", "npm install", "--save-dev"];
    const optionNpm = options.includes("--use-npm");

    if (optionNpm) return npmCommands;

    const yarnCommands = ["yarn", "yarn add", "-D", "yarn"];
    const optionYarn = options.includes("--use-yarn");
    
    if (optionYarn) return yarnCommands;

    if (await shellMenager.checkYarn()) return yarnCommands; else return npmCommands;
}

const packageMenager = { decide };

export default packageMenager;