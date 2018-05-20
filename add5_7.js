/*     
    1. Напишите функию allGuestsActive(guests), принимающую 
      один параметр guests - массив объектов гостей. 
      Функция должна возвращать true если значение 
      поля isActive всех объектов true, в противном случае false.
*/

const guestsA = [
    {name: 'Mango', isActive: true},
    {name: 'Poly', isActive: false},
    {name: 'Ajax', isActive: true},
  ];
  
  const guestsB = [
    {name: 'Mango', isActive: true},
    {name: 'Poly', isActive: true},
    {name: 'Ajax', isActive: true},
  ];
  
  const checkActivity = el=>el.isActive==true;
  const allGuestsActive =(guests)=> guests.every(checkActivity);

  // Вызовы функции для проверки
  console.log(
    allGuestsActive(guestsA)
  ); // false
  
  console.log(
    allGuestsActive(guestsB)
  ); // true
  