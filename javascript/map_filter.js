const nums = [3, 6, 9, 6, 12];
//console.log(nums);
const sqrnums = nums.map((a) => {
        return a ** 2;
    })
    //console.log(sqrnums);
    //const prices = ['345.45', '$123.50', '$678.60', '$456.00', '$780.98'];
    //[345,123,678,456,789]

const two = nums.map((a) => {
        return a * 2; //all elements shown
    })
    //console.log(two);
    //filter
const oddnums = nums.map((n) => {
        return n % 2 !== 0; //only filtered elements
    })
    //console.log(oddnums);


//600-2000
const prices2 = [3400, 1300, 500, 120, 5600, 800];
const inbetween = prices2.filter((f) => {
    return f > 600 && f < 2000;
})
console.log(inbetween);
//

const names = ['raju', 'pinky', 'kaliya', 'chintu', 'jadoo '];
//only those name whose length is 5 or more than that
//console.log(names[1].length);
const print = names.filter((g) => {
        return g.length > 5;
    })
    //console.log(print);
console.log('abc'.toUpperCase()); //convert it in upper case

const names2 = ['shrey kumar', 'abul bul', 'harsh ku', 'ash yup', 'killing pee'];
const firstnames = names2.map((k) => {
    return k.split(' ')[0];
})
console.log(firstnames);
console.log('a b c'.split(' '));

//object