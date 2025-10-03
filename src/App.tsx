import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import type { User } from './interfaces/User.ts';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';


const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = !!user;

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login onLogin={setUser} />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/home'
          element={
            isLoggedIn ? (
              <Home user={user!} onLogout={handleLogout} />
            ) : (
              <Navigate to='/login' replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
