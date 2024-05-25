let today = new Date();
let day = String(today.getDay());
const days = [`MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`];
day = days[day - 1];
const dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth());
const months = [`JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, `JUL`, `AUG`, `SEP`, `OCT`, `NOV`, `DEC`];
mm = months[mm];

today = `${day} ${dd} ${mm}`;

let date = document.querySelector(`.date`);
date.textContent = today;