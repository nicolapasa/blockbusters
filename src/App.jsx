

import './App.css'

import { Route, Routes } from 'react-router-dom';
import DetailsMovie from './pages/DetailsMovie';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

function App() {




  return (
    <>
      <div className="container">
       <NavBar />
      <Routes>
      <Route path='/'  element={<HomePage />}  />
        <Route path='/details/:id'  element={<DetailsMovie />}  />
      </Routes>

      </div>
    </>
  )
}

export default App
