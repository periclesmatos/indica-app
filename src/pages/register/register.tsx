import React, { useState } from 'react';
import './Form.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-container'>
      <h2>Registro</h2>
      <form className='form'>
        <label>Nome:</label>
        <input
          type='text'
          name='name'
          placeholder='Digite seu nome'
          value={formData.name}
          onChange={handleChange}
          required
        />

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

        <button type='submit'>Registrar</button>
      </form>
    </div>
  );
};

export default Register;
