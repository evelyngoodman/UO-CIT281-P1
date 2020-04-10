// jshint esversion: 6

// Req. 3b
let arrAvg = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; {
    avg=sum / arr.length;
    }
  }
  return avg;
};
console.log(arrAvg([6, 2, 4]));
console.log(arrAvg([2, 3, 5, 7, 9]));

//Req. 3c
const arrMax=(arr) => {
  let max=arr[0];
  arr.forEach((num) => {
    if (num>max){
    max=num;}
  });
  return max;
};
console.log(arrMax([2, 3, 5, 7, 9]));
console.log(arrMax([6, 2, 4]));

//Req. 3d
let sumEvens=(arr) => {
  var sum=0;
  for (var i=0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      sum=sum+arr[i];
    }
  }
  return sum;
};
console.log(sumEvens([3, 4, 5, 6]));
