
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import DoctorList from './Components/DoctorList';
import ViewDoctor from './Components/ViewDoctor';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <Routes>
        <Route path='/' element={<DoctorList/>}/>
        <Route path='/view/:id' element={<ViewDoctor/>}/>
        </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
