import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//nota: agregue 
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import LoginPage from './pages/login/LoginPage';



import './App.css'


//nota: incorporo function App para el login y lo que es el menu tiene que estar en fucton AppContent
function App() {
  return (
    <AuthProvider>
       <BrowserRouter>
       <AppContent/>
       </BrowserRouter>
    </AuthProvider>
   
  )
};

//nota: agregar ruta  /login (<Route path = '/login' elemnet = {<LoginPage />} /> )

function AppContent(){
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
