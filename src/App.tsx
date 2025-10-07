import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import { useAuthStore } from './store/authStore';
import { getMe } from './service/authService';
import Login from './pages/login/Login';

const App: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    const checkAuth = async () => {
      // o token já foi restaurado automaticamente do persist
      if (token && !user) {
        try {
          const me = await getMe();
          setAuth(me, token);
        } catch (err) {
          console.error('Erro ao buscar usuário:', err);
          localStorage.removeItem('auth-storage'); // limpa o persist
        }
      }
    };
    checkAuth();
  }, [setAuth, user, token]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona a raiz para home se logado, senão para login */}
        <Route path='/' element={ isLoggedIn ? <Home /> : <Navigate to='/login' replace /> } />

        {/* Rotas públicas */}
        <Route path='/login' element={ !isLoggedIn ? <Login /> : <Navigate to='/home' replace /> } />
        <Route path='/register' element={<Register />} />

        {/* Rota protegida */}
        <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate to='/login' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
