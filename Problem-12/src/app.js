function triNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }

    return sum;
}

function factors(n) {
    if (n == 1) return [1];

    let arr = new Array;
    let i = 1;
    let max = n;

    while (i < max) {
        if (n % i == 0) {  // i is a factor
            arr.push(i);

            if (i != n / i) {  // if not square, get the quotient which is a factor as well
                arr.push(n / i);
            }
            max = n / i;
        }
        i++
    }

    return arr.sort(function (a, b) { return a - b; });
}

let i = 1;
while (factors(triNum(i)).length < 500) {
    i++
}

console.log(triNum(i));