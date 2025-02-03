
import './App.css';
import Header from './components/header/Header';
import './components/header/header.css';
import Footers from './components/footer/Footer';
import './components/footer/footer.css';
import Notes from './components/notes/Notes';
import './components/notes/notes.css';
import DoctorPage from './components/doctorPage/DoctorPage';

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
