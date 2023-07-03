function isAnagram(str1, str2) {
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
    return;
}

console.assert(isAnagram("cinema", "iceman") === true, "Test 1 Failed");
console.assert(isAnagram("Hello", "Olelh") === true, "Test 2 Failed");
console.assert(isAnagram("Test", "Taste") === false, "Test 3 Failed");
console.assert(isAnagram("Eleven plus two", "Twelve plus one") === true, "Test 4 Failed");