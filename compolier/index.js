"use strict";
// API'dan keladigan userlar ro'yxati:
// Vazifa: Type yarat va faqat active userlarni ajratib oladigan funksiya yoz
// type Users = {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// };
// const users: Users[] = [
//   { id: 1, name: 'Ali', email: 'ali@gmail.com', isActive: true },
//   { id: 2, name: 'Laylo', email: 'laylo@mail.com', isActive: false },
//   { id: 3, name: 'Doston', email: 'doston@example.com', isActive: true },
// ];
let products = [
    { id: 1, name: 'Olma', price: 5000 },
    { id: 2, name: 'Banan', price: 8000 },
    { id: 3, name: 'Anor', price: 10000 },
];
function updateProduct(id, updatedData) { }
updateProduct(2, { price: 9000 });
console.log(products);
