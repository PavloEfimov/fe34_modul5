/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
const order = {
    bread: 10,
    apples: 25,
    chicken: 60,
    milk: 15,
    cheese: 40
  };

  const arr = [];
  for(key in order){
      arr.push(order[key])
  }
  
const orderSum = arr.reduce((accum, item,idx)=>accum+arr[idx],0)

  console.log(orderSum); // 150
// console.log(arr)