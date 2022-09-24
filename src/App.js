//Os componentes renderizam o JSX, junto com o App.js. 
import { useState } from 'react';
import SeuNome from './components/Eventos/SeuNome';
import './App.css';
import Saudacao from './components/Eventos/Saudacao';

function App() {
  //Normalmente essas variáveis estariam junto com o componente, porém para usar o stateLift precisa colocar essas variáveis em um local em que o pai e o filho serão utilizados.
  const[nome, setNome] = useState();
 
  return (
    <div className="App"> 
      <h1>StateLift</h1>
      {/* Componente pai */}
      <SeuNome setNome={setNome}/>
      {/* Componente filho */}
      {/* {nome} */}

      <Saudacao nome={nome}/>

    </div>
  );
}

export default App;
