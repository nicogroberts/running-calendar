/**
 * A class defining a log message object
 */
class Logmessage {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("log-message");
        this.logHeading = document.createElement("div");
        this.logHeading.classList.add("log-heading");
        this.element.appendChild(this.logHeading);
        this.messageInfo = document.createElement("div");
        this.messageInfo.classList.add("message-info");
        this.element.appendChild(this.messageInfo);
    }

    setHeading(text) {
        this.logHeading.textContent = text;
    };

    setMessageInfo(text) {
        this.messageInfo.textContent = text;
    };
}

export { Logmessage };