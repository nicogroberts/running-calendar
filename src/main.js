import { Calendar } from "./calendar";

let yearlyRunCount = 0;
let yearlyTimeAmount = 0;
let bestPaceTime = "00:00";
const mainSection = document.querySelector("main");
const yearlyRuns = document.getElementById("yearly-runs");
yearlyRuns.textContent = `${yearlyRunCount} runs in the last year`;
const yearlyTime = document.getElementById("yearly-time");
yearlyTime.textContent = `${yearlyTimeAmount} hours in the last year`;
const bestPace = document.getElementById("best-pace");
bestPace.textContent = `${bestPaceTime} is the best pace in the last year`;

const currentDate = new Date();

const runningCalendar = new Calendar(currentDate, mainSection);

runningCalendar.displayCurrentDate();