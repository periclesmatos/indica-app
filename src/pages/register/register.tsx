import type { JSX } from 'react';
import styles from './Register.module.css';

export default function Register(): JSX.Element {
  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        role='region'
        aria-labelledby='register-title'
      >
        <h1 id='register-title' className={styles.title}>
          Criar conta
        </h1>
        <p className={styles.subtitle}>
          Preencha os campos abaixo para criar sua conta.
        </p>

        <form className={styles.form} noValidate>
          <div className={styles.field}>
            <label htmlFor='name' className={styles.label}>
              Nome
            </label>
            <input
              id='name'
              name='name'
              type='text'
              autoComplete='name'
              placeholder='Nome'
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor='email' className={styles.label}>
              E-mail
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='seu@email.com'
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor='password' className={styles.label}>
              Senha
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='new-password'
              placeholder='Crie uma senha'
              className={styles.input}
            />
          </div>

          <button
            type='button'
            className={styles.button}
            aria-label='Registrar'
          >
            Registrar
          </button>
        </form>

        <p className={styles.footerText}>
          Já tem conta?{' '}
          <a href='/login' className={styles.link}>
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
