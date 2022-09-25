"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = require("fs");
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = __importDefault(require("path"));
void (() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(chalk_1.default.blueBright(`    ________    _______  ____  __
    / ____/ /   / ____/ |/ /\\ \/  \/
   / /_  / /   / __/  |   /  \\  /
  / __/ / /___/ /___ /   |   / /
 /_/   /_____/_____//_/|_|  /_/`));
    const moduleJsonPath = path_1.default.resolve(__dirname, '../package.json');
    const packageJson = JSON.parse(String((0, fs_1.readFileSync)(moduleJsonPath)));
    console.log(chalk_1.default.blueBright(`\nWelcome to Flexy CLI! (${packageJson.version})`));
    console.log(chalk_1.default.blueBright(`Please type figma token to continue.\n`));
    console.log(chalk_1.default.blueBright(`You can get your token here:`));
    console.log(chalk_1.default.bgBlueBright(` https://www.figma.com/developers/api#access-tokens \n`));
    console.log(chalk_1.default.blueBright(`Click on the link above and click (and copy)
on the ${chalk_1.default.bgBlueBright(' + Get personal access token ')}\n`));
    const { personalAccessToken } = yield inquirer_1.default.prompt([
        {
            type: 'password',
            name: 'personalAccessToken',
            message: 'Figma token:'
        }
    ]);
    const { betaTesterToken } = yield inquirer_1.default.prompt([
        {
            type: 'password',
            name: 'betaTesterToken',
            message: 'Beta Tester Token:'
        }
    ]);
    (0, fs_1.writeFileSync)(path_1.default.join(process.cwd(), 'flexy.secret.json'), JSON.stringify({
        personalAccessToken,
        betaTesterToken
    }, null, 2));
    console.log(chalk_1.default.blueBright(`\nSuccess! You can now use the ${chalk_1.default.bgBlueBright(' npx flexy-init ')} command.\n`));
}))();
