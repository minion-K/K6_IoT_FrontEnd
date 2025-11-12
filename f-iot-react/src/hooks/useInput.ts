import { useState } from "react";

type UseInputReturn = {
  value: string; //% 입력 필드의 현재값
  handleReset: () => void; //% 초기값으로 되돌리는 이벤트 핸들러
  bind: {
    //% input 속성에 바로 연결 가능한 객체 {value, onChange}
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  };
};

export function useInput(initialValue: string):UseInputReturn {
  const [value, setValue] = useState<string>(initialValue);

  const hadleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: hadleInputChange,
  };

  return { value, handleReset, bind };
}
