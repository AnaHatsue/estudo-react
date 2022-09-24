import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  return (
    // O Router envolve toda a aplicação.
    <Router>
      <ul>
        <NavBar />
      </ul>
      {/* O Switch/Routes é para distribuir os links entre as páginas. */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          {/* <Home /> */}
        <Route path="/empresa" element={<Empresa/>}/>
          {/* <Empresa /> */}
        <Route path="/contato" element={<Contato/>}/>
          {/* <Contato /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
