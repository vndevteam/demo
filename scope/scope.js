// // Global

// let index = 0;

// function increase() {
//   index++;
//   console.log(index);
// }

// function increase2() {
//   index++;
//   console.log(index);
// }

// increase();
// increase2();

// // Global object trong nodejs

// console.log(global);

// --------------------------------------------------------
// // Code block

// {
//   const message = 'hello world!';
//   console.log(message);
// }

// console.log(message);

// --------------------------------------------------------
// // Local - Hàm

// function logger() {
//   const message = 'hello world!';
//   console.log(message);
// }

// logger();

// console.log(message);

// --------------------------------------------------------
// // Khi gọi mỗi hàm thì nó sẽ tạo ra 1 phạm vi mới

// function logger() {
//   let index = 0;
//   while (index < 5) {
//     index++;
//     console.log(index);
//   }
// }

// logger()
// console.log('------------')
// logger()

// --------------------------------------------------------
// //Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
// function logger() {
//   let index = 0;
//   function increase() {
//     let element = 1;
//     while (index < 5) {
//       index++;
//       element++;
//       console.log(index, element);
//     }
//   }
//   increase();
// }

// logger();

// --------------------------------------------------------
// Ví dụ

// const index = 1;

// {
//   {
//     {
//       {
//         console.log(index);
//       }
//     }
//   }
// }

// const index = 1;

// {
//   {
//     {
//       const index = 2;
//       {
//         const index = 3;
//         console.log(index);
//       }
//     }
//   }
// }

// --------------------------------------------------------
// Khi nào 1 biến bị xoá khỏi bộ nhớ?
// Biến trong hàm được tham chiếu bởi 1 hàm?

// function logger() {
//   let index = 0;

//   function counter() {
//     return ++index;
//   }

//   return counter;
// }

// const log = logger();

// console.log(log());
// console.log(log());
// console.log(log());

// const log2 = logger();
// console.log(log2());
// console.log(log2());
// console.log(log2());

//---------------------
// {
//   {
//     {
//       {
//         var e = "hello world";
//       }
//     }
//   }
// }
// console.log(e);

// ---------------------------

// function a() {
//   var index = 0;
// }

// function b() {
//   a();
//   console.log(index);
// }
// b();
