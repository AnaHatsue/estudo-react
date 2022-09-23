//Os componentes renderizam o JSX, junto com o App.js. 
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';



function App() {
  
  return (
    <div className="App"> 
      <h1>Testando Eventos</h1>
      <Evento/>
      <Form/>
    </div>
  );
}

export default App;
