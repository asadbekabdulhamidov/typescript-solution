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
// function activeUsers(users: Users[]): Users[] {
//   return users.filter((user) => user.isActive);
// }
// console.log(activeUsers(users));
//==========================================
// 2-MASALA: Notification’ga qarab turli xabar chiqarish
// 👇 Shart:
// Quyidagi Notification tipidan foydalangan holda funksiya yozing. Funksiya har xil turdagi xabarlarni qabul qiladi va qaysi kanal orqali yuborilayotganini konsolga chiqaradi.
// type CustomNotification =
//   | { type: 'email'; email: string }
//   | { type: 'sms'; phone: string }
//   | { type: 'push'; deviceId: string };
// // 👇 Bu yerga funksiya yozing
// function sendNotification(notification: CustomNotification): void {
//   if (notification.type === 'email') {
//     console.log(`Email orqali yuborilmoqda: ${notification.email}`);
//   } else if (notification.type === 'sms') {
//     console.log(`SMS yuborilmoqda: ${notification.phone}`);
//   } else if (notification.type === 'push') {
//     console.log(`Push bildirishnoma yuborilmoqda: ${notification.deviceId}`);
//   }
// }
// sendNotification({ type: 'email', email: 'user@example.com' });
// //===========================================================
// 3-MASALA: Order status’ga qarab action belgilash
// 👇 Shart:
// Quyidagi OrderStatus enumidan foydalanib, Order statusiga qarab log chiqaradigan funksiya yoz.
// enum OrderStatus {
//   Pending = 'pending',
//   Processing = 'processing',
//   Delivered = 'delivered',
//   Cancelled = 'cancelled',
// }
// interface Order {
//   id: number;
//   customer: string;
//   status: OrderStatus;
// }
// // 👇 Bu yerga funksiya yozing
// function handleOrder(order: Order): void {
//   switch (order.status) {
//     case OrderStatus.Pending:
//       console.log('Buyurtma hali ko‘rib chiqilmagan');
//       break;
//     case OrderStatus.Delivered:
//       console.log('Buyurtma yetkazildi');
//       break;
//     case OrderStatus.Cancelled:
//       console.log('Buyurtma bekor qilindi');
//       break;
//     case OrderStatus.Processing:
//       console.log('Buyurtma tayyorlanmoqda');
//       break;
//     default:
//       throw new Error('Noto‘g‘ri buyurtma statusi');
//   }
// }
// handleOrder({ id: 1, customer: 'Ali', status: OrderStatus.Pending });
// // 👉 "Buyurtma hali ko‘rib chiqilmagan"
// handleOrder({ id: 2, customer: 'Laylo', status: OrderStatus.Delivered });
// // 👉 "Buyurtma yetkazildi"
// handleOrder({ id: 3, customer: 'Doston', status: OrderStatus.Cancelled });
// // 👉 "Buyurtma bekor qilindi"
//================================
//getFullName funksiyasini yozing
// interface User {
//   firstName: string;
//   lastName: string;
// }
// const user: User = {
//   firstName: 'Asadbek',
//   lastName: 'Abdulhamidov',
// };
// function getFullName(user: User): void {
//   console.log(user.firstName + ' ' + user.lastName);
// }
// console.log(getFullName(user)); // 👉 Asadbek Abdulhamidov
//================================================
// getUserInfo funksiyasini yozing
// interface User {
//   name: string;
//   age?: number; // optional
// }
// function getUserInfo(user: User): string {
//   if ('age' in user) {
//     return `${user.name}, ${user.age} yoshda`;
//   } else {
//     return `${user.name}, yoshi ko'rsatilmagan`;
//   }
// }
// console.log(getUserInfo({ name: 'Asadbek', age: 24 }));
// // 👉 Asadbek, 24 yoshda
// console.log(getUserInfo({ name: 'Sumayya' }));
// // 👉 Sumayya, yoshi ko‘rsatilmagan
//==========================================
//Product obyektini faqat o‘qish mumkin bo‘lishi kerak
// interface Product {
//   readonly id: number;
//   name: string;
// }
// function updateProductName(product: Product, newName: string): Product {
//   return { ...product, name: newName };
// }
// console.log(updateProductName({ id: 1, name: 'Asadbek' }, 'Sumayya'));
//================================================
// Quyidagi massivdan berilgan id ga ega mahsulotni o‘chiradigan funksiya yozing.
// Muhim: massivni mutatsiya qilmasin (yangi array qaytarsin).
// type Product = {
//   readonly id: number;
//   name: string;
// };
// const products: Product[] = [
//   { id: 1, name: 'Olma' },
//   { id: 2, name: 'Banan' },
//   { id: 3, name: 'Anor' },
// ];
// function deleteProductById(products: Product[], id: number): Product[] {
//   // yo'nalish: filter ishlating
//   return products.filter((prod) => prod.id !== id);
// }
// const afterDelete = deleteProductById(products, 2);
// console.log(afterDelete);
//============================================================
// Yangi mahsulot qo‘shish (CREATE)
// Shart:
// Quyidagi massivga yangi mahsulot qo‘shadigan funksiya yozing.
// Qoida:
// id avtomatik ravishda massivdagi eng katta id + 1 bo‘lishi kerak.
// Eski massivni o‘zgartirmang (yangi array qaytaring).
// interface Product {
//   id: number;
//   name: string;
// }
// const products: Product[] = [
//   { id: 1, name: 'Olma' },
//   { id: 2, name: 'Banan' },
// ];
// function addProduct(products: Product[], name: string): Product[] {
//   return [...products, { id: (products.at(-1)?.id ?? 0) + 1, name }];
// }
// console.log(addProduct(products, 'Anor'));
//=============================================
// let username: string = 'Asadbek';
// let age: number = 25;
// let isActive: boolean = true;
// console.log(username, age, isActive);
//======================================
// Funksiya yoz:
// Parametr sifatida faqat number qabul qilsin.
// Parametrning kvadratini qaytarsin.
// 👉 Sen yozib ko‘r, keyin muhokama qilamiz.
// function getPow(num: number): number {
//   return num ** 2;
// }
// console.log(getPow(2));
//========================================
// Funksiya yoz:
// Parametr sifatida number | string qabul qilsin (union type).
// Agar parametr number bo‘lsa — uning kvadratini qaytarsin.
// Agar parametr string bo‘lsa — uzunligini qaytarsin.
// function getLengthOrSquare(val: string | number): number {
//   if (typeof val === 'string') {
//     return val.length;
//   } else {
//     return val ** 2;
//   }
// }
// console.log(getLengthOrSquare('salom'));
// console.log(getLengthOrSquare(3));
//==================================
// Parametr sifatida string[] qabul qilsin.
// Har bir elementni katta harf qilib qaytarsin.
// function toUpperCaseArray(val: string[]): string[] {
//   return val.map((item) => item.toUpperCase());
// }
// console.log(toUpperCaseArray(['a', 'b', 's']));
//======================================================
// Tuple tuz:
// [string, number] shaklida bo‘lsin.
// Masalan, bir o‘quvchining ["Asadbek", 25] kabi ma’lumotlarini saqlasin.
// Keyin funksiya yoz: tuple qabul qilsin va "Asadbek is 25 years old" ko‘rinishida string qaytarsin.
// 👉 Funksiya nomi uchun formatStudentInfo ni tavsiya qilaman.
// function formatStudentInfo(student: [string, number]): string {
//   return `${student[0]} is ${student[1]} years old`;
// }
// console.log(formatStudentInfo(['asadbek', 25]));
//==================================================================
// Interface yoz:
// Product (id: number, name: string, price: number)
// Funksiya yoz:
// Parametr sifatida Product[] massivini qabul qilsin.
// Eng qimmat mahsulotni qaytarsin.
// 👉 Funksiya nomi sifatida getMostExpensiveProduct ni tavsiya qilaman.
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// const products: Product[] = [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Phone', price: 800 },
//   { id: 3, name: 'Headphones', price: 1500 },
//   { id: 4, name: 'Monitor', price: 300 },
// ];
// function getMostExpensiveProduct(products: Product[]): Product {
//   return [...products].sort((a, b) => b.price - a.price)[0];
// }
// console.log(getMostExpensiveProduct(products));
//================================================
// interface User yarating:
// id: number
// name: string
// type Role yarating:
//
// AdminUser nomli yangi tur yarating, u User va Role ni birlashtirsin.
// const superAdmin obyektini yarating, id, name, va role maydonlariga qiymat bering.
// interface User {
//   id: number;
//   name: string;
// }
// type Role = 'admin' | 'editor' | 'viewer';
// type AdminUser = User & {
//   role: Role;
// };
// const superAdmin: AdminUser = {
//   id: 1,
//   name: 'Asadbek',
//   role: 'viewer',
// };
//====================================
// interface User {
//   id: number;
//   name: string;
// }
// type Role = 'admin' | 'editor' | 'viewer';
// type AdminUser =
//   | (User & { role: 'admin'; permissions: string[] })
//   | (User & { role: 'editor' | 'view'; permissions?: never });
// const superAdmin: AdminUser = {
//   id: 1,
//   name: 'Abdulhamid',
//   role: 'admin',
//   permissions: ['asad', 'doston', 'hamid'],
// };
// const editor: AdminUser = {
//   id: 1,
//   name: 'Abdulhamid',
//   role: 'editor',
// };
//================================================
// Product degan interface tuz:
// id: number
// name: string
// price: number
// products nomli massiv bor.
// addProduct(products, newProduct) funksiyasini yozing:
// newProduct ni massivga qo‘shib, yangilangan massivni qaytarishi kerak.
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// const products: Product[] = [
//   { id: 1, name: 'Phone', price: 1000 },
//   { id: 2, name: 'Laptop', price: 3000 },
// ];
// const newProduct: Product = { id: 3, name: 'Tablet', price: 1500 };
// function addProduct(products: Product[], newProd: Product): Product[] {
//   return [...products, newProd];
// }
// console.log(addProduct(products, newProduct));
//==============================================================
// (Read)
// getProductById(products, id) funksiyasini yozing:
// Massiv ichidan id bo‘yicha mahsulotni topib qaytarsin.
// Agar mahsulot topilmasa, undefined qaytarsin.
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// const products: Product[] = [
//   { id: 1, name: 'Phone', price: 1000 },
//   { id: 2, name: 'Laptop', price: 3000 },
// ];
// function getProductById(products: Product[], id: number): Product | undefined {
//   return products.find((product) => product.id === id);
// }
// console.log(getProductById(products, 3));
//=============================================
// updateProduct(products, updatedProduct) funksiyasini yozing:
// updatedProduct.id bo‘yicha massivdagi mahsulotni yangilasin.
// Agar id topilsa → yangilangan mahsulot bilan almashtirsin.
// Agar topilmasa → massivni o‘z holicha qaytarsin.
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// const products: Product[] = [
//   { id: 1, name: 'Phone', price: 1000 },
//   { id: 2, name: 'Laptop', price: 3000 },
// ];
// const updated: Product = { id: 4, name: 'Gaming Laptop', price: 3500 };
// function updateProduct(
//   products: Product[],
//   updatedProduct: Product
// ): Product[] {
//   return products.map((prod) =>
//     prod.id === updatedProduct.id ? updatedProduct : prod
//   );
// }
// console.log(updateProduct(products, updated));
//==============================================================
// 📝 4-masala (Delete)
// deleteProduct(products, id) funksiyasini yozing:
// Berilgan id bo‘yicha mahsulotni o‘chirib tashlasin.
// O‘chirilgan mahsulotsiz massivni qaytarsin.
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// const products: Product[] = [
//   { id: 1, name: 'Phone', price: 1000 },
//   { id: 2, name: 'Laptop', price: 3000 },
// ];
// function deleteProduct(products: Product[], id: number): Product[] {
//   return products.filter((item) => item.id !== id);
// }
// console.log(deleteProduct(products, 2));
//=================================================
// deleteProduct nomli funksiya yoz.
// Uchta shart qo‘shamiz:
// Parametrlar:
// products → mahsulotlar ro‘yxati
// id → o‘chirilishi kerak bo‘lgan mahsulot IDsi
// Agar ID mavjud bo‘lsa — o‘sha mahsulotni o‘chirib, yangi massiv qaytarsin.
// Agar ID mavjud bo‘lmasa — massivni o‘zgarishsiz qaytarsin.
// Agar massiv bo‘sh bo‘lsa — to‘g‘ridan-to‘g‘ri bo‘sh massivni qaytarsin.
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
// let products: Product[] = [
//   { id: 1, name: 'Book', price: 20 },
//   { id: 2, name: 'Pen', price: 5 },
// ];
// function deleteProduct(products: Product[], id: number): Product[] | [] {
//   if (!products.length) return [];
//   if (products.some((item) => item.id === id)) {
//     return products.filter((item) => item.id !== id);
//   } else {
//     return products;
//   }
// }
// console.log(deleteProduct(products, 2));
//===============================================
// let numbers: readonly number[] = [1, 2, 3, 4, 5, 5, 6];
// console.log(numbers.length, numbers[0]);
//====================================
// Array – union bilan
// (string | number)[] tipidagi massiv yarating va ichiga "Ali", 25, "Vali", 30 ni qo‘ying.
// So‘ng, faqat sonlarni ajratib yangi massiv qaytaring.
// let namesNumber: (string | number)[] = ['Ali', 25, 'Vali', 30];
// let nums: number[] = namesNumber.filter((item) => typeof item === 'number');
// console.log(nums);
//================================
// Tuple – oddiy
// [string, number] tipidagi user yarating, masalan ["Ali", 25].
// Keyin user[0] va user[1] ni konsolga chiqaring.
// let user: [string, number] = ['Ali', 25];
// console.log(user);
//==============================================
// Tuple – optional
// [string, number?, boolean?] tipidagi person yarating.
// Unga uch xil qiymat bering:
// Faqat ism
// Ism + yosh
// Ism + yosh + boolean
// let person: [string, number?, boolean?];
// person = ['Asadbek'];
// person = ['Asadbek', 25];
// person = ['Asadbek', 25, true];
//=================================================
// filterAdults nomli funksiya yozing. U:
// Parametr sifatida Person[] qabul qiladi.
// Faqat 18 yoshdan kattalarni qaytaradi.
// interface Person {
//   name: string;
//   age: number;
// }
// const people: Person[] = [
//   { name: 'Ali', age: 17 },
//   { name: 'Vali', age: 20 },
//   { name: 'Asadbek', age: 25 },
// ];
// function filterAdults(people: Person[]): Person[] {
//   return people.filter((item) => item.age >= 18);
// }
// console.log(filterAdults(people));
//====================================================
// String arrayga yangi ism qo‘shish
// 👉 Funksiya addName yozing:
// Parametrlar: names: string[], newName: string
// Natija: yangi ism qo‘shilgan string[] qaytsin.
// let names: Array<string> = ['ali', 'vali'];
// function addName(names: string[], newName: string): string[] {
//   names.push(newName);
//   return names;
// }
// // function addName(names: string[], newName: string): string[] {
// //   return [...names, newName];
// // }
// console.log(addName(names, 'Bekzod'));
//===============================================
// nksiya findName yozing:
// Parametrlar: names: string[], search: string
// Natija: agar ism mavjud bo‘lsa — o‘sha ismni qaytarsin,
// mavjud bo‘lmasa — undefined qaytarsin.
// const users: string[] = ['Ali', 'Vali', 'Asadbek'];
// function findName(users: string[], name: string): string | undefined {
//   return users.find((item) => item === name);
// }
// console.log(findName(users, 'Vali')); // "Vali"
// console.log(findName(users, 'Madina'));
//=====================================================
// const users: string[] = ['Ali', 'Vali', 'Asadbek'];
// function deleteName(users: string[], name: string): string[] {
//   return users.filter((item) => item !== name);
// }
// console.log(deleteName(users, 'Vali'));
// // ["Ali", "Asadbek"]
// console.log(deleteName(users, 'Madina'));
// // ["Ali", "Vali", "Asadbek"]
