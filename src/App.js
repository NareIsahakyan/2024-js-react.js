
import './App.css';
import Header from './components/header/Header';
import './components/header/header.css';
import Footers from './components/footer/Footer';
import './components/footer/footer.css';
import Notes from './components/notes/Notes';
import './components/notes/notes.css';
import DoctorPage from './components/doctorPage/DoctorPage';
import'./components/doctorPage/doctorPage.css';
import LangProvider ,{LangContext} from './contexts/LangContext';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import * as React from 'react';


function App() {
  return (<>
  <div className="App">
    <LangProvider value = {"ru"}>
      <Header />
      <Routes >
        <Route path='/' element={ <Notes />}/>
        <Route path ='/doctorPage/:userId' element={<DoctorPage />}/>
        <Route path='*' element={<div style={{fontSize :"50px", color:'#56CCF2', marginTop:'150px' }}>Not Found</div>} />
      </Routes>
      <Footers />
      </LangProvider>
    </div>
  </>

  );
}

export default App;
