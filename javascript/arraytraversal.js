const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];
//for loop
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
}

// for of loop
for (let i of arr) {
    //console.log(i);
}

//for each loop
arr.forEach((a, b, c) => {
        //console.log(a, b, c);
    }) // from a we getting element,b returns index ,c returns whole array

const sqr = []
arr.forEach((e) => {
        //sqr.push(e * e);
        sqr.unshift(e * e);
    })
    //console.log(sqr);

//even
const even = [];
arr.forEach((e) => {
        if (e % 2 == 0) {
            even.push(e);
        }
    })
    //console.log(even);
    //find the sum of all prices
    //store prices greaterthan 500 in a new array
const prices = [850, 200, 580, 670, 890]
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
//console.log(sum);
const greater = [];
prices.forEach((e) => {
    if (e > 500) {
        greater.push(e);
    }
})
console.log(greater);