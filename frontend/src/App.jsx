import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { ConnectPage } from './pages/ConnectPage';
import { ManagePage } from './pages/ManagePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connect-page" element={<ConnectPage />} />
          <Route path="/manage-page" element={<ManagePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
