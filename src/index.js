import path from 'path';

import packageMenager from './components/package-menager';
import consoleMenager from './components/console-menager';
import diskMenager from './components/disk-menager';
import shellMenager from './components/shell-menager';

async function createProject () {
    consoleMenager.info("greeting");
    
    const modulePath = path.resolve(__dirname);
    const templateFolder = path.join(modulePath, "../lib/template");

    const projectName = process.argv[2];

    if (projectName == undefined) consoleMenager.error("project_name_undefined", true);

    const projectPath = path.join(process.cwd(), projectName);
    const options = process.argv.slice(3, process.argv.length);
    const packageCommands = await packageMenager.decide(options);

    consoleMenager.space();
    consoleMenager.info("creating_folder", [projectName]);
    await diskMenager.cleanFolder(projectPath);
    await diskMenager.copyFiles(templateFolder, projectPath);
    await diskMenager.updatePackage(`${projectPath}package.json`, projectName);

    consoleMenager.info("installing_dependencies");
    await shellMenager.installDependencies(projectPath, packageCommands);

    consoleMenager.space();
    consoleMenager.info("quickstart_commands", [packageCommands]);
    consoleMenager.info("quickstart_files");
    consoleMenager.info("quickstart_start", [projectName, packageCommands]);
}

createProject();