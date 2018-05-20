/*
    1. Используя метод find, пройдите по массиву guests
      и найдите гостя с id равным 3.
      Результат будет {id: 3, name: 'Ajax', age: 30}
       
    2. Напишите функию getGuestById(guests, id), принимающую 
      guests - массив объектов гостей, id - идентификатор (число). 
      Функция должна возвращать объект гостя с совпадающим id.
*/

const guests = [
    {id: 1, name: 'Mango', age: 20},
    {id: 2, name: 'Poly', age: 18},
    {id: 3, name: 'Ajax', age: 30},
    {id: 4, name: 'Chelsey', age: 45}
  ];

  console.log(guests.find(user=>user.id==3))

  const getGuestById = (guests, id)=>guests.find(user=>user.id==id)
  
  // Вызовы функции для проверки
  console.log(
    getGuestById(guests, 3)
  ); // {id: 3, name: 'Ajax', age: 30}
  
  console.log(
    getGuestById(guests, 1)
  ); // {id: 1, name: 'Mango', age: 20}
  
  console.log(
    getGuestById(guests, 5)
  ); // undefined