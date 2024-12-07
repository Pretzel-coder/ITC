document.getElementById("clearValues").addEventListener("click", ()=> {
    document.getElementById("taxableIncome").value = '';
    document.getElementById("incomeTax").value = '';
});

document.getElementById("taxableIncome").addEventListener("keyup", ()=> {
    var taxableIncome, incomeTax;

    taxableIncome = document.getElementById("taxableIncome").value * 1;

    if (taxableIncome <= 250000)
        incomeTax = 0;
    else if (taxableIncome <= 400000)
        incomeTax = (taxableIncome - 250000) * 0.2;
    else if (taxableIncome <= 800000)
        incomeTax = (taxableIncome - 400000) * 0.25 + 30000;
    else if (taxableIncome <= 2000000)
        incomeTax = (taxableIncome - 800000) * 0.3 + 130000;
    else if (taxableIncome <= 8000000)
        incomeTax = (taxableIncome - 2000000) * 0.32 + 490000;
    else
        incomeTax = (taxableIncome - 8000000) * 0.35 + 2410000;

    document.getElementById("incomeTax").value = incomeTax.toFixed(2);
});