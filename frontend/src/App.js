
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import RegistrationFormPage from './pages/RegistrationFormPage';
import WelcomePage from './pages/WelcomePage';
import UserState from "./context/user/UserState";
import Header from './components/Header';

function App() {

  return (
    <div className="page-grid">
      <UserState>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegistrationFormPage />} path="/registration" />
            <Route element={<WelcomePage />} path="/welcome" />
            <Route element={<ErrorPage />} path="/error/:code" />
            <Route element={<RegistrationFormPage />} path="/" />
          </Routes>
        </BrowserRouter>
      </UserState>
    </div>
  );
}

export default App;
