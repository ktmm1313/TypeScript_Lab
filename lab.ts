// Tallest Mountain
interface Mountain {
    name: string;
    height: number;
}
const mountains: Mountain[] = [
  {name: "Kilimanjaro", height: 19341},
  {name: "Everest", height: 29029},
  {name: "Denali", height: 20310}
];
function findNameOfTallestMountain(mtns: Mountain[]) : string {
    let nameOfTallestMountain: string = "";
    let tallest : number = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallest) {
            tallest = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    } return nameOfTallestMountain;
}
let tallestMountain : string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);


//Products
interface Product {
    name: string;
    price: number;
}
const products: Product[] = [
  {name: "Pizza", price: 12},
  {name: "BreadSticks", price: 4},
  {name: "Salad", price: 8},
  {name: "Wings", price: 6}
];

function calcAverageProductPrice(prods: Product[]) {
    let avgProdPrice: number = 0;
    let average: number = 0;
    for (const prod of prods) {            
        for (let avg = 0; avg < products.length; avg++) {
                 avgProdPrice += prod.price;                 
                }       
                average = avgProdPrice / (products.length);
     } return average / (products.length) || 0; 
}    
let average: number = calcAverageProductPrice(products);
console.log("$" + average.toFixed(2));


//Inventory
interface InventoryItem {
    product: Product;
    quantity: number;
}
const inventory: InventoryItem[] = [
  {product: {name: "motor", price: 10.00},
       quantity: 10},
  {product: {name: "sensor", price: 12.50},
   quantity: 4},
  {product: {name: "LED", price: 1.00},
   quantity: 20}
];
function calcInventoryValue(invItems : InventoryItem[]) {
    let total: number = 0;
    for (const invItem of invItems) {            
        total += (invItem.product.price * invItem.quantity);                                     
     } return total || 0; 
}    
let total = calcInventoryValue(inventory);
console.log("$" + total.toFixed(2));
