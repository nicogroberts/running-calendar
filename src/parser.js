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
            }

            if (trimmedLine.startsWith("- Time:")) {
                // Get time check for HH:MM:SS format or MM:SS format
            }

            if (trimmedLine.startsWith("- Pace:")) {
                // Get pace
            }
        });
    };

    getResults() {
        return this.results;
    }
}

export { Parser };