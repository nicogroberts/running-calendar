import { Calendar } from "./calendar";
import { Activitylog } from "./activitylog";
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
const log = document.getElementById("activity-log");

let isLoaded = false;

const currentDate = new Date();

const runningCalendar = new Calendar(currentDate, calendar);

runningCalendar.displayCurrentDate();

runningCalendar.generateCalendar();

const activityLog = new Activitylog(log);

const fileLoader = new Fileloader();

document.getElementById("open-file").addEventListener("click", async () => {
    isLoaded = await fileLoader.getFile();
    if (!isLoaded) return;

    const activities = fileLoader.getActivities();
    runningCalendar.populateCalendar(activities);
    activityLog.generateActivityLog(activities);

    let totalMinutes = 0;
    let currentBestTime = Infinity;
    activities.forEach((activity, index) => {
        totalMinutes += runningCalendar.toMinutes(activity.getTime());
        yearlyRunCount = index + 1;
        
        const seconds = toSeconds(activity.getPace());

        if (seconds < currentBestTime) {
            currentBestTime = seconds;
        }
    });

    const totalHours = (totalMinutes / 60).toFixed(2);

    yearlyTimeAmount = totalHours;
    yearlyTime.textContent = `${yearlyTimeAmount} hours in the last year`;

    yearlyRuns.textContent = `${yearlyRunCount} runs in the last year`;

    bestPaceTime = toPace(currentBestTime);
    bestPace.textContent = `${bestPaceTime} is the best pace in the last year`;
});

const toSeconds = (time) => {
    const match = time.match(/^(\d+)'(\d+)"$/);

    if (!match) return 0;

    return Number(match[1]) * 60 + Number(match[2]);
};

const toPace = (time) => {
    if(!isFinite(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${String(seconds).padStart(2,"0")}`;
}