import React from 'react';
import { useParams } from 'react-router-dom';
import { FaCamera, FaEdit, FaPlus, FaEllipsisH } from 'react-icons/fa';
import {
  ProfileContainer,
  CoverSection,
  CoverPhoto,
  CoverPhotoButton,
  ProfileInfo,
  ProfileAvatar,
  ProfileAvatarButton,
  ProfileName,
  ProfileBio,
  ProfileActions,
  ProfileActionButton,
  ProfileTabs,
  ProfileTab,
  ProfileContent,
  AboutSection,
  AboutItem,
  AboutIcon,
  AboutText,
  FriendsSection,
  FriendsHeader,
  FriendsTitle,
  FriendsLink,
  FriendsGrid,
  FriendCard,
  FriendAvatar,
  FriendName,
  PhotosSection,
  PhotosHeader,
  PhotosTitle,
  PhotosLink,
  PhotosGrid,
  PhotoCard,
  PhotoImage
} from './styles';

// Dữ liệu mẫu cho trang profile
const profileData = {
  id: 1,
  name: 'Tô Minh Đức',
  coverPhoto: 'https://picsum.photos/id/1018/1000/300',
  avatar: 'https://i.pravatar.cc/150?img=12',
  bio: 'Sống vui vẻ và làm những điều mình thích ✨',
  friends: [
    { id: 1, name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Lê Văn C', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Phạm Thị D', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Hoàng Văn E', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'Ngô Thị F', avatar: 'https://i.pravatar.cc/150?img=6' }
  ],
  photos: [
    { id: 1, url: 'https://picsum.photos/id/10/300/300' },
    { id: 2, url: 'https://picsum.photos/id/11/300/300' },
    { id: 3, url: 'https://picsum.photos/id/12/300/300' },
    { id: 4, url: 'https://picsum.photos/id/13/300/300' },
    { id: 5, url: 'https://picsum.photos/id/14/300/300' },
    { id: 6, url: 'https://picsum.photos/id/15/300/300' },
    { id: 7, url: 'https://picsum.photos/id/16/300/300' },
    { id: 8, url: 'https://picsum.photos/id/17/300/300' },
    { id: 9, url: 'https://picsum.photos/id/18/300/300' }
  ],
  about: {
    work: 'Làm việc tại Công ty ABC',
    education: 'Học tại Đại học XYZ',
    location: 'Sống tại Hà Nội',
    relationship: 'Độc thân'
  }
};

const Profile = () => {
  const { id } = useParams();
  const isCurrentUser = id === 'me' || id === '1';
  
  return (
    <ProfileContainer>
      <CoverSection>
        <CoverPhoto src={profileData.coverPhoto} alt="Cover" />
        {isCurrentUser && (
          <CoverPhotoButton>
            <FaCamera /> Chỉnh sửa ảnh bìa
          </CoverPhotoButton>
        )}
      </CoverSection>
      
      <ProfileInfo>
        <ProfileAvatar>
          <img src={profileData.avatar} alt={profileData.name} />
          {isCurrentUser && (
            <ProfileAvatarButton>
              <FaCamera />
            </ProfileAvatarButton>
          )}
        </ProfileAvatar>
        
        <ProfileName>{profileData.name}</ProfileName>
        <ProfileBio>{profileData.bio}</ProfileBio>
        
        <ProfileActions>
          {isCurrentUser ? (
            <>
              <ProfileActionButton primary>
                <FaEdit /> Chỉnh sửa trang cá nhân
              </ProfileActionButton>
            </>
          ) : (
            <>
              <ProfileActionButton primary>
                <FaPlus /> Thêm bạn bè
              </ProfileActionButton>
              <ProfileActionButton>
                Nhắn tin
              </ProfileActionButton>
            </>
          )}
          <ProfileActionButton>
            <FaEllipsisH />
          </ProfileActionButton>
        </ProfileActions>
      </ProfileInfo>
      
      <ProfileTabs>
        <ProfileTab active>Bài viết</ProfileTab>
        <ProfileTab>Giới thiệu</ProfileTab>
        <ProfileTab>Bạn bè</ProfileTab>
        <ProfileTab>Ảnh</ProfileTab>
        <ProfileTab>Video</ProfileTab>
        <ProfileTab>Check in</ProfileTab>
      </ProfileTabs>
      
      <ProfileContent>
        <AboutSection>
          <h3>Giới thiệu</h3>
          
          <AboutItem>
            <AboutIcon>🏢</AboutIcon>
            <AboutText>{profileData.about.work}</AboutText>
          </AboutItem>
          
          <AboutItem>
            <AboutIcon>🎓</AboutIcon>
            <AboutText>{profileData.about.education}</AboutText>
          </AboutItem>
          
          <AboutItem>
            <AboutIcon>📍</AboutIcon>
            <AboutText>{profileData.about.location}</AboutText>
          </AboutItem>
          
          <AboutItem>
            <AboutIcon>❤️</AboutIcon>
            <AboutText>{profileData.about.relationship}</AboutText>
          </AboutItem>
        </AboutSection>
        
        <FriendsSection>
          <FriendsHeader>
            <FriendsTitle>Bạn bè</FriendsTitle>
            <FriendsLink to={`/profile/${id}/friends`}>Xem tất cả bạn bè</FriendsLink>
          </FriendsHeader>
          
          <FriendsGrid>
            {profileData.friends.map(friend => (
              <FriendCard key={friend.id} to={`/profile/${friend.id}`}>
                <FriendAvatar src={friend.avatar} alt={friend.name} />
                <FriendName>{friend.name}</FriendName>
              </FriendCard>
            ))}
          </FriendsGrid>
        </FriendsSection>
        
        <PhotosSection>
          <PhotosHeader>
            <PhotosTitle>Ảnh</PhotosTitle>
            <PhotosLink to={`/profile/${id}/photos`}>Xem tất cả ảnh</PhotosLink>
          </PhotosHeader>
          
          <PhotosGrid>
            {profileData.photos.slice(0, 9).map(photo => (
              <PhotoCard key={photo.id}>
                <PhotoImage src={photo.url} alt={`Photo ${photo.id}`} />
              </PhotoCard>
            ))}
          </PhotosGrid>
        </PhotosSection>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile; 