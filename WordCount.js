function wordCount(str) {
    // Your code here...
    let result = "";
    if (str.length === 0) {
        result = 0
    } else {
        result = str.split(" ").length; 
    }
    return result; 
}


console.assert(wordCount("Bonjour tout le monde") === 4, "Test 1 Failed");
console.assert(wordCount("JavaScript est super") === 3, "Test 2 Failed");
console.assert(wordCount("OpenAI") === 1, "Test 3 Failed");
console.assert(wordCount("") === 0, "Test 4 Failed");