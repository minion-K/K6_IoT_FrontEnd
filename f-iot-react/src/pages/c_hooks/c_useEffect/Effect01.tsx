import React from 'react'

//! === useEffect (부수효과, side Effect) ===
// : React 함수형 컴포넌트에서 부수 효과를 수행하기 위한 Hook(기능)
// - 데이터 가져오기, 컴포넌트 렌더링 시 특정 작업 수행 등


//? 부수 효과
// : 컴포넌트의 "주요 기능 (UI 렌더링, 상태 관리)" 외에 발생하는 작업
// EX) API 호출, 이벤트 리스너 등록, 수동 DOM 조작

//? React 컴포넌트 생명 주기(LifeCycle)
// 1) 마운팅(Mounting)
//    : 컴포넌트가 DOM에 처음 삽입될 때 
//    % 초기 데이터 불러오기

// 2) 업데이트(Updating)
//    : state 또는 props가 변경될 때 (재렌더링)
//    % 특정 값 변화 감지 및 후속 작업

// 3) 언마운팅(UnMounting)
//    : 컴포넌트가 DOM에서 제거될 때
//    % 리소스 해제, 타이머 정리 등

function Effect01() {
  return (
    <div>Effect01</div>
  )
}

export default Effect01