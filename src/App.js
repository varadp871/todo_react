import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ToDos from './Components/ToDos';

function App() {
  return (
    <div className="App">
     <Header title="My ToDoList" searchBar = {false}/>
     <ToDos />
     <Footer />
    </div>
  );
}

export default App;
