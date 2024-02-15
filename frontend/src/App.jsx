import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConnectPage } from './pages/ConnectPage';
import { Login } from './pages/Login';
import { ManagePage } from './pages/ManagePage';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/connect-page" element={<ConnectPage />} />
        <Route path="/manage-page" element={<ManagePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
