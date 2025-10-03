import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Email inválido.');
      return;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError('Senha deve ter no mínimo 8 caracteres, letras e números.');
      return;
    }

    alert('Conta criada com sucesso!');
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registrar</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Nome:</label>
        <input
          type='text'
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Registrar
        </button>
      </form>

      <p className={styles.navText}>
        Já tem conta?{' '}
        <Link to='/login' className={styles.navButton}>
          Entrar
        </Link>
      </p>
    </div>
  );
};

export default Register;
