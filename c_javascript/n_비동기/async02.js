// ! 비동기 프로그래밍 & 콜백 함수

// ? 콜백 함수
function greet(name) {
  console.log(`Hello ${name}`);
}

// ? 메인 함수
// : 사용자의 입력을 처리하는 함수
function getUserInput(callback) {
  // let name = prompt('이름을 입력해주세요');
  // callback(name);
}

getUserInput(greet);

// ! 1. 콜백함수를 사용하는 비동기 요청 예시
// : 서버와 통신

// : cf) fetch: (데이터를)가져오다
function fetchUserData(userId, callback) {
  // 서버로부터 사용자 데이틑 가져와 해당 데이터를 처리하는 함수

  setTimeout(() => {
    const userData = {
      // 가상의 사용자 데이터
      id: userId,
      name: "홍길동",
      email: 'example;'
    }

    callback(userData)
  }, 3000);
}

// 사용자 데이터 처리 함수 (콜백 함수)
function handleUserData(user, callback) {
  console.log(`User data: ${user.name}`)

  // 콜백 함수 내에서 함수 실행 후 동작시킬 코드
  // : 중첩된 콜백함수
  // callback;
}

// fetchUserData();
fetchUserData(1, handleUserData);
console.log('메인 로직 - 중단되지 않고 실행!');

// ! 콜백 함수를 비동기에서 사용할 경우 '단점'
// : 함수가 중첩된 형식이 이어짐

function a() {
  console.log('a');
  
  function b() {
    console.log('b');
    function c() {
      console.log('c');
      /// ...
    }
  }
}

a();

// >> 콜백 지옥(callback hell)
//      : promice 또는 Async/Await 을 통해 다시 콜백 지옥 방지