function initPayroll() {
    payroll = [];
    document.getElementById("numberOfEmployees").value = payroll.length;
    document.getElementById("payroll").innerHTML = "";
}

document.getElementById("clearPayroll").addEventListener("click", function () {
    document.getElementById("dlgmsg").innerHTML = "Delete all records?";
    document.getElementById("dlgConfirmCancel").showModal();
});

document.getElementById("addPayroll").addEventListener("click", function addToPayroll() {
    var payrollEmployees = {
        employee: "1",
        days: 0,
        rate: 0,
        deduction: 0,
        grossPay: function () {
            return Math.round(this.days * this.rate * 100) / 100;
        },
        netPay: function () {
            return Math.round((this.grossPay() - this.deduction) * 100) / 100;
        },
    };

    payrollEmployees.employee = document.getElementById("employeeName").value;
    payrollEmployees.days = document.getElementById("daysWorked").value * 1;
    payrollEmployees.rate = document.getElementById("dailyRate").value * 1;
    payrollEmployees.deduction = document.getElementById("deductionAmount").value * 1;

    payroll.push(payrollEmployees);
    document.getElementById("numberOfEmployees").value = payroll.length;

    showpayroll();
});

document.getElementById("daysWorked").addEventListener("keyup", ()=> {
    computePay();
});

document.getElementById("dailyRate").addEventListener("keyup", ()=> {
    computePay();
});

document.getElementById("deductionAmount").addEventListener("keyup", ()=> {
    computePay();
});

function computePay() {
    var days, rate, deduction, grossPay, netPay;

    days = document.getElementById("daysWorked").value * 1;
    rate = document.getElementById("dailyRate").value * 1;
    deduction = document.getElementById("deductionAmount").value * 1;

    grossPay = days * rate;
    netPay = grossPay - deduction;

    document.getElementById("grossPay").value = grossPay;
    document.getElementById("netPay").value = netPay;
}

document.getElementById("delete").addEventListener("click", function () {
    var employeeNo = document.getElementById("delEmployee").value;

    // Check if the employee number is valid
    if (employeeNo > 0 && employeeNo <= payroll.length) {
        // Show the delete confirmation modal
        document.getElementById("dlgDeleteMsg").innerHTML = "Delete employee no. " + employeeNo + "?";
        document.getElementById("dlgDeleteConfirm").showModal();

        // Handle the close event for delete confirmation modal
        document.getElementById("dlgDeleteConfirm").addEventListener("close", function (e) {
            if (e.target.returnValue === "confirm") {
                // Remove the employee from the payroll array based on employee number
                payroll.splice(employeeNo - 1, 1); // Remove only that employee

                // Update the number of employees
                document.getElementById("numberOfEmployees").value = payroll.length;

                // Re-display the payroll table
                showpayroll();
            }
        }, { once: true });  // Make sure the event listener runs only once
    } else {
        // Handle invalid employee number (not in range)
        alert("Invalid employee number!");
    }
});

document.getElementById("dlgConfirmCancel").addEventListener("close", function (e) {
    if (e.target.returnValue === "confirm") {
        // Show second confirmation modal
        document.getElementById("dlgAreYouSure").showModal();
    }
});

document.getElementById("dlgAreYouSure").addEventListener("close", function (e) {
    if (e.target.returnValue === "yes") {
        payroll = [];  // Clear payroll array
        document.getElementById("numberOfEmployees").value = payroll.length; // Update number of employees
        showpayroll(); // Re-display payroll table
    }
});

function showpayroll() {
    var i, totalgrossPay, totalnetPay;
    var tHeader, tBody, tFooter;

    // Table Header
    tHeader = "<thead>";
    tHeader += "<tr>";
    tHeader += "<th>No.</th>";
    tHeader += "<th>Employee Name</th>";
    tHeader += "<th>Days Worked</th>";
    tHeader += "<th>Daily Rate</th>";
    tHeader += "<th>Gross Pay</th>";
    tHeader += "<th>Deduction Amount</th>";
    tHeader += "<th>Net Pay</th>";
    tHeader += "</tr>";
    tHeader += "</thead>";

    // Table Body
    var l = payroll.length;
    for (i = 0, totalgrossPay = 0, totalnetPay = 0, tBody = ""; i < l; i++) {
        tBody +=
            "<tr>" +
            "<td>" +
            (i + 1) +
            "</td>" +
            "<td>" +
            payroll[i].employee +
            "</td>" +
            "<td>" +
            payroll[i].days +
            "</td>" +
            "<td>" +
            payroll[i].rate +
            "</td>" +
            "<td>" +
            payroll[i].grossPay() +
            "</td>" +
            "<td>" +
            payroll[i].deduction +
            "</td>" +
            "<td>" +
            payroll[i].netPay() +
            "</td>" +
            "</tr>";
        totalgrossPay += payroll[i].grossPay();
        totalnetPay += payroll[i].netPay();
    }

    // Table Footer
    tFooter = "<tfoot>";
    tFooter += "<tr>";
    tFooter += "<th></th>";
    tFooter += "<th>Employees</th>";
    tFooter += "<th></th>";
    tFooter += "<th>Total Gross Pay</th>";
    tFooter += "<th>" + totalgrossPay + "</th>";
    tFooter += "<th>Total Net Pay</th>";
    tFooter += "<th>" + totalnetPay + "</th>";
    tFooter += "</tr>";
    tFooter += "</tfoot>";

    document.getElementById("payroll").innerHTML = "<table>" + tHeader + tBody + tFooter + "</table>";
}

var payroll = [];