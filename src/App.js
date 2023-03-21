import './App.css';
import { NavBar } from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './component/banner';
import { Skills } from './component/skills';
import { Projects } from './component/projects';
import { Contact } from './component/contact';
import { Footer } from './component/footer';
import { Resume } from './component/resume';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
