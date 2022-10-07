// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.




function palincromeCheck(str){
    var regex = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regex,"")
    console.log(str)
    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-1-i]){
            return false
        }
    }
    return true
    

}

palincromeCheck("mad@#")



// same example


// function palindrome(str) {
//   var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
//   str = str.toLowerCase().replace(re, '');
//   console.log(str)
//   for(let i =0 ; i<str.length/2;i++){
//     if(str[i]!==str[str.length-1-i]){
//       return false
//     }
//     // return true
//     // console.log(true)
//   }
//   return true
//   // console.log(false)
// }

// palindrome("lalalaafjk832473f;[['@^$&&^&*&*01938791");