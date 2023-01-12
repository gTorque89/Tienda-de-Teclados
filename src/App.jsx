
import './App.css';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <ItemListContainer/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
