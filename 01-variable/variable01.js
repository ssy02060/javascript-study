var userId = 1;
var userName = 'Lee';

var user = {id : 1, name : 'Lee'};


//  변수명은 식별자 -> 메모리 주소를 기억함 -> 해당 메모리 안에 들어있는 값을 리턴함
var users = [
    {id : 1, name : 'Lee'},
    {id : 2, name : 'Kim'}
];

// 변수를 선언
console.log(users);
console.log(user);
console.log(userId);
console.log(user.id);
console.log(users[0].id);
console.log(users[0].name);
console.log(users[1].name);

