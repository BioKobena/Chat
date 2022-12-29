import { useState } from 'react';
import axios from 'axios';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': 'e4635060-39fe-437c-a6c7-608481392408', 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, informations incorrect');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Bio Chat</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Nom d'utilisateur" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Mot de passe" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Commencer</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;