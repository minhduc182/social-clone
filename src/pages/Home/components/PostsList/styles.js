import styled from 'styled-components';

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 12px 16px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const PostAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.icon};
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const PostTime = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PostOptions = styled.div`
  width: 36px;
  height: 36px;
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

export const PostContent = styled.div`
  margin-bottom: 12px;
`;

export const PostText = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 12px;
  font-size: 15px;
  line-height: 1.3333;
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const PostActionCount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const PostAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 8px 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 600;
  font-size: 15px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    margin-right: 6px;
  }
`;

export const PostComments = styled.div`
  padding-top: 8px;
`;

export const CommentForm = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentAvatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.icon};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CommentInput = styled.input`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 20px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`; 