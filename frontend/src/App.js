
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import RegistrationFormPage from './pages/RegistrationFormPage';
import LandingPage from './pages/LandingPage';
import UserState from "./context/user/UserState";
import Header from './components/common/Header';
import HotelPage from './pages/HotelPage';
import ManageHotelsPage from './pages/ManageHotelsPage';
import ManageRoomsPage from './pages/ManageRoomsPage';
import ManageEmployeesPage from './pages/ManageEmployeesPage';
import Footer from './components/common/Footer';

function App() {

  return (
    <div className="page-grid">
      <UserState>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegistrationFormPage />} path="/registration" />
            <Route element={<LandingPage />} path="/landing" />
            <Route element={<ErrorPage />} path="/error/:code" />
            <Route element={<LandingPage />} path="/" />
            <Route element={<HotelPage/>} path="/hotel/:idProducto"/>
            <Route element={<ManageHotelsPage/>} path="/ManageHotelsPage"/>
            <Route element={<ManageRoomsPage/>} path="/ManageRoomsPage"/>
            <Route element={<ManageEmployeesPage/>} path="/ManageEmployeesPage"/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </UserState>
    </div>
  );
}

export default App;
