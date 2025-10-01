// % 논리 연산자
// : 논리값 연산(boolean 값 반환)

// 논리곱) AND 연산 (&&)
// : 하나라도 false면 false
//    > 모두 true여야만 true

// 논리합) OR 연산 (||)
// : 하나라도 true면 true
//    > 모두 false여야만 false

// 부정논리) NOT 연산 (!)
// : boolean 자료형의 데이터값 반환(!변수명)

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2);
console.log(bool1 || bool2);
console.log(!bool1);

// % 삼항(조건) 연산자
// : 유일하게 피연산자를 3개 가지는 조건 연산자

// ? 기본 구조
// 표현식 ? 참일 경우 반환 값 : 거짓일 경우 반환값
let age = 21;
let bevarage = age >= 20 ? 'Beer' : 'Juice';
console.log(bevarage);

let isMember = false;
let discount = isMember ? '10%' : '5%';
console.log(discount);

// +) 삼항 연산자 중첩
//  : 조건식 내에서 또 다른 조건의 계산이 가능

age = 19;
let identity = age > 20 ? '성인' : (age <= 13 ? '어린이' : '청소년');
console.log(identity);