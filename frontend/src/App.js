
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import RegistrationFormPage from './pages/RegistrationFormPage';
import LandingPage from './pages/LandingPage';
import UserState from "./context/user/UserState";
import Header from './components/common/Header';
import HotelPage from './pages/HotelPage';

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
            <Route element={<RegistrationFormPage />} path="/" />
            <Route element={<HotelPage/>} path="/producto/:idProducto"/>
          </Routes>
        </BrowserRouter>
      </UserState>
    </div>
  );
}

export default App;
