function isAnagram(str1, str2) {
    // Your code here...
    let r =  str1.localeCompare(str2);
    if ( r == -1) {
        r = true;
        return r;
    } else {
        r = false;
        return r;
    }
}

console.assert(isAnagram("cinema", "iceman") === true, "Test 1 Failed");
console.assert(isAnagram("Hello", "Olelh") === true, "Test 2 Failed");
console.assert(isAnagram("Test", "Taste") === false, "Test 3 Failed");
console.assert(isAnagram("Eleven plus two", "Twelve plus one") === true, "Test 4 Failed");