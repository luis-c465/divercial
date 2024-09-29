let x = [document.getElementById("expenses"), document.getElementById("earnings"), document.getElementById("scholarshipExpenses"), 
    document.getElementById("scholarshipEarnings"), document.getElementById("savings")]

function isNumb(value) {
    const number = parseFloat(value);
    if (isNaN(number)) {
        return false;
    }

    const stringValue = number.toString();
    const decimalIndex = stringValue.indexOf('.');

    if (decimalIndex !== -1) {
        const decimalPlaces = stringValue.length - decimalIndex - 1;
        return decimalPlaces <= 2;
    }
    
    return true;
}



x.forEach((each) => {
        each.value = 0;
        each.onblur = function() {
            if (!isNumb(each.value)) {
                each.value = 0
            }
        }}
)

let cal = document.getElementById("submit")
let output = document.getElementById("answer")
let y;
cal.onclick = function() {
    y = [+(x[0].value), +(x[1].value), +(x[2].value), +(x[3].value), +(x[4].value)]
    let spending = y[0] + (y[2]/4)
    let earnings = y[1] + (y[3]/4)
    let savings = y[4]
    console.log(spending)
    console.log(earnings)
    console.log(savings)
    if (earnings > spending) {
        output.textContent = "Based on your answer, you spend on average " + (spending) + " per week and earn " + (earnings) + " per week."
        if (savings <= spending*12) {
            output.textContent += " You should put " + (earnings - spending) + " into a savings account every week for " + (Math.ceil((spending*12 - savings)/(earnings-spending))) +
            " weeks before investing."
        } else {
            output.textContent += " Congratulations, you have enough money in your savings account to invest in S&P 500. We recommend investing at least 50% of your extra money in S&P 500 by investing " + .5*(earnings-spending) + " every week."
        }
    } else if (earnings < spending) {
        output.innerHTML = "You are going into debt, consider lowering your expenses or increasing your earnings through jobs, internships, or <a href=\"/divercial/scholarships\">Scholarships</a>!"
    } else {
        output.textContent = "You aren't getting any savings, if this is sustainable then keep it this way. Otherwise, try to increase earnings or decrease spending."
    }
}
