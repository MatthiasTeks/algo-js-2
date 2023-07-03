function wordCount(str) {
    if (str.trim() === "") {
        return 0;
    } else {
        return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim().split(/\s+/).length;
    }
}

console.assert(wordCount("Bonjour tout le monde") === 4, "Test 1 Failed");
console.assert(wordCount("JavaScript est super") === 3, "Test 2 Failed");
console.assert(wordCount("OpenAI") === 1, "Test 3 Failed");
console.assert(wordCount("") === 0, "Test 4 Failed");