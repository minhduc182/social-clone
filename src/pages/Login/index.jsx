import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import {
  LoginContainer,
  LoginWrapper,
  LoginLeft,
  LoginLogo,
  LoginTitle,
  LoginSubtitle,
  LoginRight,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginForgot,
  LoginDivider,
  CreateAccountButton,
  LoginFooter,
  LoginFooterText
} from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra đơn giản
    if (!email || !password) {
      setError('Vui lòng nhập email và mật khẩu');
      return;
    }
    
    // Giả lập đăng nhập thành công
    console.log('Đăng nhập với:', { email, password });
    navigate('/');
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginLeft>
          <LoginLogo>
            <FaFacebook />
          </LoginLogo>
          <LoginTitle>Social Clone</LoginTitle>
          <LoginSubtitle>
            Social Clone giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </LoginSubtitle>
        </LoginLeft>
        
        <LoginRight>
          <LoginForm onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            
            <LoginInput
              type="text"
              placeholder="Email hoặc số điện thoại"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <LoginInput
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <LoginButton type="submit">Đăng nhập</LoginButton>
            
            <LoginForgot to="/forgot-password">Quên mật khẩu?</LoginForgot>
            
            <LoginDivider />
            
            <CreateAccountButton as={Link} to="/register">
              Tạo tài khoản mới
            </CreateAccountButton>
          </LoginForm>
          
          <LoginFooter>
            <LoginFooterText>
              <strong>Tạo Trang</strong> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
            </LoginFooterText>
          </LoginFooter>
        </LoginRight>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login; 