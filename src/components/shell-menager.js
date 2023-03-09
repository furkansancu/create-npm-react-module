import child_process from 'child_process';

const shellMenager = {
    checkYarn: async () => {
        const execCommand = "yarn --version";
    
        const checkYarnVersion = new Promise(resolve => {
            child_process.exec(execCommand, (error, stdout, stderr) => {
                if (error != null) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            })                
        });
        
        const isYarnExist = await checkYarnVersion;
    
        return isYarnExist;
    },

    installDependencies: async (projectPath, packageCommands) => {
        const devDependencies = [ "webpack", "webpack-cli", "webpack-dev-server", "@babel/core", "@babel/preset-env", "@babel/preset-react", "babel-loader", "html-webpack-plugin", "terser-webpack-plugin", "url-loader", "css-loader", "style-loader", "sass-loader", "sass" ]
        const dependencies = [ "react", "react-dom" ]

        const packageCommand = `${packageCommands[1]} ${devDependencies.join(' ')} ${packageCommands[2]} && ${packageCommands[1]} ${dependencies.join(' ')}`;
        const execCommand = `cd ${projectPath} && ${packageCommand}`;
        
        const shell = new Promise(resolve => {
            child_process.exec(execCommand, (error, stdout, stderr) => {
                if (error != null) { resolve(false); } else { resolve(true); }
            })         
        });

        const shellResult = await shell;
    }
};

export default shellMenager;