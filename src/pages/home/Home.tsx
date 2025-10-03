import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [user] = useState({
    name: 'Usuário Teste',
    points: 0,
    referralLink: 'https://meusite.com/ref/12345',
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(user.referralLink);
    alert('Link copiado!');
  };

  return (
    <div className='home-container'>
      <h2>Bem-vindo, {user.name}!</h2>
      <p>
        Sua pontuação atual: <strong>{user.points}</strong>
      </p>
      <p>Seu link de indicação:</p>
      <div className='referral-box'>
        <input type='text' value={user.referralLink} readOnly />
        <button onClick={handleCopy}>Copiar Link</button>
      </div>
    </div>
  );
};

export default Home;
