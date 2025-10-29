/*
  ! JS의 canvas 요소
  : HTML5의 <canvas> 태그를 이용하여 JavaScript로 동적인 그래픽을 그리는 기술
  - 웹 페이지에 도화지 같은 영역을 생성
  - 2D & 3D 그래픽, 애니메이션, 데이터 시각화 등의 시각적 효과 구현 가능
*/
var app = document.getElementById('app');
//! 2) 기본 상태 설정
var toolState = {
    color: '#000000', // 기본 검정색
    size: 5, // 기본 굵기
    isEraser: false // 기본 펜 모드
};
//! 3) 상태 변경 함수
// cf) keyof 연산자
// : 객체의 키 값들을 숫자나 문자열 리터럴 유니온 값으로 생성
// EX) 'color' | 'size' | 'isEraser'
//? @Param: ToolState 타입의 키와 해당 키의 타입을 제네릭을 통해 설정
// EX) key: 'color', value: string (ToolState color의 타입)
// EX) key: 'size', value: number
// EX) key: 'isEraser', value: boolean
function setTool(key, value) {
    // key: 'color' | 'size' | 'isEraser'
    // value: 각 속성값에 맞는 타입을 가진 데이터
    toolState[key] = value; // 상태 업데이트
}
//! 4) 툴바를 만드는 함수
function createToolbar() {
    //& 색상 선택
    var colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = toolState.color;
    colorInput.oninput = function () { return setTool('color', colorInput.value); };
    //& 브러시 크기 조절
    var sizeInput = document.createElement('input');
    sizeInput.type = 'range';
    sizeInput.min = '1';
    sizeInput.max = '10';
    //cf) input 태그의 value 값은 string
    sizeInput.value = toolState.size.toString();
    sizeInput.oninput = function () { return setTool('size', parseInt(sizeInput.value)); };
    //& 지우개 버튼
    var eraserButton = document.createElement('button');
    eraserButton.textContent = '지우개';
    eraserButton.onclick = function () {
        // 상태 토글: 지우개 >> 펜, 펜 >> 지우개
        toolState.isEraser = !toolState.isEraser;
        eraserButton.textContent = toolState.isEraser ? '펜' : '지우개';
    };
    //& 캔버스 초기화 버튼
    var clearButton = document.createElement('button');
    clearButton.textContent = '초기화';
    // 지정된 사각형 영역을 지워 투명하게 만드는 기능(x시작, y시작, x끝, y끝)
    clearButton.onclick = function () { return ctx === null || ctx === void 0 ? void 0 : ctx.clearButton(0, 0, canvas.width, canvas.height); };
    //& 그림 저장 버튼
    var saveButton = document.createElement('button');
    saveButton.textContent = '저장';
    saveButton.onclick = function () {
        var link = document.createElement('a');
        link.download = 'drawing.png'; // 저장 파일명
        link.href = canvas.toDataUrl(); // 이미지 URL 생성
        link.click(); // 자동 다운로드 실행
    };
    //& 툴바 한 곳에 저장
    var toolbar = document.createElement('div');
    toolbar.className = 'toolbar';
    toolbar.append(colorInput, sizeInput, eraserButton, clearButton, saveButton);
    //% 툴바 반환: HTMLElement
    return toolbar;
}
//! 5) 캔버스 생성
var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 500;
app === null || app === void 0 ? void 0 : app.appendChild(createToolbar());
app === null || app === void 0 ? void 0 : app.appendChild(canvas);
