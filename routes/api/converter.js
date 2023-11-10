const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Need a POST request plz!");
});

router.post("/", async (req, res) => {
    const { type, value } = req.body;

    if (type) {
        let result;
        let conversionType;

        switch (type.toLowerCase()) {
            case "m2ft":
                result = parseFloat(value) * 3.28084;
                conversionType = "Meters to Feet";
                break;
            case "ft2m":
                result = parseFloat(value) * 0.3048;
                conversionType = "Feet to Meters";
                break;
            case "kg2lb":
                result = parseFloat(value) * 2.20462;
                conversionType = "Kilograms to Pounds";
                break;
            case "lb2kg":
                result = parseFloat(value) * 0.453592;
                conversionType = "Pounds to Kilograms";
                break;
            case "c2f":
                result = (parseFloat(value) * 9/5) + 32;
                conversionType = "Celsius to Fahrenheit";
                break;
            case "f2c":
                result = (parseFloat(value) - 32) * 5/9;
                conversionType = "Fahrenheit to Celsius";
                break;
            case "btc2cad":
                const btcToCadRate = 47108.40; // 1 BTC to CAD exchange rate
                result = parseFloat(value) * btcToCadRate;
                conversionType = "Bitcoin to Canadian Dollar";
                break;
            case "cad2btc":
                const cadToBtcRate = 1 / 47108.40; // 1 CAD to BTC exchange rate
                result = parseFloat(value) * cadToBtcRate;
                conversionType = "Canadian Dollar to Bitcoin";
                break;
            case "l2gal":
                result = parseFloat(value) * 0.264172;
                conversionType = "Liters to Gallons";
                break;
            case "gal2l":
                result = parseFloat(value) * 3.78541;
                conversionType = "Gallons to Liters";
                break;
            default:
                res.status(400).send("Unsupported conversion type.");
                return;
        }

        console.log(`Received data: ${value} for ${conversionType}. Converted to ${result}.`);
        res.send(`Converted value: ${result} ${conversionType}.`);
    } else {
        res.status(400).send("Invalid input.");
    }
});

module.exports = router;
