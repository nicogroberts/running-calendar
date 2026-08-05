/**
 * A class defining a activity log object
 */
class Activitylog {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.logHeading = document.createElement("div");
        this.logHeading.classList.add("log-heading");
        this.logHeading.textContent = "Running activity";
        this.parentElement.appendChild(this.logHeading);
    }

    generateActivityLog(activities) {
        activities.reverse().array.forEach((activity, index) => {
            
        });
    };
}

export { Activitylog };