// % JS의 배열
// : 여러 개의 데이터를 순차적으로 나열한 자료구조
// - 다양한 타입을 하나의 배열에 저장 가능
// - 배열의 크기가 고정적이지 않음 (동적)

// ! 1. 배열 생성 방식
// 1) 리터럴 방식

// 변수종류 변수명 = ['요소1', '요소2', '요소3', ...];
let fruits = ['사과', '오렌지', '망고']; // 대괄호 안에 원하는 요소를 ,로 구분하여 나열
let numbers = [1, 2, 3, 4, 5];
let empty = [];
let variableValues = [1, '문자', true, undefined, null, [1, 2, 3]];

// 2) Array 생성자 사용 방식
// : 새로운 배열 생성 시 배열 크기, 초기값 지정 가능

// 변수 종류 변수명 = new Array(크기값);
// 변수 종류 변수명 = new Array(초기값을 나열);
let arrayFruits1 = new Array(3);
let arrayFruits2 = new Array('사과', '오렌지', '망고');

// ! 2. 배열의 활용
// ? 1) 요소의 접근 & 수정
const sports = ['축구', '야구', '농구'];

console.log(sports[1])

sports[2] = 'basketball';
console.log(sports);

// cf) 참조 자료형: 배열, 함수, 객체 등
//    >> 실제 데이터 X, 메모리 주소 저장하여 '참조'

const basketball = '농구';
// basketball = 'basketball'; > TypeError: Assignment to constant variable

// ? 요소 길이
console.log(sports.legnth); // 3

// cf) JS 배열은 동적 배열: 임의로 배열의 크기 수정 가능
//    >> 비워지는 요소 undefined 값 (새로운 공간의 타입)

sports.length = 6;

// 이어지는 undefined를 <3 empty items> 방법으로 표기
console.log(sports); // [ '축구', '야구', 'basketball', <3 empty items> ]

sports[5] = '배구';
sports[4] = '탁구';
console.log(sports); //[ '축구', '야구', 'basketball', <1 empty item>, '탁구', '배구' ]
console.log(sports[3]); // undefined