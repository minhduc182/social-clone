import React, { useState } from 'react';
import { FaUserCircle, FaVideo, FaImage, FaSmile } from 'react-icons/fa';
import {
  CreatePostCard,
  PostInputWrapper,
  UserAvatar,
  PostInput,
  PostActions,
  VideoButton,
  PhotoButton,
  FeelingButton,
  CreatePostModal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  PostTextarea,
  ModalFooter,
  PostButton
} from './styles';

const CreatePost = () => {
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState('');

  const handleCreatePost = () => {
    if (postContent.trim() === '') return;
    
    // Xử lý tạo bài đăng ở đây
    console.log('Tạo bài đăng:', postContent);
    
    setPostContent('');
    setShowModal(false);
  };

  return (
    <>
      <CreatePostCard>
        <PostInputWrapper>
          <UserAvatar>
            <FaUserCircle />
          </UserAvatar>
          <PostInput onClick={() => setShowModal(true)}>
            Bạn đang nghĩ gì?
          </PostInput>
        </PostInputWrapper>
        <PostActions>
          <VideoButton>
            <FaVideo />
            Video trực tiếp
          </VideoButton>
          <PhotoButton>
            <FaImage />
            Ảnh/Video
          </PhotoButton>
          <FeelingButton>
            <FaSmile />
            Cảm xúc
          </FeelingButton>
        </PostActions>
      </CreatePostCard>
      
      {showModal && (
        <CreatePostModal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Tạo bài viết</ModalTitle>
              <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <PostTextarea 
                placeholder="Bạn đang nghĩ gì?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                autoFocus
              />
            </ModalBody>
            <ModalFooter>
              <PostButton 
                disabled={postContent.trim() === ''}
                onClick={handleCreatePost}
              >
                Đăng
              </PostButton>
            </ModalFooter>
          </ModalContent>
        </CreatePostModal>
      )}
    </>
  );
};

export default CreatePost; 