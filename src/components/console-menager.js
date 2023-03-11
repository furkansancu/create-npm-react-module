import chalk from 'chalk';
import packagejson from '../../package.json';

const { red, whiteBright, yellow, green } = chalk;

const errorCodes = {
    "project_name_undefined": {
        "title": red("ERR:"),
        "description": `${whiteBright("Project name can't left blank, please enter a project name.")} ${yellow("(npx create-npm-react-module [project-name])")}`
    },

    "copying_failed": error_desc => {
        return {
            "title": red("ERR:"),
            "description": `${whiteBright("Creating source files process failed, you might want to file an issue on https://github.com/furkansancu/create-npm-react-module/issues/new")}\n${red("ERROR-DESC:")}${yellow(error_desc)}`
        }
    }
}

const infoCodes = {
    "greeting": {
        "message": `${yellow("~")} ${green(`Welcome to create-npm-react-module v${packagejson.version}`)} ${yellow("~")}`
    },

    "creating_folder": props => {
        return { "message": `👷 ${whiteBright("Creating your project at:")} ${yellow("~/" + props[0])}` }
    },

    "installing_dependencies": {
        "message": `📦 ${whiteBright("Installing dependencies, this may take minutes...")}`
    },

    "quickstart_commands": props => {
        return {
            "message": `${whiteBright("Your project successfuly created.")}\n${whiteBright("These are the useful commands:")}\n\n    ${yellow(`${props[0][0]} start`)}\n      ${whiteBright(`Starts the preview app for your component.`)}\n    ${yellow(`${props[0][0]} build`)}\n      ${whiteBright(`Builds distribution file to ${yellow('dist/')} folder.`)}\n`
        }
    },

    "quickstart_files": {
        "message": `${whiteBright("In your work environment these are the main entry points:")}\n\n    ${yellow(`src/index.js`)}\n      ${whiteBright(`This is the entry point for your component.\n      Whatever you export will be your package.`)}\n    ${yellow(`preview/index.js`)}\n      ${whiteBright('This is the preview app entry point.')}\n`
    },

    "quickstart_start": props => {
        return {
            "message": `${whiteBright("Now you can start your react preview app by:")}\n\n    ${yellow(`cd ${props[0]}/`)}\n    ${yellow(`${props[1][0]} start`)}\n`
        }
    },
}

const consoleMenager = {
    error (code, kill = false, props) {
        let value;
        value = props != undefined ? errorCodes[code](props) : errorCodes[code];
        console.log(`${value.title} ${value.description}`);

        if (kill) process.exit();
    },

    info (code, props) {
        let value;
        value = props != undefined ? infoCodes[code](props) : infoCodes[code];
        console.log(value.message);
    },

    space (lines = 1) {
        const spaces = Array(lines - 1).fill("\n").join(' ');
        console.log(spaces);
    }
};

export default consoleMenager;