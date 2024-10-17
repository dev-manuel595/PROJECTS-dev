
  function findLargestPalindrome(numDigits) {
    let largestPalindrome = 0;
  
    for (let i = 10 ** (numDigits - 1); i >= 10 ** (numDigits - 2); i--) {
      for (let j = i; j >= 10 ** (numDigits - 2); j--) {
        //console.log(i,j);
        const product = i * j;
        if (isPalindrome(product) && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }
  
    return largestPalindrome;
  }
  //Let us find the largest palindrome number
  function isPalindrome(number) {
    const str = number.toString();
    return str === str.split('').reverse().join('');
  }
  
 
  const Palresults = document.getElementById("results");
  const clickResults = document.getElementById("button");
 
  button.addEventListener("click", function() {
   // Palresults.append(largestPalindrome)
    results.innerHTML = "Largest palindrome: " + largestPalindrome;
  });

  const largestPalindrome = findLargestPalindrome(4);
  console.log("Largest palindrome:", largestPalindrome);

  //function findLargestPalindrome(numDigits) {
    // ... your function code ...
  
    //const resultElement = document.getElementById("result");
    ///resultElement.innerHTML = "Largest palindrome: " + largestPalindrome;
  //}