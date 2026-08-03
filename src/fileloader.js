/**
 * A class defining a file loader object
 */
class Fileloader {
    constructor() {
        this.activities = [];

    }

    async getFile() {
        try {
            [fileHandle] = await window.showOpenFilePicker();
            if (fileHandle) {
                const file = await fileHandle.getFile();
                const text = await file.text();

                // call to parser
                return true;
            }
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    getActivities() {
        return this.activities;
    };

}

export { Fileloader };