console.log(same3([1, 2, 3, 5], [4, 1, 9, 25])) // true;
console.log(same3([1, 2, 3], [1, 9])) // false;
console.log(same3([1, 2, 1], [4, 4, 1])) // false;


function same3(arr1, arr2) { // O(n) - IT CONTAINS JUST 1 OBJECT AND JUST 2 LOOPS.
    if(arr1.length !== arr2.length) {
      return false;
    };
  
    const frequencyCounter1 = {};
  
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];
      frequencyCounter1[element] = ++frequencyCounter1[element] || 1  
    }
  
    for (let i = 0; i < arr2.length; i++) {
      const element = arr2[i];
      
      if(!frequencyCounter1[Math.sqrt(element)]) {
        return false;
      } else {
        --frequencyCounter1[Math.sqrt(element)]
      }
    }
  
    return true;
  }


function same2(arr1, arr2) { // O(n) - But it contains 3 loops and 2 objects. 
    if (arr1.length !== arr2.length) {
        return false;
    };

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        frequencyCounter1[element] = ++frequencyCounter1[element] || 1
    }

    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        frequencyCounter2[element] = ++frequencyCounter2[element] || 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }

    return true;
}

function same1(arr1, arr2) { // O(n2)
    if (arr1.length !== arr2.length) {
        return false;
    };

    for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i] ** 2);
        index !== -1 && arr2.splice(index, 1);
    }

    return arr2.length === 0;
}