/*
    1. Используя метод filter, пройдите по массиву guests
      и составьте массив только тех гостей, поле isActive
      которых true.
       
    2. Напишите функию getActiveGuests(guests), принимающую 
      один параметр guests - массив объектов гостей. 
      Функция должна возвращать массив объектов гостей,
      значение поля isActive которых true.
       
    3. Напишите функцию getGuestsOlderThan(guests, age), где 
      guests - массив объектов гостей, age - предел возраста 
      для сортировки. Функция возвращает массив объектов значение
      свойства age которых больше чем параметр age.
*/

const guests = [
    {name: 'Mango', age: 20, isActive: true},
    {name: 'Poly', age: 18, isActive: false},
    {name: 'Ajax', age: 30, isActive: true},
    {name: 'Chelsey', age: 45, isActive: false}
  ];

  console.log(guests.filter(user=>user.isActive))

  const getActiveGuests = (guests)=>guests.filter(user=>user.isActive)

  const getGuestsOlderThan = (guests, age)=>guests.filter(user=>user.age>age)
  
  // Вызовы функции для проверки
  console.log(
    getActiveGuests(guests)
  ); // массив из 2-х объектов Mango и Ajax
  
  console.log(
    getGuestsOlderThan(guests, 25)
  ); // массив из 2-х объектов Ajax и Chelsey
  
  console.log(
    getGuestsOlderThan(guests, 35)
  ); // [{name: 'Chelsey', age: 45, isActive: false}]
  
  console.log(
    getGuestsOlderThan(guests, 55)
  ); // []