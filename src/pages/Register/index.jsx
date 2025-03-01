import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import {
  RegisterContainer,
  RegisterWrapper,
  RegisterHeader,
  RegisterTitle,
  RegisterSubtitle,
  CloseButton,
  RegisterForm,
  InputGroup,
  RegisterInput,
  InputRow,
  GenderOptions,
  GenderOption,
  GenderRadio,
  GenderLabel,
  BirthdayLabel,
  PolicyText,
  RegisterButton
} from './styles';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    gender: ''
  });
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đăng ký với:', formData);
    navigate('/login');
  };
  
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterHeader>
          <div>
            <RegisterTitle>Đăng ký</RegisterTitle>
            <RegisterSubtitle>Nhanh chóng và dễ dàng</RegisterSubtitle>
          </div>
          <CloseButton onClick={() => navigate('/login')}>
            <FaTimes />
          </CloseButton>
        </RegisterHeader>
        
        <RegisterForm onSubmit={handleSubmit}>
          <InputRow>
            <RegisterInput
              type="text"
              name="firstName"
              placeholder="Họ"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <RegisterInput
              type="text"
              name="lastName"
              placeholder="Tên"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </InputRow>
          
          <InputGroup>
            <RegisterInput
              type="email"
              name="email"
              placeholder="Email hoặc số điện thoại"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          
          <InputGroup>
            <RegisterInput
              type="password"
              name="password"
              placeholder="Mật khẩu mới"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputGroup>
          
          <BirthdayLabel>Sinh nhật</BirthdayLabel>
          <InputRow>
            <RegisterInput
              type="number"
              name="day"
              placeholder="Ngày"
              min="1"
              max="31"
              value={formData.day}
              onChange={handleChange}
              required
            />
            <RegisterInput
              type="number"
              name="month"
              placeholder="Tháng"
              min="1"
              max="12"
              value={formData.month}
              onChange={handleChange}
              required
            />
            <RegisterInput
              type="number"
              name="year"
              placeholder="Năm"
              min="1900"
              max="2023"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </InputRow>
          
          <BirthdayLabel>Giới tính</BirthdayLabel>
          <GenderOptions>
            <GenderOption>
              <GenderLabel>
                Nam
                <GenderRadio
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  required
                />
              </GenderLabel>
            </GenderOption>
            <GenderOption>
              <GenderLabel>
                Nữ
                <GenderRadio
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
              </GenderLabel>
            </GenderOption>
            <GenderOption>
              <GenderLabel>
                Tùy chỉnh
                <GenderRadio
                  type="radio"
                  name="gender"
                  value="custom"
                  checked={formData.gender === 'custom'}
                  onChange={handleChange}
                />
              </GenderLabel>
            </GenderOption>
          </GenderOptions>
          
          <PolicyText>
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi.
          </PolicyText>
          
          <RegisterButton type="submit">
            Đăng ký
          </RegisterButton>
        </RegisterForm>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register; 