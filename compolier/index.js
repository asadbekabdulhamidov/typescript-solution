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
const products = [
    { id: 1, name: 'Phone', price: 1000 },
    { id: 2, name: 'Laptop', price: 3000 },
];
function getProductById(products, id) {
    return products.find((product) => product.id === id);
}
console.log(getProductById(products, 3));
