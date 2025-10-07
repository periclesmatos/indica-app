import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import { useAuthStore } from './store/authStore';

const App: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona a raiz para home se logado, senão para login */}
        <Route
          path='/'
          element={
            isLoggedIn ? (
              <Navigate to='/home' replace />
            ) : (
              <Navigate to='/login' replace />
            )
          }
        />

        {/* Rotas públicas */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Rota protegida */}
        <Route
          path='/home'
          element={isLoggedIn ? <Home /> : <Navigate to='/login' replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
