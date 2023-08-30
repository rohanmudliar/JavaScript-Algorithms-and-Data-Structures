console.log(validAnagram("", "")) //true
console.log(validAnagram("aaz", "zza")) //false
console.log(validAnagram("anagram", "nagaram")) // true
console.log(validAnagram("awesome", "awesom")) // false
console.log(validAnagram("qwerty", "wteqyr")) // true

function validAnagram(string1, string2) { // O(n) - It contains 2 objects and 3 loops which increases the space complexity.
    if (string1 === string2) return true;

    if (string1.length !== string2.length) {
        return false;
    };

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let i = 0; i < string1.length; i++) {
        const key = string1[i];
        frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
    }

    for (let i = 0; i < string2.length; i++) {
        const key = string2[i];
        frequencyCounter2[key] = ++frequencyCounter2[key] || 1;
    }

    for (const key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        };
    }

    return true;
}

function validAnagramWithout2Objs(string1, string2) { // O(n) - It contains just one object and 2 loops. 
    if (string1 === string2) return true;

    if (string1.length !== string2.length) {
        return false;
    };

    const lookup = {};

    for (let i = 0; i < string1.length; i++) {
        const char = string1[i];
        lookup[char] = (lookup[char] || 0) + 1;
    }

    for (let i = 0; i < string2.length; i++) {
        const key = string2[i];
        if(!lookup[key]) {
            return false;
        } else {
            --lookup[key]
        }
    }

    return true;
}




// Code written 1 year ago - It fails test cases. 
// function validAnagram(string1, string2){
//   // add whatever parameters you deem necessary - good luck!
//   if(string1 === string2) return true;
  
//   for(let i=0; i<string1.length; i++) {
//       const char = string1[i];
//       const indx = string2.indexOf(char);
      
//       if(indx !== -1) {
//           string2.split(string2.charAt(indx)).join('');
//       }
//   }
  
//   if(string2.length > 0) return false;
//   else return true;
// }