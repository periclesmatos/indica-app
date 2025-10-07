import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const Home: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleCopyReferral = () => {
    if (!user) return;
    const referralUrl = `${window.location.origin}/register?referralCode=${user.id}`;
    navigator.clipboard
      .writeText(referralUrl)
      .then(() => {
        console.log('Link copiado:', referralUrl);
        alert('Link copiado!');
      })
      .catch((err) => {
        console.error('Erro ao copiar link:', err);
      });
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bem-vindo, {user ? user.name : ''}!</h2>
      {user && (
        <p className={styles.text}>
          Sua pontuação atual: {user.points}
        </p>
      )}
      <p className={styles.text}>Seu link de indicação:</p>

      <div className={styles.referralBox}>
        <input
          type='text'
          className={styles.referralInput}
          value={
            user ? `${window.location.origin}/register?ref=${user.id}` : ''
          }
          readOnly
        />
        <button className={styles.referralButton} onClick={handleCopyReferral}>
          Copiar Link
        </button>
      </div>

      <button className={styles.logoutButton} onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default Home;
