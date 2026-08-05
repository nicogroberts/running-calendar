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

        this.hiddenMessages = [];

        this.parentElement.appendChild(this.logHeading);
    }

    addToLog(element) {
        this.parentElement.appendChild(element);
    };

    generateActivityLog(activities) {
        activities.reverse().forEach((activity, index) => {
            const logMessage = new Logmessage();
            this.addToLog(logMessage.element);
            if (index >= 3) {
                logMessage.isVisible(false);
                this.hiddenMessages.push(logMessage);
            }
            logMessage.setHeading(`Run ${activities.length - index} on ${activity.getDate().toLocaleDateString("en-us")}`);
            logMessage.setMessageInfo(`Mileage: ${activity.getMileage()}\nTime: ${activity.getTime()}\nPace: ${activity.getPace()}`);
            if (index === activities.length - 1) {
                this.createBtn();
            }
        });
    };

    createBtn() {
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");
        this.addToLog(btnContainer);

        const showMore = document.createElement("button");
        showMore.id = "show-more";
        showMore.textContent = "Show More Activity";
        btnContainer.appendChild(showMore);

        showMore.addEventListener("click", () => {
            this.showMoreActivities();
            showMore.remove();
        });
    }

    showMoreActivities() {
        this.hiddenMessages.forEach(message => {
            message.isVisible(true);
        });

        this.hiddenMessages = [];
    };
}

export { Activitylog };