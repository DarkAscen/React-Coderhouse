import './App.css'
import NavBar from './components/navbar.jsx';
import ItemListContainer from './components/itemlistcontainer.jsx';
import Footer from './components/footer.jsx';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/itemdetailcontainer.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
