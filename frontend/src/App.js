import './App.css';
import  {Route , Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SongPlay from './components/SongPlay/SongPlay';
import Trending from './components/Trending/Trending';


function App() {
  return (
    <>

    <div >
      <Header />
     < Routes >
     <Route  path='/' element={<Home />} />
    <Route path="/song/:name" element={<SongPlay/>} />
    <Route path="/trending" element={<Trending/>} />
     
     </Routes>
     <Footer />
    </div>
    </>
  );
}

export default App;
