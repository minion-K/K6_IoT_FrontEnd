// 서버와 통신하는 API 호출 관련 로직 정의(코드 재사용 및 모듈화)

const API_BASE = process.env.VITE_API_BASE || 'http://localhost:8080/api/v1';

// cf) process.env.REACT.APP.API.BASE
// : 환경 변수
// - REACT 앱에서 API 서버의 기본 URL 같은 설정값을 외부에서 주입받을 때 사용