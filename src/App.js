//Os componentes renderizam o JSX, junto com o App.js. 
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Item from './components/Item';


function App() {

  
  return (
    <div className="App"> 
      <SayMyName nome="Ana" />
      <Frase/>
      <br></br>
      <Pessoa 
      nomeCompleto="Ana" 
      idade="25" 
      profissao="futura estagiária" 
      foto="https://via.placeholder.com/150"
      />
      <List/>
    </div>
  );
}

export default App;
