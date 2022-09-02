// Create a Date() object for Christmas
let christmas = new Date('December 25, 2021');

// Get some details
let day = time.getDay(christmas);
let month = time.getMonth(christmas);
console.log(day, month);

// Modify the date
time.addDays(christmas, 7);
time.addYears(christmas, 1);
console.log(christmas);