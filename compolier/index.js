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
let stores = [
    {
        id: 1,
        name: 'Tech Store',
        products: [
            { id: 1, name: 'Laptop', price: 1500 },
            { id: 2, name: 'Phone', price: 800 },
        ],
    },
    {
        id: 2,
        name: 'Gadget Hub',
        products: [
            { id: 3, name: 'Tablet', price: 600 },
            { id: 4, name: 'Smartwatch', price: 300 },
        ],
    },
];
// Mashq: Update
// 👉 Funksiya yoz:
// updateProductPrice(stores, storeId, productId, newPrice)
// Berilgan storeId ichidan productIdni topsin
// Shu mahsulotning price qiymatini newPrice ga o‘zgartirsin
// Agar topilmasa → massiv o‘zgarmasdan qaytsin
// function updateProductPrice(
//   stores: Store[],
//   storeId: number | string,
//   productId: number | string,
//   newPrice: number
// ) {
//   return stores.map((store) => {
//     if (store.id === storeId) {
//       return {
//         ...store,
//         products: store.products.map((prod) =>
//           prod.id === productId ? { ...prod, price: newPrice } : prod
//         ),
//       };
//     } else {
//       return store;
//     }
//   });
// }
// console.log(updateProductPrice(stores, 1, 2, 1000));
// import { ism } from './data';
// console.log(ism);
//==========================================
// Senga unknown tipidagi qiymat keladi. Uni string deb tasdiqlab (assert) uzunligini qaytar.
// function getStrit // 7
//======================================================
// Sen document.getElementById ishlatsang, TypeScript HTMLElement | null qaytaradi.
// Mashq: ID-si "username" bo‘lgan input elementni olib, uni HTMLInputElement deb tasdiqlab qiymatini yoz.
// const input = document.getElementById('username') as HTMLInputElement;
// console.log(input.value);
// agar <input id="username" value="Asadbek"> bo‘lsa => "Asadbek"
