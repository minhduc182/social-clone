import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import {
  NotFoundContainer,
  NotFoundIcon,
  NotFoundTitle,
  NotFoundText,
  NotFoundButton
} from './styles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundIcon>
        <FaExclamationTriangle />
      </NotFoundIcon>
      <NotFoundTitle>Trang không tìm thấy</NotFoundTitle>
      <NotFoundText>
        Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
      </NotFoundText>
      <NotFoundButton as={Link} to="/">
        <FaHome /> Quay về trang chủ
      </NotFoundButton>
    </NotFoundContainer>
  );
};

export default NotFound; 