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
