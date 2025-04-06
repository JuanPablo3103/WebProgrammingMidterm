import {Route, Routes} from 'react-router-dom'
import './styles/App.css'
import { Login } from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App