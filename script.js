document.getElementById("convert-btn").addEventListener("click", function () {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unitFrom = document.getElementById("unit-from").value;
    const unitTo = document.getElementById("unit-to").value;

    let convertedTemperature;

    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
    } else if (unitFrom === "celsius" && unitTo === "kelvin") {
        convertedTemperature = temperatureInput + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "celsius") {
        convertedTemperature = temperatureInput - 273.15;
    } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
        convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
        convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
    } else {
        convertedTemperature = temperatureInput; // If same units are selected
    }

    document.getElementById("converted-temperature").textContent = `${convertedTemperature.toFixed(2)} ${unitTo}`;
});
