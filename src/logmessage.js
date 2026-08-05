/**
 * A class defining a log message object
 */
class Logmessage {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("log-message");

        this.messageHeading = document.createElement("div");
        this.messageHeading.classList.add("message-heading");
        this.element.appendChild(this.messageHeading);

        this.messageInfo = document.createElement("div");
        this.messageInfo.classList.add("message-info");
        this.element.appendChild(this.messageInfo);
    }

    setHeading(text) {
        this.messageHeading.textContent = text;
    };

    setMessageInfo(text) {
        this.messageInfo.textContent = text;
    };

    isVisible(flag) {
        if (!flag) {
            this.element.classList.add("hide");
        } else {
            this.element.classList.remove("hide");
        }
    };
}

export { Logmessage };