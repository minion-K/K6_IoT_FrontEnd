import React from 'react'

//! 자식 컴포넌트
// : 부모로부터 사용자에 대한 데이터를 전달(props) 받아 UI로 반환
// - props는 객체 형태

type User = {
  name: string;
  age: number;
  email: string;
}

type UserCardProps = {user: User};

// 구조 분해 할당
const UserCard = ({ user }: UserCardProps) => {
  console.log(user.name);
  console.log(user.age);

  const {name, age, email} = user;

  console.log(name);
  console.log(age);
  console.log(email);

  return (
    <>
      <p>{user.name}</p> / <p>{user.age}</p> / <p>{user.email}</p>
      <p>{name}</p> / <p>{age}</p> / <p>{email}</p>
    </>
  )
}

function H_Props() {
  const userData = {
    name: '김철수',
    age: 30,
    email: 'asd123'
  }

  return (
    <div>
      {/* 
        === 콘솔창 / 컴포넌트 모두 두 번 실행 ===
        : React18 이후의 StrictMode가 '개발 모드'에서 부작용 탐지를 위해 두번 
        렌더링
        > 실제 배포 환경에서는 한 번만 렌더링
      */}

      <UserCard user={{ name: '홍길동', age: 32, email: 'qwe123' }}/>
      <UserCard user={userData} />
    </div>
  )
}

export default H_Props