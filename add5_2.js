/*      
    1. Используя метод map, пройдите по массиву guests, 
    и составьте новый массив, заменив значение 
    поля isActive на противоположное.
         
    2. Напишите функцию setGuestState(guests, period), где
    guests - массив гостей, period - кол-во дней после
    которого считается что гость не активен.
    
    Если значение поля inactiveDays болше чем period,
    поставить для isActive значение false (если там еще не false)
    
    Если же значение inactiveDays меньше чем period,
    поставить для isActive значение true (если там еще не true)
*/

    

const guests = [
    {name: 'Mango', inactiveDays: 15, isActive: true},
    {name: 'Poly', inactiveDays: 8, isActive: false},
    {name: 'Ajax', inactiveDays: 32, isActive: false},
    {name: 'Chelsey', inactiveDays: 85, isActive: true}
  ];

  let guestsReverse = guests.map(item=>({...item,isActive:!item.isActive}))
  console.log(guestsReverse);

  let setGuestState = (users, period)=>users.map(item=>({...item,isActive:item.inactiveDays<period}))
  
  // Вызовы функции для проверки
  console.log(
    setGuestState(guests, 10)
  ); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true
  
  console.log(
    setGuestState(guests, 20)
  ); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true
  
  console.log(
    setGuestState(guests, 50)
  ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true