// 도서 관리 시스템
// : 도서관의 책 관리 시스템을 구현

// ! 1. 프로젝트 데이터 정의
// 1) 도서관 - 객체
// 속성: 여러 도서
// 기능: 도서 추가 / 도서 목록 출력 / (특정) 도서 대여 / (특정) 도서 반납

// 2) 도서(책) - 객체
// 속성: 책 고유 ID, 책 제목, 책 저자, 책 대여 가능 여부


// - Library 객체 예시 (리터럴)
let exampleLibrary = {
  books: [], // 도서관의 책 목록을 저장

  // 다양한 메서드 정의
}

// - Book 객체 예시 (리터럴)
let exampleBook = {
  id: 1,
  title: '책 이름',
  author: '책 저자',
  isAvailable: true // 기본값
}

// ! 2. 프로젝트 구현
// ? Book 클래스: 각 책의 정보 저장 & 대여, 반납 기능 정의
class Book {
  // let id;
  // let title;
  // let author;
  // let isAvailable;

  // 생성자 함수(메서드)
  constructor(id, title, author) {
    // 생성자 함수에서 this 키워드로 속성 정의되는 값은 필드로 자동 정의
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  // +) 책 내부 기능 - 대여 기능
  // 객체명.rentBook();
  // : 메서드를 호출한 해당 책(객체)의 대여
  rentBook() {
    if(this.isAvailable) {
      // 대여 가능
      this.isAvailable = false;
      console.log(`${this.title}이(가) 성공적으로 대여되었습니다.`);
    }
  }
  // +) 책 내부 기능 - 반납 기능
  returnBook() {
    if(!this.isAvailable) {
      // this.isAvailable이 false인 상태 === 책 반납 가능
      this.isAvailable = true;
      console.log(`${this.title}이(가) 성공적으로 반납되었습니다.`);
    }
  }
}

// ? Library 클래스: Book 객체 목록 관리 & 추가 기능 구현
class Library {
  constructor() {
    this.books = []; // 초기에는 책 없음
    this.nextBookId = 1; // 책 고유 값
  }

  // +) 클래스에서 메서드 정의 시 함수의 형태 사용
  // : function 키워드가 생략된 형태

  // ! 책 등록
  addBook(title, author) {
    const newBook = new Book(this.nextBookId, title, author);
    
    //this(Library객체).books(객체의속성-배열).push(객체);
    this.books.push(newBook);

    console.log(`${title} 책이 도서관이 추가되었습니다. (저지: ${author})`);
    this.nextBookId++;
  }

  displayBook() {
    console.log('=== Library ===')
    this.books.forEach(book => {
      console.log(`${book.id}: ${book.title} by ${book.author} [ ${book.isAvailable ? '대여 가능' : '대여 중'} ]`);
    })
  }
  
  rentBook(id) {
    // +) findIndex: 조건에 일치하는 조건하는 요소의 인덱스를 반환 - 숫자
    //    find(): 조건에 일치하는 요소 그자체를 반환             - 배열의 요소 타입
    //          >> 찾는 요소가 없으면 undefined 반환
    const book = this.books.find(book => book.id === id)

    if(book) {
      // 해당 책이 도서관에 등록된 경우 - 책 객체의 내부 메서드 호출
      book.rentBook();
    } else {
      console.log('해당하는 책을 찾을 수 없습니다.')
    }
  }

  returnBook(id) {
    const book = this.books.find(book => book.id === id);

    if(book) {
      // 해당 책이 도서관에 등록된 경우 (책 반납 가능 여부는 미정)
      book.returnBook();
    } else {
      console.log('해당하는 책을 찾을 수 없습니다.');
    }
  }

  updateBook(id, newTitle, newAuthor) {
    // find 메서드는 배열에서 제공된 콜백함수를 만족하는 첫 번째 요소를 반환
    // this.books.find(book => book.title.includes("신데렐라"))
    // >> ['신데렐라의 여행', '신데렐라의 추억',]
    // >> '신데렐라의 여행'이 반환
    const book = this.books.find(book => book.id === id);

    if(!book) {
      // 해당 서적이 등록 되지 않음!
      console.log('해당 책을 찾을 수 없습니다.')
      return ;
    }

    // 등록된 책 - 수정
    // 논리연산자_ null과 undefined 검증 && 빈 문자열 검증
    const isNewTitleValid = newTitle && newTitle.trim().length > 0;
    const isNewAuthorValid = newTitle && newTitle.trim().length > 0;

    // 두 가지의 값이 모두 제공되니 않은 경우
    if (!isNewTitleValid && !isNewAuthorValid) {
      console.log('수정 사항이 없습니다.');
      return;
    }

    // newTitle이 있으면 newTitle / 없으면 기존의 책 이름(book.title)
    book.title = newTitle || book.title;
    book.author = newAuthor || book.author;

    console.log(`책 (id: ${book.id} 정보가 업데이트 되었습니다. 제목 - ${book.title}), 저자 - ${book.author}`);
  }

  removeBook(id) {
    const idx = this.books.findIndex(book => book.id === id);

    if(idx !==  -1) {
      const removedBook = this.books.splice(idx, 1)[0];
      // const [removedBook] = this.books.splice(idx, 1);

      console.log(`${removedBook.title} (id: ${removedBook.id}) 책이 도서관에서 삭제되었습니다.`);
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }
  // == 추가 기능 구현 ==
  // [필터링] 저자별 도서 필터링
  filterBooksByAuthor(author) {
    // 일치하는 저자 필터링
    // >> 전체 목록 조회 + 각 데이터의 author 값과 매개변수의 author값이 일치하는 경우 새로운 배열로 반환
    // >> 해당 배열 전체 출력
    //    : filter + forEach

    // cf) 검색값은 대소문자 구분 X: toLowerCase()로 두 값의 형태를 일치시킬 것
    const filterd = this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());

    console.log(`=== ${author}의 책 목록`);
    
    filterd.forEach(book => {
      console.log(`${book.id}: ${book.title} - ${book.author} [ ${book.isAvailable ? '대여 가능' : '대여 중'}]`);
    })
  }
  // [필터링] 제목 키워드로 도서 검색
  filterBooksByTitle(keyword) {
    // 포함되는 제목을 필터링
    // >> 전체 목록 순회 + 각 데이터의 title 값에 
    //    , 매개변수의 keyword 값이 포함(includes)된 경우 새로운 배열로 반환
    // >> 해당 배열 전체 출력
    //    : filter + forEach

    const filtered = this.books.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));

    console.log(`=== 제목에 ${keyword}가 포함된 책 목록`);
    filtered.forEach(book => {
      console.log(`${book.id}: ${book.title} - ${book.author} [ ${book.isAvailable ? '대여 가능' : '대여 중'}]`);
    })
  }
  // [필터링] 대여 가능 여부로 도서 필터링
  filterBooksByAvailable(isAvailable) {
    // +) isAvailable 값에 따라 true면 출력 시 ${대여 가능}인 책 목록
    //      , false면 출력 시 ${대여 중}인 책 목록
    const status = isAvailable ? '대여 가능' : '대여 중';
    const filtered = this.books.filter(book => book.isAvailable === isAvailable);

    console.log(`=== ${status}인 책 목록 ===`);
    filtered.forEach(book => {
      console.log(`${book.id}: ${book.title} by ${book.author}`);
    })
  }
  // [통계] 대여 가능 도서 수 집계
  countAvailableBooks() {
    // isAvailable이 true인 데이터만 추출하여 해당 배열의 길이를 측정
    // >> isAvailable의 변수를 통해 내부의 boolean값을 조건으로 사용
    const count = this.books.filter(book => book.isAvailable).length;

    console.log(`총 ${count}권의 책이 대여 가능합니다.`);
  }
}

// ! 3. 프로젝트 실행
// == 부산 도서관 ==
const busanLibrary = new Library();

busanLibrary.addBook('자바스크립트 공부는 재밌어', '홍길동');
busanLibrary.addBook('자바 공부는 재밌어', '김철수');
busanLibrary.addBook('SQLD 공부는 재밌어', '이영희');
busanLibrary.addBook('타입스크립트 공부는 재밌어', '김훈');
busanLibrary.addBook('리액트 공부는 재밌어', '이유리');

busanLibrary.displayBook();

busanLibrary.rentBook(1);
busanLibrary.displayBook();
busanLibrary.returnBook(1);
busanLibrary.displayBook();

busanLibrary.updateBook(2, 'Java 공부는 재밌어', null);
busanLibrary.updateBook(2, 'Java Study is fun', 'Kwon');

busanLibrary.removeBook(3);
busanLibrary.displayBook();

// == 양산 도서관 ==
const yangsanLibrary = new Library();

yangsanLibrary.addBook('자바스크립트 공부는 재밌어', '홍길동');
yangsanLibrary.addBook('자바 공부는 재밌어', '김철수');
yangsanLibrary.addBook('SQLD 공부는 재밌어', '이영희');
yangsanLibrary.addBook('타입스크립트 공부는 재밌어', '김훈');
yangsanLibrary.addBook('리액트 공부는 재밌어', '이유리');

yangsanLibrary.displayBook();

yangsanLibrary.filterBooksByAuthor('홍길동');
yangsanLibrary.filterBooksByTitle('스크립트');

yangsanLibrary.rentBook(1);
yangsanLibrary.rentBook(3);

yangsanLibrary.displayBook();

yangsanLibrary.filterBooksByAvailable(true);
yangsanLibrary.filterBooksByAvailable(false);

yangsanLibrary.countAvailableBooks();