// 1) export된 특정 멤버 가져오기
import { PI as PIE, add as sum}from './export.js';
// : 사용하지 않는 import 기능은 연하게(흐리게) 표시
console.log(PIE); // 3.14159
console.log(sum(3, 5)); // 8

// +) as 없이 export에 정의된 이름만 사용
import  { PI, add } from './export.js';
console.log(PI); // 3.14159
console.log(add(7, 9)); // 16

// 2) export default로 내보낸 항목 가져오기
import a from './export.js';
import b from './export.js';
import c from './export.js';
// : 중괄호가 없는 import
// >> '무조건' 기본 내보내기
console.log(a(3, 5)); // 15
console.log(b(3, 6)); // 18
console.log(c(3, 7)); // 21

// 3) 모든 멤버를 하나의 객체로 가져오기
// : import * as 별핑 from './파일명.확장자';
// > 사용시 별칭.변수명 OR 별칭.함수명()
import * as exportData from './export.js';
console.log(exportData.name); 
// undefined > 전체 내보내기는 내부에서 내보낸 기능만 담고 있음
//    : export되지 않는 내부 멤버 접근 X (오류 발생은 하지 않음)
console.log(exportData.add(5, 8)); // 13
