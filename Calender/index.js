const monthName = document.getElementById("month");
const dayName = document.getElementById("day");
const dateEL = document.getElementById("day-number");
const yearEL = document.getElementById("year");

const date = new Date();

const month = date.getMonth();
monthName.innerText = date.toLocaleString("en",{month:"long"});

dayName.innerText = date.toLocaleString("en",{weekday: "long"});

dateEL.innerText = date.getDate();

yearEL.innerText = date.getFullYear();
