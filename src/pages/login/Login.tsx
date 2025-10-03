import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css';

interface LoginProps {
  onLogin: (user: {
    name: string;
    points: number;
    referralLink: string;
  }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    // Simulação de login válido
    onLogin({
      name: 'Usuário Teste',
      points: 0,
      referralLink: 'https://meusite.com/ref/12345',
    });
    navigate('/home');
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
