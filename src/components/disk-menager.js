import fs from 'fs';
import path from 'path';
import consoleMenager from './console-menager';

const diskMenager = {
    cleanFolder: async (path) => {
        try { await fs.promises.rm(path, { recursive: true, force: true }); } catch (e) { };
        try { await fs.promises.mkdir(path); } catch (e) { };
    },

    copyFiles: async (source, dest) => {
        try { 
            await fs.promises.cp(source, dest, {recursive: true});
            await diskMenager.nameFiles(dest);
        } catch (e) {
            consoleMenager.error("copying_failed", true, e);
        };

    },

    nameFiles: async (dest) => {
        const dirContent = await fs.promises.readdir(dest, {});

        for (const file of dirContent) {
            const oldPath = path.join(dest, file);
            const isFolder = await fs.promises.lstat(oldPath);

            if (isFolder.isDirectory() == true) diskMenager.nameFiles(oldPath);
            
            await fs.promises.rename(oldPath, path.join(dest, file.replace(".example", "")));
        }
    },

    updatePackage: async (path, projectName) => {
        let Package;

        try {
            Package = await fs.promises.readFile(path);
            Package = JSON.parse(Package);
            Package.name = projectName;
            await fs.promises.writeFile(path, JSON.stringify(Package)), {encoding:'utf8',flag:'w'}
        } catch (e) {}
    }
};

export default diskMenager;