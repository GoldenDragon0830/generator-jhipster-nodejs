const commonFiles = {
    global: [
        {
            templates: [
                'README.md',
                {
                    file: 'gitignore',
                    renameTo: () => '.gitignore'
                },
                {
                    file: 'dockerignore',
                    renameTo: () => '.dockerignore'
                },
                'Dockerfile'
            ]
        }
    ]
};

function writeFiles() {
    return {
        overrideFiles() {
            this.protractorTests = true;
            this.writeFilesToDisk(commonFiles, this, false);
        }
    };
}

module.exports = {
    writeFiles
};
