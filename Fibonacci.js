function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c = a+b;
    const array = [0,1];

    if (n === 0){
        return [];
    
    }else if ( n === 1){
        return [a];
        console.log([a]);
    } else for (let i = 2; n > i; n--){
         c = a + b
         a = b; 
         b = c;
      array.push(c);
      console.log(array);
    }
    return array;
}

console.assert(JSON.stringify(fibonacci(0)) === JSON.stringify([]), "Test 1 Failed");
console.assert(JSON.stringify(fibonacci(1)) === JSON.stringify([0]), "Test 2 Failed");
console.assert(JSON.stringify(fibonacci(5)) === JSON.stringify([0, 1, 1, 2, 3]), "Test 3 Failed");
