function printPrime() {
    let num = document.getElementById("idPrime").value;
    let primes = "";
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes += i + "<br>";
        }
    }
    document.getElementById("idresult").innerHTML = `  ${primes}`;
}