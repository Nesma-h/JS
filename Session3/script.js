function toJadenCase(str) {
    arr = str.split(" ").map(wrd => wrd.charAt(0).toUpperCase() + wrd.slice(1));
    str = arr.join(" ");

    return str;
}

function highAndLow(numbers) {
    let max = -100000, min = 100000;
    numbers = numbers.split(" ").map(num => Number(num))
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) max = numbers[i];
        if (min > numbers[i]) min = numbers[i];
        // console.log(numbers[i]);
        // console.log(min);
    }

    return `max num is ${max} And Min number is ${min} `
}

function rowSumOddNumbers(n) {
    let start = n * (n - 1) + 1, sum = 0, i = 0;
    while (i < n) {
        sum += start;
        i++;
        start += 2
    }
    return sum;
}

function getMiddle(s) {
    len = s.length;
    console.log(len);
    str = '';
    if (len % 2 == 0) {
        str = s.charAt(len / 2 - 1) + s.charAt(len / 2);
    } else {
        str = s.charAt(parseInt(len / 2));
    }
    return str
}

function digitalRoot(n) {
    let sum = 0
    while (n) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    if (sum < 10) return sum;
    return digitalRoot(sum);
}
function findUniq(arr) {
    let unique = [...new Set(arr)];
    let u = 0;
    const dict = new Map();
    for (let i = 0; i < 3; i++) {
        if (dict.get(arr[i])) {
            dict.set(arr[i], 2);
        } else {
            dict.set(arr[i], 1);
        }
    }
    for (let i = 0; i < 2; i++) {
        if (!dict.get(unique[i]) || dict.get(unique[i]) == 1) {
            return unique[i]
        }
    }

}

console.log(toJadenCase('most trees are blue'));
console.log(highAndLow("1 7 3 9 5 0"));
console.log(rowSumOddNumbers(42));
console.log(getMiddle('Testing'))
console.log(digitalRoot(493193))
console.log(findUniq([0, 0, 0.55, 0, 0]))
