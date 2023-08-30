countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4


function countUniqueValues(array) {
    if (array.length === 0) return 0;

    let i = 0;
    let j = 1;

    while (j < array.length) {
        if (array[i] !== array[j]) {
            i++;
            if (array[i] !== array[j]) {
                array[i] = array[j];
            }
        }
        j++
    }

    console.log(i + 1)
}