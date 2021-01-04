"use strict";
const mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mtns) {
    let nameOfTallestMountain = "";
    let tallest = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallest) {
            tallest = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
const products = [
    { name: "Pizza", price: 12 },
    { name: "BreadSticks", price: 4 },
    { name: "Salad", price: 8 },
    { name: "Wings", price: 6 }
];
function calcAverageProductPrice(prods) {
    let avgProdPrice = 0;
    let average = 0;
    for (const prod of prods) {
        for (let avg = 0; avg < products.length; avg++) {
            avgProdPrice += prod.price;
        }
        average = avgProdPrice / (products.length);
    }
    return average / (products.length) || 0;
}
let average = calcAverageProductPrice(products);
console.log("$" + average.toFixed(2));
const inventory = [
    { product: { name: "motor", price: 10.00 },
        quantity: 10 },
    { product: { name: "sensor", price: 12.50 },
        quantity: 4 },
    { product: { name: "LED", price: 1.00 },
        quantity: 20 }
];
function calcInventoryValue(invItems) {
    let total = 0;
    for (const invItem of invItems) {
        total += (invItem.product.price * invItem.quantity);
    }
    return total || 0;
}
let total = calcInventoryValue(inventory);
console.log("$" + total.toFixed(2));
