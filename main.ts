// const arr: number[] = [1, 2, 3, 100, 4, 5, 6, 7, 8, 9, 10];
// let max: number = arr[0];

// const MaxN = (array: number[]) => {
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     console.log(max);
// };

// MaxN(arr);

// const arr: number[] = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10];
// const arr2: number[] = [];

// const x = (array: number[], arr2: number[]) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== array[i + 1]) {
//             arr2.push(array[i]);
//         }
//     }
//     console.log(arr2);
// };

// const arr: number[] = [10, 4, 2, 9, 3, 1, 6, 8, 7, 5];
// const arr2: number[] = [];

// const sort = (array: number[], result: number[]) => {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 const temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== array[i + 1]) {
//             result.push(array[i]);
//         }
//     }
//     console.log(result);
// };

// sort(arr, arr2);

// const sov: string | null = prompt("Enter a number");
// const num: number = Number(sov);

// const x = (sov: string | null, num: number) => {
//     if (sov === null || isNaN(num)) {
//         console.log("raqam emas");
//         return;
//     }

//     if (num > 0) {
//         console.log("musbat");
//     } else if (num < 0) {
//         console.log("manfi");
//     } else {
//         console.log("nol");
//     }
// };

// x(sov, num);

//6
// function diffObjects(
//     obj1: { [key: string]: any },
//     obj2: { [key: string]: any }
// ): { [key: string]: any } {
//     let result: { [key: string]: any } = {};

//     for (let key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             result[key] = obj1[key];
//         }
//     }

//     for (let key in obj2) {
//         if (obj2[key] !== obj1[key] && !(key in result)) {
//             result[key] = obj2[key];
//         }
//     }

//     return result;
// }

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 4, d: 5 };
// console.log(diffObjects(obj1, obj2)); // { b: 2, c: 3, d: 5 }

// //7
// function arrayToObject(arr: any[]): { [key: number]: any } {
//     let obj: { [key: number]: any } = {};
//     for (let i = 0; i < arr.length; i++) {
//         obj[i] = arr[i];
//     }
//     return obj;
// }

// const array = ["a", "b", "c", "d"];
// console.log(arrayToObject(array)); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd' }

// //8

// function flattenArray(arr: any[]): any[] {
//     let result: any[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flattenArray(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6, 7]
