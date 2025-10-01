// ! 자바스크립트 파일 확장자: .js

// #간단한 JS 예제

// 기능
// : 버튼을 플릭하면 새로운 이름으로 입뎍받는 창이 생성

// 현재 웹 문서에서 버튼 태크를 찾아 지정
const button = document.querySelector('button');

// 저장된 변수에 클릭 이벤트를 추가'
// 변수명.기능();
// >> 객체의 속성/메서드 사용 .연산자 사용
// ? addEventListner()
button.addEventListener('click', updateName);

// updateName: 새로운 이름을 읽력받고 버튼을 수정하는 기능
function updateName() {
  const name = prompt('새로운 이름을 입력해주세요');
  button.textContent = `Player 1: &{name}`;
}

// ! 플러그인 설치
// - 코드 스니펫(javaScript (ES6) code snippets) 설치
// >> JS 단축키 제공

// clg: console.log();
// >> 출력문
//    - 간단한 코드, 결과값 출력 (개발자 친화 코드)
console.log('안녕하세요');

// fun
function name(params) {
  
}

// fof
for (const item of object) {
  
}

// fin
for (const item in object) {
  
}

//imp
// import moduleName from 'module';