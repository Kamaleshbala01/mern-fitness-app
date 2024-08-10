import '../css/App.css'
import Login from '../jsx/login'
import Signup from '../jsx/signup'
import { Routes,Route } from 'react-router-dom'
import Home from '../jsx/home'
import Report from './report'
import ExerciseList from './exerciseList'
import ExerciseDetails from './exerciseDetails'

function App() {
  return (
    <>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/exerciseCard' element={<ExerciseList/>}></Route>
      <Route path='/exerciseDetails' element={<ExerciseDetails/>}></Route>
      <Route path='/report' element={<Report/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App
