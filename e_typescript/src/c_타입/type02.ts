// ! 타입스크립트 객체 타입

// ? 1. 객체 타입 지정(명시)
// {} 중괄호를 사용
// - 각 데이터별(속성별) 타입 명시의 구분은 세미콜론 사용 권장! (+ , 콤마 사용도 가능)

const user: {
  name: string;
  age: number;
  favorite: any[];
  height: number
} = {
  name: '홍길동',
  height: 178,
  age: 31,
  favorite: [1, '운동', false, null, undefined],
  // nickname: '미니언' - 타입 명시 하지 않은 속성은 정의할 수 없음
}

// ? 2. 객체의 선택 속성 (선택적 프로퍼티)
// : 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현
const hgd: {
  name: string;
  height?: number;
} = {
  name: '홍길동',
  // height: 178 - 생략해도 오류 X (선택적 속성)
};

// ? 3. 읽기 전용 속성
// : 속성명 앞에 readonly 키워드를 사용하여 해당 속성의 재할당을 금지
const readonlyUser: {
  readonly name: string;
  readonly age: number;
  address?: string;
} = {
  name: '홍길동',
  age: 31
};

// 객체의 속성값 수정
// 객체명.속성명 = 데이터
// readonlyUser.name = '김철수'; // Cannot assign to 'name' because it is a read-only property.
// readonlyUser.age = 32;      // Cannot assign to 'name' because it is a read-only property.
readonlyUser.address = '부산시 부산진구';

console.log(readonlyUser);
