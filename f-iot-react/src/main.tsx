import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import '@/styles/reset.css'
import '@/styles/variables.css'
import { theme } from './pages/f_style/C_StyleComponents.tsx'
import { ThemeProvider } from 'styled-components'
// import '@/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* styled-component 내부의 전역 스타일 데이터를 공유 */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
