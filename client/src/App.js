import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
// import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

function App() {
  const  dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router>
         <Navbar />
         <AllRoutes />
         
    
         
         
      </Router>
     
      
    </div>
  );
}

export default App;
