import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.card.background};
  margin-top: 40px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 5px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterCopyright = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
  margin-top: 10px;
`; 