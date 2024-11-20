import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import Congrasulation from './component/Congrasulation'
import Story from './component/Story_Page/Story'
import Tournament from './component/tournament/tournament'
import Quiz from './component/Quize/Quiz'
import Navbar from './component/Navbar'


function App() {

  return (
    <div className='container-game'>
        <Router>
          <Navbar></Navbar>
              <Routes>
                  <Route path='/' element= {<Quiz></Quiz>}></Route>
                  <Route path='/congrasulation' element={<Congrasulation></Congrasulation>}></Route>
                  <Route path='/tournament' element={<Tournament></Tournament>}></Route>
                  <Route path='/story' element={<Story></Story>}></Route>
              </Routes>
        </Router>
    </div>
  )
}

export default App
