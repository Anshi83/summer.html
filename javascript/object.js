const user = {
    name: 'Lestrade',
    email: 'xyz@gmail.com',
    age: '21 ',
};
console.log(user);
console.log(user.name);
console.log(user['email']);
//key update
user.age = 45;
user.kyy = 45;
//console.log(user);
console.log(Object.keys(user)); //for keys
console.log(Object.values(user)); //for values

const smartphone = {
    brand: 'apple',
    model: 'iphone 16',
    price: 95000,
    colors: ['black', 'pink', 'blue '],
};
console.log(smartphone.colors);
console.log(smartphone.price);

//change price of smartphone
smartphone.price = 58000;
console.log(smartphone.price);

//access second color ofsmartphone
console.log(smartphone.colors[1]);
smartphone.colors.push('green');
console.log(smartphone.colors);

//replace sec color with yellow
smartphone.colors[1] = 'yellow';
console.log(smartphone.colors);
const smartphoneArray = [{
        brand: 'apple',
        model: 'i phone 16 pro',
        price: 199999,
        color: ['black', 'green', 'blue', 'lisght pink'],
    },
    {
        brand: 'vivo',
        model: 'y22',
        price: 24000,
        color: ['red', 'black', 'grreen'],
    },
    {
        brand: 'redmi',
        model: 'note 5 pro',
        price: 67000,
        color: ['red', 'black', 'grreen'],
    },
    {
        brand: 'samsung',
        model: 's24',
        price: 40000,
        color: ['red', 'black', 'grreen'],

    },
    {
        brand: 'gogle pixel',
        model: 'jk',
        price: 49000,
        color: ['red', 'black', 'grreen'],

    },
]
console.log(smartphoneArray);
//accesing the i object;
console.log(smartphoneArray[0]);

//acces the key under that object
console.log(smartphoneArray[3].brand);
console.log(smartphoneArray[3].color);

//adding color to google pixel at last or biggining (unshift)
smartphoneArray[4].color.push('white');
console.log(smartphoneArray[4]);

//change the price o redmi . 
smartphoneArray[2].price = '98000';
console.log(smartphoneArray[2]);

//replace the i phone color;
smartphoneArray[0].color.splice(0, 2, 'silver', 'blue');
console.log(smartphoneArray[0]);

// find the sum of the 1 st and 3 smarthpone prices in the array
const sum = smartphoneArray[0].price + smartphoneArray[1].price;
console.log(sum);

//add a waranty key with value 2 year in i phhone
smartphoneArray[0].warranty = '2 years';
console.log(smartphoneArray[0]);

//new array with only the smarthone brands.
const smartphoneBrands = smartphoneArray.map((phone) => {
    return phone.brand;
})
console.log(smartphoneBrands);

//filter phone with price<75000
const smartphonep = smartphoneArray.filter((phone) => {

    return phone.price < 75000;
});
//const smartphonepp = smartphoneArray.map((phone) => {
//return phone.smartphonep;
//})
//console.log(smartphonep);

const keyword = 'samsung'; //accessing the keyword
const filteredphones = smartphoneArray.filter((phone) => {

    return phone.brand.toLowerCase() === keyword.toLowerCase();
});
console.log(filteredphones);
//const keyword = 'sam'; //accessing the keyword by its substring
//const filtered = smartphoneArray.filter((phone) => {

//return phone.brand.toLowerCase().includes(keyword.toLowerCase());
//});
//console.log(filtered);