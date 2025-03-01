import React from 'react';
import { FooterContainer, FooterLinks, FooterLink, FooterCopyright } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#">Tiếng Việt</FooterLink>
        <FooterLink href="#">English</FooterLink>
        <FooterLink href="#">中文(简体)</FooterLink>
        <FooterLink href="#">한국어</FooterLink>
        <FooterLink href="#">日本語</FooterLink>
        <FooterLink href="#">Français</FooterLink>
        <FooterLink href="#">Español</FooterLink>
        <FooterLink href="#">Português</FooterLink>
        <FooterLink href="#">Deutsch</FooterLink>
        <FooterLink href="#">Italiano</FooterLink>
      </FooterLinks>
      <FooterLinks>
        <FooterLink href="#">Đăng ký</FooterLink>
        <FooterLink href="#">Đăng nhập</FooterLink>
        <FooterLink href="#">Messenger</FooterLink>
        <FooterLink href="#">Facebook Lite</FooterLink>
        <FooterLink href="#">Watch</FooterLink>
        <FooterLink href="#">Địa điểm</FooterLink>
        <FooterLink href="#">Trò chơi</FooterLink>
        <FooterLink href="#">Marketplace</FooterLink>
        <FooterLink href="#">Meta Pay</FooterLink>
      </FooterLinks>
      <FooterCopyright>
        Meta © 2023
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer; 