maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3); // 15
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 7], 4); // 16
maxSubarraySum([], 4);

function maxSubarraySum(array, n) { // O(n)
    if (n > array.length) return null;

    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += array[i];
    }

    let tempSum = maxSum;
    for (let i = n; i < array.length; i++) {
        tempSum = tempSum - array[i - n] + array[i]; // Sliding window.
        maxSum = Math.max(tempSum, maxSum);
    }

    console.log(maxSum);
}

function maxSubarraySumOld(array, n) { // O(n2)
    if (n > array.length) return null;

    let maxSum = 0;
    for (let i = 0; i < array.length; i++) {
        let accSum = array[i];
        for (let j = i + 1; j < array.length && j < i + n; j++) {
            accSum += array[j]
        }

        if (accSum > maxSum) {
            maxSum = accSum;
        }
    }

    console.log(maxSum)
}
