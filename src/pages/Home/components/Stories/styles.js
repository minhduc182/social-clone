import styled from 'styled-components';

export const StoriesContainer = styled.div`
  margin-bottom: 16px;
  overflow: hidden;
`;

export const StoriesWrapper = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 8px 0;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StoryCard = styled.div`
  position: relative;
  min-width: 120px;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
`;

export const CreateStoryCard = styled(StoryCard)`
  background-color: ${({ theme }) => theme.colors.card.background};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.card.background};
    transition: background-color ${({ theme }) => theme.transitions.normal} ease;
  }
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StoryUser = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
`;

export const StoryUserImage = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const StoryUsername = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const CreateStoryIcon = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  border: 4px solid ${({ theme }) => theme.colors.card.background};
  transition: border-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const CreateStoryText = styled.div`
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 13px;
  font-weight: 600;
  z-index: 1;
`; 