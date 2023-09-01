console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

function isSubsequence(string, word) {
  let placeholder = 0;

  for (let i = 0; i < word.length; i++) {
    const element = word[i];

    if(string[placeholder] === element) placeholder++;
  }

  return placeholder === string.length;
}