import { Headphones } from '@mui/icons-material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SeachInput from './components/SeachInput/Index'
import Home from './pages/Home'
import Seach from './pages/Seach'

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='' element={ <Home /> }/>
          <Route path="/seach" element={ <Seach /> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App