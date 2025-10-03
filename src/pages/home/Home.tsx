import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  user: { name: string; points: number; referralLink: string };
  onLogout: () => void; // função para deslogar
}

const Home: React.FC<HomeProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(user.referralLink);
    alert('Link copiado!');
  };

  const handleLogout = () => {
    onLogout(); // limpa o usuário
    navigate('/login'); // redireciona para login
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bem-vindo, {user.name}!</h2>
      <p className={styles.text}>Sua pontuação atual: {user.points}</p>
      <p className={styles.text}>Seu link de indicação:</p>

      <div className={styles.referralBox}>
        <input
          type='text'
          className={styles.referralInput}
          value={user.referralLink}
          readOnly
        />
        <button className={styles.referralButton} onClick={handleCopy}>
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
