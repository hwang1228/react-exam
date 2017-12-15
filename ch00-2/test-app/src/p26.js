function addContact(name, mobile, home='없음', address='없음',email='없음') {
    let str = `name=${name}, mobile=${mobile}, 
    home=${home}, address=${address}, email=${email}`;
    console.log(str);
}

addContact('홍길동', '010-2222-3333');
addContact('이몽룡', '010-2222-3332', '02-3429-5555', '서울시');