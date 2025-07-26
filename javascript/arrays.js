const myarr = [345, 'hello', true, null];

console.log(myarr);
console.log(Array.isArray(myarr));

const movies = ['avenger', 'my fault', 'spiderman', 'superman', 'bhagam bhag', 'quit'];

// indexing
console.log(movies[3]);
console.log(movies.indexOf('quit'));
console.log(movies.at(-2)); //reverse index
console.log(movies.at(3));


movies[1] = 'your fault';
console.log(movies);

// slicing

console.log(movies.slice(2, 5));
console.log(movies.slice(2, 50));
console.log(movies.slice(2));
//add an element
movies.push('final destination'); //adds to end
movies.unshift('batman'); //adds to front
console.log(movies);

//remove an element
movies.pop(); //removes from the end
movies.shift(); //removes from beginning 
console.log(movies);

//splice
//movies.splice(2, 1); //removes 1 element at index 2
//console.log(movies);
//movies.splice(2, 1, 'black'); //removes 1 element at index 2
//console.log(movies);
movies.splice(2, 0, 'black', 'black widow'); //adds two new element at index 2
//console.log(movies.length);
console.log(movies);