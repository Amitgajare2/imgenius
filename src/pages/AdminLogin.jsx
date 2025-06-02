import React, { useState } from 'react';
import { Client, Account } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('Your project ID');

const account = new Account(client);

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await account.createEmailPasswordSession(email, password);
      navigate('/upload');
    } catch (err) {
      alert('Login failed: ' + err.message);
      console.error(err);
    }
  };

  return (
    <div className="login-form">
      <h2>Admin Login</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;