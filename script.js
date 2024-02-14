const titleDate = document.getElementById("titledate");
let endDtae = new Date("17 Feb 2024 22:00:00");
titleDate.innerText = formatDate(endDtae);

const inputs = document.querySelectorAll("input");

function clock() {
  const now = new Date();
  const diff = (endDtae - now) / 1000;
  console.log("Difference: ", diff);

  if (diff < 0) {
    // Countdown has ended, update endDtae to 3 days plus the current date
    endDtae = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    titleDate.innerText = formatDate(endDtae);
  }

  inputs[0].value = Math.floor(diff / 3600 / 24); //day
  console.log("Day: ", inputs[0].value);

  inputs[1].value = Math.floor(diff / 3600) % 24; // Hours
  console.log("Hours: ", inputs[1].value);
  inputs[2].value = Math.floor(diff / 60) % 60; // Minutes
  console.log("Minutes: ", inputs[2].value);
  inputs[3].value = Math.floor(diff) % 60; // Seconds
  console.log("Seconds: ", inputs[3].value);
}

function formatDate(date) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options).replace(/,/g, "");
}

clock();

setInterval(() => {
  clock();
}, 1000);
