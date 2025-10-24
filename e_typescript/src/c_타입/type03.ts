//! == 타입 별칭 (type alias) ==
// : 새로운 타입 이름을 생성해서 기존 타입을 참조할 수 있게 하는 기능
// - 코드의 재사용성과 가독성을 향상

// ? 기본 사용 방법
// : type 키워드 사용
// - type 타입별칭 = 타입;
// +) 타입별칭 지정 시 일반 변수와의 차이를 위해 "UpperCamelCase" 사용 권장

// % 1. 변수 타입 별칭: 사용 X
type textType = string;
let textMsg1: textType = '텍스트 문자열 입니다.';
let textMsg2: string = '텍스트 문자열 입니다.';

type NumberType = number;
let num1: NumberType = 123;
let num2: number = 234;