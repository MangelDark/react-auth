import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">  
       <BrowserRouter>   
        <Nav />
        <main className="form-signin">
       
            <Routes>
              <Route path='/' element={<Home></Home>} />
              <Route path='/login' element={<Login></Login>} />
              <Route path='/register' element={<Register></Register>} />
            </Routes>
        
         
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
