import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const LoginWrapper = styled.div`
  display: flex;
  max-width: 980px;
  width: 100%;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LoginLeft = styled.div`
  flex: 1;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 900px) {
    padding-right: 0;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const LoginLogo = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 80px;
  margin-bottom: 8px;
`;

export const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 16px;
`;

export const LoginSubtitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: 1.4;
`;

export const LoginRight = styled.div`
  flex: 1;
  max-width: 400px;
  width: 100%;
`;

export const LoginForm = styled.form`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 20px;
  margin-bottom: 28px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 16px;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.input.background};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const LoginForgot = styled(Link)`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 20px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const LoginDivider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 20px;
`;

export const CreateAccountButton = styled.button`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondaryButton};
  }
`;

export const LoginFooter = styled.div`
  text-align: center;
`;

export const LoginFooterText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  
  strong {
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`; 