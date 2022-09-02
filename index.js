import Time from './time.js';
// let christmas = new Time('December 25, 2021');
let christmas = new Time([2022, 11, 1], {
    days: [
        "Sun",
        "Mon",
        "Tues",
        "Wednes",
        "Thurs",
        "Fri",
        "Satur",
    ]
});

// Get some details

let day = christmas.getDay();
let month = christmas.getMonth();
console.log(day, month);

// Modify the date
christmas.addDays(7);
christmas.addYears(1);
console.log(christmas);