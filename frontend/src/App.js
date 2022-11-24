import './App.css';
import  {Route , Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>

    <div >
      <Header />
     < Routes >
     <Route  path='/' element={<Home />} />

     
     </Routes>
     <Footer />
    </div>
    </>
  );
}

export default App;
