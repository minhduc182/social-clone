import styled from 'styled-components';

export const FriendsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const FriendsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FriendsTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const FriendsCount = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FriendsTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 20px;
`;

export const FriendsTab = styled.div`
  padding: 15px 16px;
  font-weight: 600;
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.text.primary};
  border-bottom: ${({ active, theme }) => 
    active ? `3px solid ${theme.colors.primary}` : 'none'};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
    border-radius: 6px 6px 0 0;
  }
`;

export const FriendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const FriendCard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 12px;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const FriendAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 12px;
`;

export const FriendInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FriendName = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const FriendMutual = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 12px;
`;

export const FriendActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;

export const FriendButton = styled.button`
  flex: 1;
  background-color: ${({ primary, secondary, theme }) => 
    primary ? theme.colors.primary : 
    secondary ? theme.colors.input.background : 
    theme.colors.surface};
  color: ${({ primary, theme }) => 
    primary ? theme.colors.text.inverse : theme.colors.text.primary};
  border: none;
  border-radius: 6px;
  padding: 8px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  svg {
    margin-right: 6px;
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const FriendOptionsButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const EmptyStateText = styled.div`
  font-size: 18px;
  font-weight: 600;
`; 