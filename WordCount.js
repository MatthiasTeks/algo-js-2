function wordCount(str) {
   if( str.length === 0){
    return 0;
} else { return str.split(" ").length;   
}}
   

console.assert(wordCount("Bonjour tout le monde") === 4, "Test 1 Failed");
console.assert(wordCount("JavaScript est super") === 3, "Test 2 Failed");
console.assert(wordCount("OpenAI") === 1, "Test 3 Failed");
console.assert(wordCount("") === 0, "Test 4 Failed");

