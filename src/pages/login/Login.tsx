import { useState } from 'react';
import './Login.module.css';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form className='form'>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          placeholder='Digite seu email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Senha:</label>
        <input
          type='password'
          name='password'
          placeholder='Digite sua senha'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
