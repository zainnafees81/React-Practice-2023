import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >

      <Routes >
        <Route path="/" element={<SignIn />} />
        <Route path="SignUp" element={ <SignUp />} />
        <Route path='Home'  element={<Home />}/>

      </Routes>
</BrowserRouter>
  );
}

export default App;
