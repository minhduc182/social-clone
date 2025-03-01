import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 360px;
  padding: 16px 8px;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }
  
  @media (max-width: 1260px) {
    width: 280px;
  }
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ContactsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
`;

export const ContactsTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ContactsActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContactsAction = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.icon};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ContactAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const OnlineIndicator = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  border: 2px solid ${({ theme }) => theme.colors.card.background};
`;

export const ContactName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`; 