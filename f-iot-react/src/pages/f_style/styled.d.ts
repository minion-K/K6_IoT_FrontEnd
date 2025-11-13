// - d(declare, 선언하다)
// - type을 정의하기 위해서 존재하는 파일

import type { DefaultTheme } from "styled-components";

//? styled-components theme 설정 (디자인 시스템 중심)
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string
    };
    space: {
      xs: string;
      md: string;
      lg: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    }
  }
}

export const theme = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1e40af',
    secondary: '#6b7280'
  },
  space: {
    xs: '4px',
    md: '8px',
    lg: '16px'
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px'
  }
}