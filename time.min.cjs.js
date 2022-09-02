/*! Time v1.0.0 | A small library | Copyright 2022 | MIT license */
'use strict';

// constructor pattern
// not modern classes but old constructor approach
function Constructor(d, options = {}) {
    if (!Array.isArray(d)) {
        this.date = new Date(d);
    }
    let settings = Object.assign({
        "days": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]
    }, options);
    Object.freeze(settings);

    Object.defineProperties(this, {
        date: { value: new Date(...d) },
        settings: { value: settings }
    });

}
/**
 * Get the day of the week
 * @param  {Date}   date  The date object
 * @return {String}       The day of the week
 */
Constructor.prototype.getDay = function(date) {

    return this.settings.days[this.date.getDay()];
};

/**
 * Get the month of the year
 * @param  {Date}   date  The date object
 * @return {String}       The month of the year
 */
Constructor.prototype.getMonth = function() {

    return this.settings.months[this.date.getMonth()];
};

/**
 * Add days to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of days to add
 */
Constructor.prototype.addDays = function(n) {
    this.date.setDate(this.date.getDate() + n);
};

/**
 * Add months to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of months to add
 */
Constructor.prototype.addMonths = function(n) {
    this.date.setMonth(this.date.getMonth() + n);
};

/**
 * Add years to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of years to add
 */
Constructor.prototype.addYears = function(n) {
    this.date.setFullYear(this.date.getFullYear() + n);
};

module.exports = Constructor;
