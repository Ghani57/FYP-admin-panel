import './App.css';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  <ToastContainer />
    </div>
  );
}

export default App;
