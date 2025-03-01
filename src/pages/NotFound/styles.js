import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const NotFoundIcon = styled.div`
  font-size: 80px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 20px;
`;

export const NotFoundTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 16px;
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 500px;
  margin: 0 0 32px;
  line-height: 1.4;
`;

export const NotFoundButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`; 