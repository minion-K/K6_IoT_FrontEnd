/*
  학생 성적 관리 시스템

  ! 학생 객체 데이터
  - id      : 학생 고유 번호
  - name    : 학생 이름
  - scores  : 과목별 성적을 저장하는 객체 { Math: 85, English: 90, Science: 78 }

  ! 1) Student 클래스
  - 생성자에 의해 id, name, scores 초기화

  ? cf) JS 생성자: constructor
        - 생성자 내부의 this로 호출되는 변수는 필드로 자동 선언
        Java 생성자: 클래스명과 동일

  - getAverageScore() 메서드 구현
    : 학생 평균 성적 계산
    ? Object.values(), reduce() 사용
  ! 2) GradeManagement 클래스
    : 학생 관리 배열, 자동 증가 id 저장
    - 학생 추가: addStudent(name, scores)
    - 학생별 평균 성적 계산: getAverageScore()
      > 모든 학생의 id, 이름, 평균 성적을 포함하는 새 배열 반환
      > map(), reduce()
    - 조건에 따른 학생 필터링 & 정렬
      > getTopStudents(threshold)
        : 평균 성적이 주어진 값(한계점) 이상인 학생을 필터링 + 내림차순 정렬 반환
      > filter(), sort()

      cf) threshold: 한계점
*/

// ! 프로그램 구현
class Student {
  constructor(id, name, scores = {}) {
    // this.변수명 = 변수명;
    // [좌항]: 현재의 객체 내부의 필드에 접근
    // [우힝]: 필드의 할당할 실제 데이터

    // ? 기본 매개변수
    // : 해당 메서드 호출 시 데이터 전달이 생략될 경우
    //    , 기본 매개변수 값이 할당
    // > 필수 전달 데이터보다 뒤에 작성

    this.id = id;
    this.name = name;
    this.scores = scores;
  }

  // 학생 평균 성적 계산
  getAverageScore() {
    // Object.values(객체);
    // >> 전달된 객체가 가지는 속성의 값들로만 이루어진 배열을 반환
    // ? 객체: 키(key): 값(value)
    const values = Object.values(this.scores);
    if(values.length === 0) return 0;

    const sum = values.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / values.length;

    // ? toFixed(소수점 자리수)
    // : 해당 소수점 자리수 이하의 자리수를 갖는 "문자열"로 반환
    // > Number()로 형 변환하여 반환
    return Number(avg.toFixed(2));
  }
}

class GradeManagement {
  constructor() {
    this.students = [];
    this.nextId = 1;
  }
    // 학생 추가
  addStudent(name, scores) {
    const newStudent = new Student(this.nextId, name, scores);
    this.students.push(newStudent);
    console.log(`학생 추가: [${newStudent.id} ${newStudent.name}]`)
    this.nextId++;
  }
  
  // 모든 학생의 평균 성적 배열 반환
  // 반환 형태: [{id, name, average}, {id, name, average}, ...]
  getAverageScore() {
    // 자바스크립트에서 {}는 함수 본문으로 인식
    // : 객체 리터럴 반환 시 JS에게 해당 문법 구조가 코드블록이 아닌 객체임을 전달하기 위해
    //    () 소괄호 사용
    //    >> {}: 코드 블록
    //    >> ({}): 객체 리터럴
    //    화살표 함수에서 객체를 즉시 반환할 떄는 소괄호로 감싸야 한다.
    return this.students.map((student) => ({
      id: student.id,
      name: student.name,
      average: student.getAverageScore(), // 내부적으로 reduce 사용
    }));
    // student: {id, name, scores} - scores 객체
    // >        {id, name, average} - average 숫자

  }

  // 조건(평균 >= threshold)에 맞는 필터링 후 평균 내림차순 정렬
  getTopStudents(threshold) {

  }
  // 편의 출력 함수
  dispalyAll() {

  }
}