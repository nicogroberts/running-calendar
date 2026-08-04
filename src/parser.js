/**
 * A class defining a parser object
 */
class Parser {
    constructor() {
        this.results = [];
    }

    parseFile(text) {
        const lines = text.split(/\r?\n/);

        lines.forEach(line => {
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith("- Date:")) {
                // Get date
            }

            if (trimmedLine.startsWith("- Mileage:")) {
                // Get mileage
                const mileage = parseFloat(trimmedLine.replace("- Mileage:", ""));
            }

            if (trimmedLine.startsWith("- Time:")) {
                // Get time check for HH:MM:SS format or MM:SS format
                const trimmedTime = trimmedLine.replace("- Time:", "").trim();
                console.log(trimmedTime);
                if (/^\d{1,2}:\d{2}:\d{2}$/.test(trimmedTime)) {
                    const timeMatch = trimmedTime.match(/\d{1,2}:\d{2}:\d{2}/);
                    const time = timeMatch ? timeMatch[0] : null;
                    console.log(time);
                } else if (/^\d{1,2}:\d{2}$/.test(trimmedTime)) {
                    const timeMatch = trimmedTime.match(/\d{1,2}:\d{2}/);
                    const time = timeMatch ? timeMatch[0] : null;
                    console.log(time);
                }
            }

            if (trimmedLine.startsWith("- Pace:")) {
                // Get pace
                const paceMatch = trimmedLine.match(/\d{1,2}'\d{2}"/);
                const pace = paceMatch ? paceMatch[0] : null;
            }
        });
    };

    getResults() {
        return this.results;
    }
}

export { Parser };