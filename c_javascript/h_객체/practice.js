// ! 배열
// 변수종류(const/let) 변수명 = [값1, 값2, ...];

// ! 함수
// 1) 함수 선언식: function 함수명(매개변수 나열) { ... }
// 2) 함수 표현식: 변수종류 변수명 = function() { ... }
// 3) 화살표 함수: 변수종류 변수명 = () => { ... }

// ! 객체
// ? 키와 값의 쌍으로 나열 (속성과 기능 사이는 ,로 분리)

/* 
  변수종류 변수명 = {
    키: 값,               // 속성
    키: {
      키:값,
      키:값
    }
    키: function() {     // 기능, 행위
    
    }    
    ...
  }

  변수명(객체명).속성명;
  변수명(객체명).기능명();
*/

// ! 객체, 배열, 함수 복습 문제

// == 문제 1 ==
// 객체 생성
// : person 객체 생성 - name(문자열), age(숫자), isStudent(boolean) 속성 추가

// cf) boolean 타입 변수 명명 규칙
//    : true(참), false(거짓) - 2가지의 값만을 가짐
//    >> is, has와 같이 동사와 명사를 결합한 의문문 변수명을 주로 사용
//    EX) is + 명사: isStudent / isAnimal
//        has + 명/동사: hasEatLunch / hasCold

let person = { // 객체 생성 리터럴 방식: {} 사용
  name: '홍길동',
  age: 50,
  isStudent: false
}

// 객체의 속성값이 접근
// 1) 객체명.속성명;
// 2) 객체명[속성명]
console.log(person.age);
console.log(person['name']);

// 배열 생성
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가 (3가지 이상)
// - 두 번째 과일 콘솔에 출력
let fruits = ['banana', 'apple', 'mango'];
console.log(fruits[1]);

// 함수 생성
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 add 함수 정의
// >> 매개변수 o, 반환값 o

// function add(a, b) {
//   return a + b;
// }

// let add = function(a, b) {
//   return a + b;
// }

let add = (a, b) => a + b;

console.log(add(3, 5));

// ! 문제 2
/*
  ? 배열의 요소를 순회하여 각 요소의 인덱스/키를 변수에 할당
  : 중괄호 내에서 인덱스/키를 활용
  >> 배열명[인덱스명]
  >> 객체명["키명"]

  for(let 변수명 in 배열명/객체명) {
  
  }

*/
console.log('=== 문제 2 ===');
for(let item in person) {
  console.log(`${item}: ${person[item]}`);
}

let upperFruits = fruits.map(fruit => fruit.toUpperCase());


