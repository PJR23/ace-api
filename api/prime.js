function sieveOfEratosthenes(limit) {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;
    for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }
    return sieve
        .map((isPrime, number) => (isPrime ? number : null))
        .filter(Number);
}

export default function handler(req, res) {
    const { limit } = req.query;

    const maxLimit = 10000;
    const numLimit = Math.min(parseInt(limit, 10) || 10, maxLimit);

    const primes = sieveOfEratosthenes(numLimit);

    res.status(200).json({ primes });
}
