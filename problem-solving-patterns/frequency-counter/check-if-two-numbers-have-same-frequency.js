console.log(sameFrequency(1828, 2818)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

function sameFrequency(num1, num2) {
    const data1 = num1.toString();
    const data2 = num2.toString();

    if (data1.length !== data2.length) return false;

    const frequencyCounter1 = {};

    for (let i = 0; i < data1.length; i++) {
        frequencyCounter1[data1[i]] = ++frequencyCounter1[data1[i]] || 1;
    }

    for (let i = 0; i < data2.length; i++) {
        if (!frequencyCounter1[data2[i]]) {
            return false;
        } else {
            frequencyCounter1[data2[i]]--;
        }
    }

    return true;
}
