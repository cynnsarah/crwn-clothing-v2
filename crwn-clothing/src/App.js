import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/home/home.component.jsx'
import Navigation from './components/routes/navigation/navigation.component.jsx'
import SignIn from './components/routes/sign-in/sign-in.component.jsx'
import './index.scss'



const Shop = () => {
  return <h1>I am the shop page</h1>
}


const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='/shop' element={<Shop />}/> 
        <Route path='/sign-in' element={<SignIn />}/> 
      </Route>
    </Routes>
    
  );
}

export default App;
