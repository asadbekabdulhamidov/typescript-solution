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
function getActiveUsers(users) {
    return users.filter((user) => user.isActive);
}
const users = [
    { id: 1, name: 'Asadbek', isActive: true },
    { id: 2, name: 'Jasur', isActive: false },
    { id: 3, name: 'Malika', isActive: true },
];
console.log(getActiveUsers(users));
