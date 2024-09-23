
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Gallery from './components/gallery';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Header />}></Route>
        <Route exact path='about' element={<About />}></Route>
        <Route exact path='home' element={<Home />}></Route>
        <Route exact path='gallery' element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
