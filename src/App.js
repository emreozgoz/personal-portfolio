import './App.css';
import { NavBar } from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './component/banner';
import { Skills } from './component/skills';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills/>
    </div>
  );
}

export default App;
