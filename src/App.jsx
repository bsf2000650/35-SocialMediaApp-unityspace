import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
