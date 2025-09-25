export function unitConverter() {
    let convertBtn = document.getElementById("convert-btn");
    let inputEL = document.getElementById("unit-input-el");
    let lengthEl = document.getElementById("length-el");
    let volumeEl = document.getElementById("volume-el");
    let massEl = document.getElementById("mass-el");


    // These are conversion factors—fixed values
    // that tell the browser how to convert between metric and imperial units
    const meterToFeet = 3.281;
    const literToGallon = 0.264;
    const kiloToPound = 2.204;


    // Convert Button Event Listener
    convertBtn.addEventListener("click", function() {
        let baseValue = Number(inputEL.value);

        // All calculated result wth template literal
        ///////////////////////////////////////////////
        // Length (Meter/Feet)
        lengthEl.textContent = `
            ${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)}
            feet | ${baseValue}
            feet = ${(baseValue / meterToFeet).toFixed(3)} meters
        `;

        // Volume (Liters/Gallons)
        volumeEl.textContent = `
            ${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)}
            gallons | ${baseValue}
            gallons = ${(baseValue / literToGallon).toFixed(3)} liters
        `;

        // Mass (Kilograms/Pounds)
        massEl.textContent = `
            ${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)}
            pounds | ${baseValue}
            pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos
        `;
    });
}