
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
import './i18n';
import { AuthProvider } from './context/authContext';
import GetMe from './components/getme/getMe';
import './components/getme/getmestyle.css';
import PageOfAutorization from "./components/autorization/PageOfAutorization";
import './components/autorization/autorization.css'
import PatientsProfile from './components/profile/PatientsProfile';
import "./components/profile/patientsProfile.css";

function App() {
  return (<>
  <AuthProvider>
  <LangProvider>
  <div className="App">
    
    <Routes >
    <Route path='/' element={<PageOfAutorization/>}/>
    <Route path ='/getMe' element={<GetMe />}/>
    </Routes>

      <Header />
      <Routes >
        <Route path='/notes' element={ <Notes />}>
        <Route path=':sortBy' element={ <List />}/>
        <Route path='*' element={<div style ={{fondSize:"50px", color:"#56CCF2", marginTop:"150px"}}>Not Found</div>}/>
        </Route>
        <Route path ='/patientsProfile' element={<PatientsProfile />}/> 
        <Route path ='/doctorPage' element={<DoctorPage />}/> 
      </Routes>
      <Footers />
     
    </div>
    </LangProvider>
    </AuthProvider>
  </>

  );
}

export default App;
