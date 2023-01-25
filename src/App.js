import './App.css';
import { NavBar } from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './component/banner';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
    </div>
  );
}

export default App;
