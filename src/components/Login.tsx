import { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  padding: 2rem;
`;

const LoginBox = styled.div`
  background-color: #2a2a2a;
  padding: 3rem;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #808080;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  background-color: #333;
  border: 1px solid #444;
  color: #fff;
  font-family: 'Courier New', monospace;
  border-radius: 2px;
  &:focus {
    outline: none;
    border-color: #808080;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #808080;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  &:hover {
    background-color: #666666;
  }
`;

const ErrorMessage = styled.div`
  color: #808080;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'carl' && password === 'jung') {
      navigate('/assignments');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>ICA</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login; 