//! JSONPlaceholder의 photos 데이터 사용
// : https://jsonplaceholder.typicode.com/photos?albumId=1

//! 요구사항 정리
// 1. 각 페이지에 photos 데이터의 사진 4개씩 첨부
// : 50개의 데이터를 각 페이지에 4개씩 첨부
// : 50 === (4 * 12) + 2

// 2. 각 사진의 이름(title)은 사진 아래 작성(p태그)

// 3. 페이지 간 이동은 버튼(Previous, Next)으로 작동

//! 코드 작성

//? photo 객체 타입 정의
type photoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

let currentPage = 1; // 현재 페이지 번호 추적 (기본값: 1 - 첫페이지)
const photoPerPage = 4; // 한 페이지당 표시할 이미지 개수

async function fetchPhotos(page: number) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');

    if(!response.ok) {
      throw new Error('데이터를 가져오지 못하였습니다.');
    }

    const photos: photoType[] = await response.json();

    //? slice(시작인덱스, 끝인덱스)
    // : 배열 메서드, 특정 부분을 새로운 배열로 반환
    // - 시작인덱스 이상(포함), 끝인덱스 미만(제외)

    // 1페이지: 0 ~ 3 인덱스
    // 2페이지: 4 ~ 7 인덱스
    // ...

    // (page - 1) * photoPerPage: 각 페이지의 시작 인덱스
    // page * photoPerPage: 각 페이지의 끝 인덱스 (포함 X)

    return photos.slice((page - 1) * photoPerPage, page * photoPerPage);
  } catch(e) {
    console.error('Failes');
    return [];
  }
}

//? 사진을 렌더링 하는 함수: 4개씩 나누어진 사진 배열을 매개변수로 받음
function renderPhotos(photos: photoType[]) {
  const container = document.getElementById('photo-container') as HTMLElement;

  container.innerHTML = '';

  // 각 사진에 대한 HTML 요소 생성
  photos.forEach(photo => {
    const photoElment = document.createElement('div');

    photoElment.className = 'photo-item';
    photoElment.innerHTML = `
    <img src='${photo.thumbnailUrl}' alt='${photo.title}'/>
    <p>${photo.title}</p>
    `;

    container.appendChild(photoElment);
  });
}

//! 버튼 이벤트 등록
document.getElementById('prev-button')!.addEventListener('click', () => {
  // 이벤트가 등록될 DOM 요소에 대한 단언: ! 기호 
  if(currentPage > 1) {
    currentPage--;
    updatePhotos();
  }
});

document.getElementById('next-button')!.addEventListener('click', () => {
  if(currentPage < 13) {
    currentPage++;
    updatePhotos();
  }
});

//! 전체 프로젝트 실행
async function updatePhotos() {
  const photos = await fetchPhotos(currentPage);

  renderPhotos(photos);

  const pageNumber = document.getElementById('page-number');

  if(pageNumber) {
    pageNumber.textContent = `${currentPage}`;
  }
}

updatePhotos();