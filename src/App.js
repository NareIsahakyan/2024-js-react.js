
import './App.css';
import Header from './components/header/Header';
import './components/header/header.css';
import Footers from './components/footer/Footer';
import './components/footer/footer.css';
import Notes from './components/notes/Notes';
import './components/notes/notes.css';
import { LangContext } from './contexts/langContext';
import DoctorPage from './components/doctorPage/DoctorPage';
import { useContext } from 'react';

function App() {
  const language = useContext(LangContext)
  return (
  <>
    <div className="App">
        <Header language={language}/>
        <Notes language={language}/>
        <Footers language={language}/>
      {/* <DoctorPage /> */}
    </div>
  </>
  );
}

export default App;
