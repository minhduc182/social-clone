import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
  max-width: 940px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const CoverSection = styled.div`
  position: relative;
  height: 350px;
  border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const CoverPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CoverPhotoButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  svg {
    margin-right: 6px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ProfileInfo = styled.div`
  position: relative;
  padding: 0 15px 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const ProfileAvatar = styled.div`
  position: absolute;
  top: -120px;
  left: 15px;
  width: 168px;
  height: 168px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileAvatarButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.divider};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  svg {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 18px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ProfileName = styled.h1`
  margin-left: 180px;
  margin-top: 10px;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProfileBio = styled.p`
  margin-left: 180px;
  margin-top: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ProfileActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

export const ProfileActionButton = styled.button`
  background-color: ${({ primary, theme }) => 
    primary ? theme.colors.primary : theme.colors.input.background};
  color: ${({ primary, theme }) => 
    primary ? theme.colors.text.inverse : theme.colors.text.primary};
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  svg {
    margin-right: 6px;
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const ProfileTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 20px;
  padding: 0 15px;
`;

export const ProfileTab = styled.div`
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

export const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 15px;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
  
  h3 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const AboutItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const AboutIcon = styled.div`
  margin-right: 10px;
  font-size: 20px;
`;

export const AboutText = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
`;

export const FriendsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 15px;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 20px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const FriendsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const FriendsTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FriendsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 15px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FriendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FriendCard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendAvatar = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 5px;
`;

export const FriendName = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const PhotosSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 15px;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  grid-column: 2;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
  
  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

export const PhotosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const PhotosTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const PhotosLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 15px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

export const PhotoCard = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 4px;
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`; 