// Basic Promise
// async function getData() {
//   return "Hello";
// }
// const dataPromise = getData();
// console.log(dataPromise); //Promise { 'Hello' }

// dataPromise.then((res) => {
//   console.log(res);
// });

// returning a promise
// const p = new Promise((resolve, reject) => {
//   resolve("Promise value!!");
// });
// async function getData2() {
//   return p;
// }

// const dataPromise2 = getData2();
// console.log(
//   dataPromise2.then((res) => {
//     console.log(res);
//   })
// );

// ======================== ASYNC AWAIT ========================= //

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
//   return val;
// }
// const data = await handlePromise();
// console.log(data);

// ============ DEEP DIVE INTO ASYNC AWAIT ============= //
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved!");
//   }, 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved!");
//   }, 10000);
// });

// async function handlePromise2() {
//   const val = await promise;
//   console.log("First");
//   console.log(val);

//   const val2 = await promise2;
//   console.log(val2);
// }
// const data2 = await handlePromise2();
// console.log("Hi");

// ======================== Promise APIS ========================= /
