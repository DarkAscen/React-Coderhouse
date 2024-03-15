import './App.css'
import NavBar from './components/navbar.jsx';
import ItemListContainer from './components/itemlistcontainer.jsx';
import Footer from './components/footer.jsx';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />  
      <ItemListContainer greeting="¡Bienvenido a Game Parter!" />
      <Footer />
    </div>
  );
}

export default App
