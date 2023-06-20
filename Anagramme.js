function isAnagram(str1, str2) {

let string1 = str1.toLowerCase().split('').sort().join('')
let string2 = str2.toLowerCase().split('').sort().join('')

if (string1 === string2) {
    return true;
} else {
    return false;
}

}

console.assert(isAnagram("cinema", "iceman") === true, "Test 1 Failed");
console.assert(isAnagram("Hello", "Olelh") === true, "Test 2 Failed");
console.assert(isAnagram("Testz", "Taste") === false, "Test 3 Failed");
console.assert(isAnagram("Eleven plus two", "Twelve plus one") === true, "Test 4 Failed");


    