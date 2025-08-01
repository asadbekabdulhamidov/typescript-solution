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
// 👇 Bu yerga funksiya yozing
function sendNotification(notification) {
    if (notification.type === 'email') {
        console.log(`Email orqali yuborilmoqda: ${notification.email}`);
    }
    else if (notification.type === 'sms') {
        console.log(`SMS yuborilmoqda: ${notification.phone}`);
    }
    else if (notification.type === 'push') {
        console.log(`Push bildirishnoma yuborilmoqda: ${notification.deviceId}`);
    }
}
sendNotification({ type: 'email', email: 'user@example.com' });
