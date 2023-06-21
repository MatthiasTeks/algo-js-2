// function fibonacci(n) {
//     let fibo = [];
//     let r1= 0;
//     let r2= 1;
//     let result = 0;
     
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//         if (i === 0) {
//             fibo.push(r1);
//         } else if (i === 1) {
//             fibo.push(r2);
//         } else {
//             result = r1 + r2;
//             r1 = r2;
//             r2 = result;
//             fibo.push(r2);
//         }

//         console.log(fibo);
//         }
//         return fibo;
//         }

console.assert(JSON.stringify(fibonacci(5)) === JSON.stringify([0, 1, 1, 2, 3]), "Test 1 Failed");
console.assert(JSON.stringify(fibonacci(8)) === JSON.stringify([0, 1, 1, 2, 3, 5, 8, 13]), "Test 2 Failed");

/* Ecrire une fonction `fibonacciSeries(n)` qui retourne les `n` premiers chiffres de la suite de Fibonacci. 

La suite de Fibonacci est une séquence de nombres telle que chaque nombre est la somme des deux précédents. Les deux premiers nombres de la séquence sont 0 et 1. */
   