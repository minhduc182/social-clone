import styled from 'styled-components';

export const RegisterContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const RegisterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  width: 100%;
  max-width: 500px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const RegisterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const RegisterTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const RegisterSubtitle = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const RegisterForm = styled.form`
  padding: 20px;
`;

export const InputGroup = styled.div`
  margin-bottom: 12px;
`;

export const RegisterInput = styled.input`
  width: 100%;
  padding: 11px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.input.background};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const BirthdayLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 5px;
`;

export const GenderOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const GenderOption = styled.div`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 6px;
  padding: 8px;
`;

export const GenderLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
`;

export const GenderRadio = styled.input`
  margin: 0;
  cursor: pointer;
`;

export const PolicyText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 16px 0;
  line-height: 1.4;
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondaryButton};
  }
`; 