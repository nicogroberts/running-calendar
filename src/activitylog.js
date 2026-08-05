import { Logmessage } from "./logmessage";

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
        activities.reverse().forEach((activity, index) => {
            const logMessage = new Logmessage();
            this.parentElement.appendChild(logMessage.element);
            if (index >= 3) {
                logMessage.isVisible(false);
            }
            logMessage.setHeading(`Run ${activities.length - index} on ${activity.getDate().toLocaleDateString("en-us")}`);
            logMessage.setMessageInfo(`Mileage: ${activity.getMileage()}\nTime: ${activity.getTime()}\nPace: ${activity.getPace()}`);
            
        });
    };
}

export { Activitylog };