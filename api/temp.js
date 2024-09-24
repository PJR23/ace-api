export default function handler(req, res) {
    const { celsius } = req.query;

    if (!celsius) {
        return res.status(400).json({ error: "Please provide a Celsius value." });
    }

    const kelvin = parseFloat(celsius) + 273.15;

    res.status(200).json({
        celsius: parseFloat(celsius),
        kelvin: kelvin
    });
}
