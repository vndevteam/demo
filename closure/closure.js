// Viết code ngắn gọn
// console.log('[INFO] info 1');
// console.log('[INFO] info 2');
// console.log('[INFO] info 3');

// console.log('[ERROR] error 1');
// console.log('[ERROR] error 2');

// console.log('[WARNING] warning 2');

// function logger(type) {
//   function message(content) {
//     console.log(`[${type}] ${content}`);
//   }

//   return message;
// }

// const info = logger('INFO');
// info('info info 1');
// info('info info 2');


// ----------------------------------------
// Biểu diễn private trong OOP
// function storage() {
//   const store = [];

//   return {
//     get() {
//       return store;
//     },
//     remove(index) {
//       store.splice(index, 1);
//     },
//     add(value) {
//       store.push(value);
//     }
//   }
// }

// const a = storage();

// console.log(a.get());

// a.add('hello');
// a.add('xin chao')
// a.add('bonjour')

// console.log(a.get());

// a.remove(1)

// console.log(a.get());
