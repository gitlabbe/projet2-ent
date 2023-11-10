const express = require("express");
const router = express.Router();

// Route pour la page d'accueil
router.get("/", (req, res) => {
    res.send("Requête POST requise pour effectuer une conversion.");
});

// Route pour gérer les requêtes de conversion
router.post("/", async (req, res) => {
    const { type, value } = req.body;

    if (type && !isNaN(value)) {
        let result;
        let conversionType;

        // Utilisation d'une instruction switch pour déterminer le type de conversion
        switch (type.toLowerCase()) {
            case "m2ft":
                // Conversion de mètres en pieds
                result = parseFloat(value) * 3.28084;
                conversionType = "Mètres vers Pieds";
                break;
            case "ft2m":
                // Conversion de pieds en mètres
                result = parseFloat(value) * 0.3048;
                conversionType = "Pieds vers Mètres";
                break;
            case "kg2lb":
                // Conversion de kilogrammes en livres
                result = parseFloat(value) * 2.20462;
                conversionType = "Kilogrammes vers Livres";
                break;
            case "lb2kg":
                // Conversion de livres en kilogrammes
                result = parseFloat(value) * 0.453592;
                conversionType = "Livres vers Kilogrammes";
                break;
            case "c2f":
                // Conversion de degrés Celsius en degrés Fahrenheit
                result = (parseFloat(value) * 9/5) + 32;
                conversionType = "Celsius vers Fahrenheit";
                break;
            case "f2c":
                // Conversion de degrés Fahrenheit en degrés Celsius
                result = (parseFloat(value) - 32) * 5/9;
                conversionType = "Fahrenheit vers Celsius";
                break;
            case "btc2cad":
                // Conversion de Bitcoin en Dollar Canadien
                const btcToCadRate = 47108.40; // Taux de conversion de 1 BTC en CAD
                result = parseFloat(value) * btcToCadRate;
                conversionType = "Bitcoin vers Dollar Canadien";
                break;
            case "cad2btc":
                // Conversion de Dollar Canadien en Bitcoin
                const cadToBtcRate = 1 / 47108.40; // Taux de conversion de 1 CAD en BTC
                result = parseFloat(value) * cadToBtcRate;
                conversionType = "Dollar Canadien vers Bitcoin";
                break;
            case "l2gal":
                // Conversion de litres en gallons
                result = parseFloat(value) * 0.264172;
                conversionType = "Litres vers Gallons";
                break;
            case "gal2l":
                // Conversion de gallons en litres
                result = parseFloat(value) * 3.78541;
                conversionType = "Gallons vers Litres";
                break;
            default:
                // Type de conversion non supporté
                res.status(400).send("Type de conversion non pris en charge.");
                return;
        }

        // Afficher des informations de conversion et renvoyer la réponse
        console.log(`Données reçues : ${value} pour la conversion ${conversionType}. Converties en ${result}.`);
        res.send(`Valeur convertie : ${result} ${conversionType}.`);
    } else {
        // Erreur en cas de données d'entrée invalides
        res.status(400).send("Données d'entrée non valides.");
    }
});

module.exports = router;