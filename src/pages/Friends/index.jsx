import React, { useState } from 'react';
import { FaUserPlus, FaUserTimes, FaUserCheck, FaEllipsisH } from 'react-icons/fa';
import {
  FriendsContainer,
  FriendsHeader,
  FriendsTitle,
  FriendsCount,
  FriendsTabs,
  FriendsTab,
  FriendsGrid,
  FriendCard,
  FriendAvatar,
  FriendInfo,
  FriendName,
  FriendMutual,
  FriendActions,
  FriendButton,
  FriendOptionsButton,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText
} from './styles';

// Dữ liệu mẫu cho trang bạn bè
const friendsData = {
  all: [
    { id: 1, name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/150?img=1', mutualFriends: 5 },
    { id: 2, name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/150?img=2', mutualFriends: 3 },
    { id: 3, name: 'Lê Văn C', avatar: 'https://i.pravatar.cc/150?img=3', mutualFriends: 8 },
    { id: 4, name: 'Phạm Thị D', avatar: 'https://i.pravatar.cc/150?img=4', mutualFriends: 2 },
    { id: 5, name: 'Hoàng Văn E', avatar: 'https://i.pravatar.cc/150?img=5', mutualFriends: 12 },
    { id: 6, name: 'Ngô Thị F', avatar: 'https://i.pravatar.cc/150?img=6', mutualFriends: 7 },
    { id: 7, name: 'Đỗ Văn G', avatar: 'https://i.pravatar.cc/150?img=7', mutualFriends: 4 },
    { id: 8, name: 'Vũ Thị H', avatar: 'https://i.pravatar.cc/150?img=8', mutualFriends: 9 }
  ],
  requests: [
    { id: 9, name: 'Đinh Văn I', avatar: 'https://i.pravatar.cc/150?img=9', mutualFriends: 3 },
    { id: 10, name: 'Bùi Thị K', avatar: 'https://i.pravatar.cc/150?img=10', mutualFriends: 5 }
  ],
  suggestions: [
    { id: 11, name: 'Dương Văn L', avatar: 'https://i.pravatar.cc/150?img=11', mutualFriends: 7 },
    { id: 12, name: 'Đặng Thị M', avatar: 'https://i.pravatar.cc/150?img=12', mutualFriends: 2 },
    { id: 13, name: 'Trịnh Văn N', avatar: 'https://i.pravatar.cc/150?img=13', mutualFriends: 4 },
    { id: 14, name: 'Mai Thị O', avatar: 'https://i.pravatar.cc/150?img=14', mutualFriends: 6 }
  ]
};

const Friends = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const renderFriendsList = () => {
    const friends = friendsData[activeTab] || [];
    
    if (friends.length === 0) {
      return (
        <EmptyState>
          <EmptyStateIcon>👥</EmptyStateIcon>
          <EmptyStateText>Không có {activeTab === 'all' ? 'bạn bè' : activeTab === 'requests' ? 'lời mời kết bạn' : 'gợi ý kết bạn'} nào</EmptyStateText>
        </EmptyState>
      );
    }
    
    return (
      <FriendsGrid>
        {friends.map(friend => (
          <FriendCard key={friend.id}>
            <FriendAvatar src={friend.avatar} alt={friend.name} />
            <FriendInfo>
              <FriendName>{friend.name}</FriendName>
              <FriendMutual>{friend.mutualFriends} bạn chung</FriendMutual>
              
              <FriendActions>
                {activeTab === 'all' && (
                  <>
                    <FriendButton secondary>
                      <FaUserTimes /> Hủy kết bạn
                    </FriendButton>
                    <FriendOptionsButton>
                      <FaEllipsisH />
                    </FriendOptionsButton>
                  </>
                )}
                
                {activeTab === 'requests' && (
                  <>
                    <FriendButton primary>
                      <FaUserCheck /> Chấp nhận
                    </FriendButton>
                    <FriendButton secondary>
                      Từ chối
                    </FriendButton>
                  </>
                )}
                
                {activeTab === 'suggestions' && (
                  <>
                    <FriendButton primary>
                      <FaUserPlus /> Thêm bạn bè
                    </FriendButton>
                    <FriendButton secondary>
                      Gỡ
                    </FriendButton>
                  </>
                )}
              </FriendActions>
            </FriendInfo>
          </FriendCard>
        ))}
      </FriendsGrid>
    );
  };
  
  return (
    <FriendsContainer>
      <FriendsHeader>
        <FriendsTitle>Bạn bè</FriendsTitle>
        {activeTab === 'all' && <FriendsCount>{friendsData.all.length} bạn bè</FriendsCount>}
        {activeTab === 'requests' && <FriendsCount>{friendsData.requests.length} lời mời</FriendsCount>}
      </FriendsHeader>
      
      <FriendsTabs>
        <FriendsTab 
          active={activeTab === 'all'} 
          onClick={() => setActiveTab('all')}
        >
          Tất cả bạn bè
        </FriendsTab>
        <FriendsTab 
          active={activeTab === 'requests'} 
          onClick={() => setActiveTab('requests')}
        >
          Lời mời kết bạn
          {friendsData.requests.length > 0 && ` (${friendsData.requests.length})`}
        </FriendsTab>
        <FriendsTab 
          active={activeTab === 'suggestions'} 
          onClick={() => setActiveTab('suggestions')}
        >
          Gợi ý
        </FriendsTab>
      </FriendsTabs>
      
      {renderFriendsList()}
    </FriendsContainer>
  );
};

export default Friends; 