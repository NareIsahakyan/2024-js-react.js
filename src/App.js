
import './App.css';
import Header from './components/header/Header';
import './components/header/header.css';
import Footers from './components/Footer';
import './components/footer.css';
import Notes from './components/Notes';
import './components/notes.css';
import DoctorPage from './components/DoctorPage';

function App() {
  return (<>
  <div className="App">
      <Header />
      <Notes />
      <Footers />

      {/* <DoctorPage /> */}
    </div>
  </>

  );
}

export default App;
