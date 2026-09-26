// let produk1 = "rinso";
// let produk2 = "kurma";
// let produk3 = "teh";

// console.log(produk1);
// console.log(produk2);
// console.log(produk3);

// let products = ["rinso", "kurma", "teh", "indomie", "ABC"];

// for (let i = 0; i < products.length; i++) {
//     console.log(i+1 + ". " + products[i]);
// }

let buah = ["apel", "kurma", "jeruk", "manggis", "anggur"];

let input_buah = prompt("masukan buah yang ingin di masukan");

if(isNaN(input_buah)) {
    buah.push(input_buah);
} else {
    alert("input invalid!")
}

console.log(buah);