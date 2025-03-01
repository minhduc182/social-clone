import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaStore, FaVideo, FaCalendarAlt, FaHistory, FaBookmark, FaFlag, FaUsers, FaGamepad } from 'react-icons/fa';
import {
  SidebarContainer,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle
} from './styles';

const LeftSidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem as={Link} to="/profile/me">
        <SidebarIcon>
          <img src="https://i.pravatar.cc/150?img=12" alt="User" />
        </SidebarIcon>
        <SidebarText>Tô Minh Đức</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/friends">
        <SidebarIcon>
          <FaUserFriends />
        </SidebarIcon>
        <SidebarText>Bạn bè</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/marketplace">
        <SidebarIcon>
          <FaStore />
        </SidebarIcon>
        <SidebarText>Marketplace</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/watch">
        <SidebarIcon>
          <FaVideo />
        </SidebarIcon>
        <SidebarText>Watch</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/events">
        <SidebarIcon>
          <FaCalendarAlt />
        </SidebarIcon>
        <SidebarText>Sự kiện</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/memories">
        <SidebarIcon>
          <FaHistory />
        </SidebarIcon>
        <SidebarText>Kỷ niệm</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/saved">
        <SidebarIcon>
          <FaBookmark />
        </SidebarIcon>
        <SidebarText>Đã lưu</SidebarText>
      </SidebarItem>
      
      <SidebarDivider />
      
      <SidebarTitle>Lối tắt của bạn</SidebarTitle>
      
      <SidebarItem as={Link} to="/groups/tech">
        <SidebarIcon>
          <FaUsers />
        </SidebarIcon>
        <SidebarText>Nhóm Công nghệ Việt Nam</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/groups/travel">
        <SidebarIcon>
          <FaUsers />
        </SidebarIcon>
        <SidebarText>Hội những người thích du lịch</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/gaming">
        <SidebarIcon>
          <FaGamepad />
        </SidebarIcon>
        <SidebarText>Chơi game</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/groups/food">
        <SidebarIcon>
          <FaUsers />
        </SidebarIcon>
        <SidebarText>Ẩm thực Việt Nam</SidebarText>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default LeftSidebar; 