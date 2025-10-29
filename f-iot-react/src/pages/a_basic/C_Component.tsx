import React from 'react'
// import B_React_Counter from './B_React_Counter'
import B_React_Counter from '@/pages/a_basic/B_React_Counter'

/*
! 컴포넌트(Component)
: 사용자 인터페이스(UI)를 구축하는 기본 단위 요소
- 함수형 컴포넌트 사용

? 컴포넌트 사용 방법
1) 컴포넌트 내보내기
  > export default : 컴포넌트명 변경 가능 - {} 미사용
  > export         : 컴포넌트명 변경 불가능 - {} 사용

2) 컴포넌트 가져오기
  > 불러올 환경에서 경로를 지정
  : Vite React는 상대경로, 절대경로 모두 사용 가능
  : @(기본 URL 설정)를 사용한 절대 경로 사용을 권장
  > vite.config.ts와 tsconfig.app.json 파일에 각각 경로 지정 필수

? 컴포넌트 특징
: 파일명이 반드시 대문자로 시작 (UpperCamelCase)
  EX) MainContainer, NavBar 등
      - JS/TS의 일반 함수 형태와 구분
        > 일반 함수 (lowerCamelCase 사용)

: rfc, rfce 스니펫 사용 시 
  - 파일명이 함수명으로 구현, 해당 함수는 컴포넌트로 인식
  - 파일명을 대문자로 작성 권장

  cf) index.tsx 파일명
  : 폴더명을 활용한 import를 사용 하기 위함
  - 내부의 함수(컴포넌트)명은 대문자로 수정
  - 외부에서 인식 가능한 컴포넌트로 생성
*/

function C_Component() {
  return (
    <div>안녕하세요</div>
  )
}

export default C_Component