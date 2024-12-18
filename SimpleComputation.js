document.getElementById("ClearValuesCelsius").addEventListener("click", () => {
    document.getElementById("Celsius").value = '';
    document.getElementById("CFahrenheit").value = '';
});

document.getElementById("ClearValuesFahrenheit").addEventListener("click", () => {
    document.getElementById("Fahrenheit").value = '';
    document.getElementById("FCelsius").value = '';
});

document.getElementById("ClearValuesMeters").addEventListener("click", () => {
    document.getElementById("Meters").value = '';
    document.getElementById("MFeet").value = '';
});

document.getElementById("ClearValuesFeet").addEventListener("click", () => {
    document.getElementById("Feet").value = '';
    document.getElementById("FMeters").value = '';
});

document.getElementById("ComputeCelsius").addEventListener("click", () => {
    var c1, f1;

    c1 = document.getElementById("Celsius").value * 1;
    f1 = c1 * (9 / 5) + 32;
    document.getElementById("CFahrenheit").value = f1.toFixed(2);
});

document.getElementById("ComputeFahrenheit").addEventListener("click", () => {
    var f2, c2;

    f2 = document.getElementById("Fahrenheit").value * 1;
    c2 = (f2 - 32) * (5 / 9);
    document.getElementById("FCelsius").value = c2.toFixed(2);
});

document.getElementById("ComputeMeters").addEventListener("click", () => {
    var m1, ft1;

    m1 = document.getElementById("Meters").value * 1;
    ft1 = m1 * 3.28084;
    document.getElementById("MFeet").value = ft1.toFixed(4);
});

document.getElementById("ComputeFeet").addEventListener("click", () => {
    var ft2, m2;

    ft2 = document.getElementById("Feet").value * 1;
    m2 = ft2 / 3.28084;
    document.getElementById("FMeters").value = m2.toFixed(4);
});