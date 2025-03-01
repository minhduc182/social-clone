import React from 'react';
import { FaVideo, FaSearch, FaEllipsisH } from 'react-icons/fa';
import {
  SidebarContainer,
  ContactsHeader,
  ContactsTitle,
  ContactsActions,
  ContactsAction,
  ContactsList,
  ContactItem,
  ContactAvatar,
  ContactName,
  OnlineIndicator
} from './styles';

// Dữ liệu mẫu cho danh sách liên hệ
const contactsData = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    avatar: 'https://i.pravatar.cc/150?img=1',
    online: true
  },
  {
    id: 2,
    name: 'Trần Thị B',
    avatar: 'https://i.pravatar.cc/150?img=2',
    online: true
  },
  {
    id: 3,
    name: 'Lê Văn C',
    avatar: 'https://i.pravatar.cc/150?img=3',
    online: false
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    avatar: 'https://i.pravatar.cc/150?img=4',
    online: true
  },
  {
    id: 5,
    name: 'Hoàng Văn E',
    avatar: 'https://i.pravatar.cc/150?img=5',
    online: false
  },
  {
    id: 6,
    name: 'Ngô Thị F',
    avatar: 'https://i.pravatar.cc/150?img=6',
    online: true
  },
  {
    id: 7,
    name: 'Đỗ Văn G',
    avatar: 'https://i.pravatar.cc/150?img=7',
    online: true
  }
];

const RightSidebar = () => {
  return (
    <SidebarContainer>
      <ContactsHeader>
        <ContactsTitle>Người liên hệ</ContactsTitle>
        <ContactsActions>
          <ContactsAction>
            <FaVideo />
          </ContactsAction>
          <ContactsAction>
            <FaSearch />
          </ContactsAction>
          <ContactsAction>
            <FaEllipsisH />
          </ContactsAction>
        </ContactsActions>
      </ContactsHeader>
      
      <ContactsList>
        {contactsData.map(contact => (
          <ContactItem key={contact.id}>
            <ContactAvatar>
              <img src={contact.avatar} alt={contact.name} />
              {contact.online && <OnlineIndicator />}
            </ContactAvatar>
            <ContactName>{contact.name}</ContactName>
          </ContactItem>
        ))}
      </ContactsList>
    </SidebarContainer>
  );
};

export default RightSidebar; 