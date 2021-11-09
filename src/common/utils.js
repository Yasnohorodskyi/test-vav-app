// // Функция рандоммизатор
// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// // Функция перетасовки
// export const shuffle = (arr) => {
//   // let arr = arrSourse.slice();
//   for (let i = 0; i < arr.length; i++) {
//     let j = getRandomInt(0, i);
//     let t = arr[i];
//     arr[i] = arr[j];
//     arr[j] = t;
//   }
//   return arr;
// };

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(arr) {
  // let _arr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    let j = getRandomInt(0, i);
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

export default shuffle;
