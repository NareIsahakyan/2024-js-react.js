
import './App.css';
import Header from './components/header/Header';
import './components/header/header.css';
import Footers from './components/footer/Footer';
import './components/footer/footer.css';
import Notes from './components/notes/Notes';
import './components/notes/notes.css';
import DoctorPage from './components/doctorPage/DoctorPage';
import'./components/doctorPage/doctorPage.css';
import LangProvider  from './contexts/LangContext';
import { Route, Routes} from 'react-router-dom';
import * as React from 'react';
import List from './components/notes/List';


function App() {
  return (<>
  <div className="App">
    <LangProvider>
      <Header />
      <Routes >
        <Route path='/' element={ <Notes />}>
        <Route path=':sortBy' element={ <List />}/>
        <Route path='*' element={<div style ={{fondSize:"50px", color:"#56CCF2", marginTop:"150px"}}>Not Found</div>}/>
        </Route>
        <Route path ='/doctorPage' element={<DoctorPage />}/>
        <Route path='*' element={<div style={{fontSize :"50px", color:'#56CCF2', marginTop:'150px' }}>Not Found</div>} />
      </Routes>
      <Footers />
      </LangProvider>
    </div>
  </>

  );
}

export default App;
