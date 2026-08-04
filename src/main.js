import { Calendar } from "./calendar";
import { Fileloader } from "./fileloader";

let yearlyRunCount = 0;
let yearlyTimeAmount = 0;
let bestPaceTime = "00:00";
const yearlyRuns = document.getElementById("yearly-runs");
yearlyRuns.textContent = `${yearlyRunCount} runs in the last year`;
const yearlyTime = document.getElementById("yearly-time");
yearlyTime.textContent = `${yearlyTimeAmount} hours in the last year`;
const bestPace = document.getElementById("best-pace");
bestPace.textContent = `${bestPaceTime} is the best pace in the last year`;
const calendar = document.getElementById("calendar");

const currentDate = new Date();

const runningCalendar = new Calendar(currentDate, calendar);

runningCalendar.displayCurrentDate();

runningCalendar.generateCalendar();

const fileLoader = new Fileloader();

document.getElementById("open-file").addEventListener("click", async () => {
    await fileLoader.getFile();
    const activities = fileLoader.getActivities();
    runningCalendar.populateCalendar(activities);
});