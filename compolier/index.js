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
const user = {
    id: 1,
    name: 'Asadbek',
    age: 24,
};
function getPropertyValue(obj, key) {
    return obj[key];
}
console.log(getPropertyValue(user, 'name')); // "Asadbek"
console.log(getPropertyValue(user, 'age')); // 24
