import { Activity } from "./activity";

/**
 * A class defining a parser object
 */
class Parser {
    constructor() {
        this.results = [];
    }

    parseFile(text) {
        const lines = text.split(/\r?\n/);
        let date = null;
        let mileage = null;
        let time = null;
        let pace = null;

        lines.forEach(line => {
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith("- Date:")) {
                // Get date
                date = new Date(trimmedLine.replace("- Date:", "").trim() + "T00:00:00");
            }

            if (trimmedLine.startsWith("- Mileage:")) {
                // Get mileage
                mileage = parseFloat(trimmedLine.replace("- Mileage:", ""));
            }

            if (trimmedLine.startsWith("- Time:")) {
                // Get time check for HH:MM:SS format or MM:SS format
                const trimmedTime = trimmedLine.replace("- Time:", "").trim();
                console.log(trimmedTime);
                if (/^\d{1,2}:\d{2}:\d{2}$/.test(trimmedTime)) {
                    const timeMatch = trimmedTime.match(/\d{1,2}:\d{2}:\d{2}/);
                    time = timeMatch ? timeMatch[0] : null;
                } else if (/^\d{1,2}:\d{2}$/.test(trimmedTime)) {
                    const timeMatch = trimmedTime.match(/\d{1,2}:\d{2}/);
                    time = timeMatch ? timeMatch[0] : null;
                }
            }

            if (trimmedLine.startsWith("- Pace:")) {
                // Get pace
                const paceMatch = trimmedLine.match(/\d{1,2}'\d{2}"/);
                pace = paceMatch ? paceMatch[0] : null;
            }

            if (date !== null && mileage !== null && time !== null && pace !== null) {
                const activity = new Activity(date, mileage, time, pace);
                this.results.push(activity);
                date = null;
                mileage = null;
                time = null;
                pace = null;
            }
        });
    };

    getResults() {
        return this.results;
    };

    displayResults() {
        console.log(this.results);
    };
}

export { Parser };