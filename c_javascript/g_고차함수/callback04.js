// === 콜백 함수를 활용하는 JS의 '내장 함수' ===

// ! 타이머 함수 (비동기 콜백)
// : 특정 시간 이후에 함수를 실행하거나 일정 간격으로 함수를 반복실행 할 수 있게 해주는 함수

// ? cf) 비동기
// : 작업이 끝날 때까지 기다리지 않고 다음 코드를 바로 실행하는 방식
// > "콜백 함수"는 다른 함수의 인자로 전달되어, 특정 시점에 실행되는 함수
// > "비동기 콜백 함수"는 비동기 작업이 완료된 후 실행되는 콜백 함수
//    : 나중에 실행될 일을 미리 등록해두는 것

// 1) setTimeout(콜백함수, 시간);
// - 콜백 함수: 지정된 시간 이후에 '단 한번만' 실행될 함수
// - 시간: 밀리초 단위 (1s === 1000ms)

function runlater(name='홍길동') {
  console.log(`Hello, ${name} :)`)
}

runlater(); // Hello, 홍길동 :) >> 동기 프로그래밍

setTimeout(runlater, 2000); // Hello, 홍길동 :)
// setTimeout(runlater('김철수'), 2000);
// >> TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined
// >> 콜백 함수의 인자는 undefined여야만 한다.

// cf) 콜백 함수의 인자 전달 방법
// : 세 번째 인자부터 나열되는 값이 함수의 매개변수로 전달
setTimeout(runlater, 3000, '김철수'); // Hello, 김철수 :)

// cf) 함수 호출: 함수명(전달할 인자 나열);
// >> 호출부 () 작성 시 코드를 읽는 즉시 함수 실행!
// setTimeout(runlater(), 2000, '이영희'); 

function manyParam(name, age, job) {
  console.log(`${name} is ${age} years old and is ${job}`);
}

setTimeout(manyParam, 100, '홍길동', 31, 'developer'); // 홍길동 is 31 years old and is developer