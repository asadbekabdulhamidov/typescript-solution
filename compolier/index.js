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
    { id: 1, name: 'Book', price: 20 },
    { id: 2, name: 'Pen', price: 5 },
];
function deleteProduct(products, id) {
    if (!products.length)
        return [];
    if (products.some((item) => item.id === id)) {
        return products.filter((item) => item.id !== id);
    }
    else {
        return products;
    }
}
console.log(deleteProduct(products, 2));
