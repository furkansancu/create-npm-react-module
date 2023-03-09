import fs from 'fs';

const diskMenager = {
    cleanFolder: async (path) => {
        try { await fs.promises.rmdir(path); } catch (e) { };
        try { await fs.promises.mkdir(path); } catch (e) { };
    },

    copyFiles: async (source, dest) => {
        try { await fs.promises.cp(source, dest, {recursive: true}); } catch (e) { };
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