import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Brand, Banner, Footer } from './components';
import { Home, Cart } from './pages';
import { Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Brand/>
      <Banner/>
      <Routes>
         <Route path="/" element={ <Home/>} />
         <Route path="/Cart" element={ <Cart/>} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
