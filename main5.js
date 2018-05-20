/*
  Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.
  
  ОБЯЗАТЕЛЬНО ПРИ ВЫПОЛНЕНИИ: 
    - написать функцию-конструктор создающую объект со свойствами и методами
    - при работе с коллекциями данных использовать функциональные методы массивов, никаких for и т. п.
  
  Для создания объекта используйте функцию-конструктор, принимающую следующие параметры:
    - users - массив пользователей. Каждый пользователь это объект с полями:
        id - уникальный идентификатор
        login - почта
        password - пароль
        isActive - статус активности
    - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойств 
      являются массивы постов пользователя. Каждый пост состоит из:
        id - уникальный идентификатор
        text - текст поста
        likes - количество лайков поста
*/

function SocialBook (users = [], posts = {}) { 
    this.users = users,
    this.posts = posts,
    this.getAllUsers = function(){
        const allUsers = this.users.map(user=>user.login)
        return `список логинов всех пользователей: ${allUsers}`
    },
    this.getUserByLogin = function(login){
        const userByLogin = this.users.find(user=>user.login===login)
        return userByLogin
    },
    this.getUserStatus = function(id){
        const userStatusById = this.users.find(user=>user.id==id);
        const userStatus = userStatusById.isActive?'active':'inactive';
        return userStatus;
    },
    this.addUser = function(user){
        user.id = getId();
        user.isActive = false;
        return this.users.push(user);  
    },
    this.removeUserById = function(id){
        const removedUserById = this.users.filter(user=>user.id!==id)
        this.users = removedUserById
        return removedUserById
    },
    this.getUsersCount = function(){
        return `общее количество пользователей: ${this.users.length}`
    },
    this.getUserPosts = function(userId){
        return this.posts[userId]
    },
    this.addPost = function(userId, post){
        this.posts[userId].push(post)
        return this.posts[userId]
    },
    this.removePost = function(userId, postId){
        const RemovedPost = this.posts[userId].filter(post=>post.id!==postId)
        this.posts[userId] = RemovedPost
        return this.posts[userId]
    },
    this.getAllLikes= function(userId){
        let sum = 0
        this.posts[userId].forEach(post => {
            sum+=post.likes
        });
        return sum
    },
    this.addPostLike = function(userId, postId){
        let likedPost= this.posts[userId].find(post=>post.id==postId)
        return likedPost.likes+=1
    },
    this.getPostsCount = function(userId){
        const postsCount = this.posts[userId].length
        return `общее количество постов пользователя: ${postsCount}`
    }
 }

/*
  Используйте следующий массив пользователей при создании экземпляра SocialBook
*/
const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];

/*
  Используйте следующий объект постов пользователей при создании экземпляра SocialBook
*/
const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ],
};

/*
  Для создания уникального идентификатора для поля id, используйте 
  вспомогательную функцию getId(), возвращающую уникальную строку.
  
  К примеру: const user = { id: getId(), name: 'Mango' };
*/
const getId = () => "-" + Math.random().toString(36).substr(2, 9);

let socialBookUnit = new SocialBook(initialUsers, initialPosts);
console.log( socialBookUnit.getAllUsers() );
console.log (socialBookUnit.getUserByLogin('polysweet@skynet.ze') );
console.log (socialBookUnit.getUserStatus("-s19a6hqce"));
console.log (socialBookUnit.getUserStatus("-e51cpd4di"));
const userPavlo = { login: 'pavlo@ukr.net', password: 'pavlo777'};
socialBookUnit.addUser(userPavlo);
console.log(socialBookUnit.getAllUsers());
console.log (socialBookUnit.removeUserById("-e51cpd4di"));
console.log (socialBookUnit.getUsersCount());
console.log(socialBookUnit.getUserPosts("-s19a6hqce"))
let newId = getId()
const lastPost = { id: getId(), text: "post #4", likes: 0 }
console.log(socialBookUnit.addPost("-s19a6hqce", lastPost))
console.log(socialBookUnit.removePost("-s19a6hqce", "-5sgljaskg"))
console.log(socialBookUnit.getAllLikes("-s19a6hqce"));
console.log( socialBookUnit.addPostLike("-s19a6hqce", "-199hb6igr"))
console.log(socialBookUnit.addPostLike("-s19a6hqce",lastPost.id))
console.log(socialBookUnit.getAllLikes("-s19a6hqce"));
console.log(socialBookUnit.getPostsCount("-s19a6hqce"));


/*
  Добавьте в SocialBook следующие методы для работы с пользователями:
    - getAllUsers() - возвращает массив всех пользователей
    
    - getUserByLogin(login) - ищет и возвращает объект пользователя с совпадающим логином
    
    - getUserStatus(userId) - ищет пользователя по id и возвращает 'active' 
      если isActive true, в противном случае возвращает 'inactive'.
      
    - addUser(user) - принимает объект user с полями email и password и добавляет 
      ему поля id(используя функцию getId) и isActive (false). Затем добавляет пользователя в 
      свойство users самого экземпляра.
          
    - removeUserById(userId) - удаляет пользователя из массива пользователей по полю id
    
    - getUsersCount() - возвращает общее количество пользователей
*/

/*
  ***ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - выполнять по желанию***
  Добавьте в SocialBook следующие методы для работы с постами пользователей:
    - getUserPosts(userId) - возвращает массив постов пользователя с id равным userId
    
    - addPost(userId, post) - добавляет post в поле posts объекта socialBook по ключу userId. 
    
    - removePost(userId, postId) - удаляет post с id равным postId из поля posts 
      объекта socialBook по ключу userId
      
    - getAllLikes(userId) - возвращает сумму всех полей likes постов пользователя с id равным userId
          
    - addPostLike(userId, postId) - увеличивает значение поля likes на 1 у поста с id равным postId, 
      для пользователя с id равным userId
    
    - getPostsCount(userId) - возвращает общее количество постов пользователя с id равным userId
*/