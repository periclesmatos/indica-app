import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useAuthStore } from '../../store/authStore';
import type { LoginRequest } from '../../interface/LoginRequest';
import { login } from '../../service/authService';

const Login: React.FC = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }
    const request: LoginRequest = { email, password };
    try {
      const response = await login(request);
      setAuth(response.user, response.token.tokenValue);
      navigate('/home');
    } catch (err) {
      console.error(`ERRO: ${err}`);
      setError('Falha ao fazer login.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Email:</label>
        <input
          type='email'
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.label}>Senha:</label>
        <input
          type='password'
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button type='submit' className={styles.button}>
          Entrar
        </button>
      </form>

      <p className={styles.navText}>
        Não tem conta?{' '}
        <Link to='/register' className={styles.navButton}>
          Registrar
        </Link>
      </p>
    </div>
  );
};

export default Login;
