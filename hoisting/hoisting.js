// // Với biến var
// console.log(age);
// console.log(name);

// var age = 16;

// -------------------------------------------

// Với hàm
// console.log(sum(1, 2));

// function sum(a, b) {
//   return a + b;
// }

// Với let, const (Temporal Dead Zone)
// {
//   console.log(name);
//   let name = 'Nguyen Van A';
// }

// -------------------------------------------

// const index = 1;

// {
//   {
//     {
//       const index = 2;
//       {
//         console.log(index);
//         const index = 3;
//       }
//     }
//   }
// }

// -------------------------------------------
// ví dụ

// const counter = logger();

// console.log(counter());

// function logger() {
//   let index = 0;

//   return increase;

//   function increase() {
//     return ++index;
//   }
// }
