const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Need a POST request plz!");
});

router.post("/", async (req, res) => {
    // Extract type and value from the request body
    const { type, value } = req.body;
    // Check if the type is "feet2meter" and the value is a valid number
    if (type.toLowerCase() === "feet2meter" && !isNaN(value)) {
        // log to server console for debugging
        console.log("received data: " + req.body.type + " for " + req.body.value);
        // Convert value from feet to meters (1 foot = 0.3048 meters)
        const meters = parseFloat(value) * 0.3048;
        // Log the received data and the converted value
        console.log(`Received data: ${value} feet. Converted to ${meters} meters.`);
        // Send the converted value in the response
        res.send(`Converted value: ${meters} meters.`);
    } else {
        // If the type is defined or the value is not a valid number, send an error response
        res.status(400).send("Invalid input.");
    }
  });

module.exports = router;