function fibonacci(n) {
    let a = 0, b = 1, temp;
    while (n-- > 0) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}

export default function handler(req, res) {
    const { n } = req.query;
    const num = parseInt(n, 10);

    if (isNaN(num) || num < 0 || num > 50) {
        return res.status(400).json({ error: "Please provide a valid number between 0 and 50." });
    }

    const fibNumber = fibonacci(num);
    
    res.status(200).json({ number: fibNumber });
}
