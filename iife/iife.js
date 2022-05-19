// (function main() {
//   const aaa = '123';
//   console.log("hello")
// })()

// main()

// for(var i = 0; i < 10; i++){
//  setTimeout(function(){
//   console.log(i);//biến i ở đây là biến i của for
//  });
// }

// for(var i = 0; i < 10; i++){
//  (function(i){//IIFE tạo ra một scope khác cho từng i
//   setTimeout(function(){
//    console.log(i);
//   });
//  })(i);//biến i ở đây được tạo riêng cho từng IIFE 
// }