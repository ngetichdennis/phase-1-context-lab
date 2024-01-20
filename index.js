/* Your Code Here */
// Function 1: createEmployeeRecord
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function 2: createEmployeeRecords
function createEmployeeRecords(arrOfArrays) {
    return arrOfArrays.map(createEmployeeRecord);
}

// Function 3: createTimeInEvent
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}

// Function 4: createTimeOutEvent
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}

// Function 5: hoursWorkedOnDate
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100; // Convert to hours
}

// Function 6: wagesEarnedOnDate
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

// Function 7: allWagesFor (provided in the challenge)
// No need to implement as it is provided.

// Function 8: findEmployeeByFirstName
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

// Function 9: calculatePayroll
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPay, employee) => totalPay + allWagesFor.call(employee), 0);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

