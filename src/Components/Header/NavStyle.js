import styled from "styled-components";
import { NavDropdown, Navbar } from "react-bootstrap";

export const TheNavSection = styled.section`
  background-image: url("http://webangon.com/html/bisness/img/demo/main-banner.jpg"),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: overlay;
  background-position: center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const LogoImg = styled.img`
  max-width: 100%;
  @media (min-width: 988px) {
    margin-left: 35%;
  }
`;

export const BurgerMenu = styled(NavDropdown)`
  color: #fff;
  &:after {
    display: none;
  }
`;
export const BugerLine = styled.span``;

export const NavBar = styled(Navbar)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 25px 0;
`;

export const NavLinksUl = styled.ul`
  margin: 0;
  text-align: right;
  padding-right: 2rem;
`;

export const NavLinksLI = styled.li`
  list-style: none;
  display: inline;
  padding-right: 15px;
`;

export const Anchors = styled.a`
  text-decoration: none;
  color: #fff;
  transition: 0.5s;
  &:hover {
    color: #007bff;
  }
`;

export const NavButton = styled.button`
  background: #007bff;
  border: medium none;
  border-radius: 0;
  color: #fff;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 0;
  padding: 0 36px;
  text-align: center;
  text-transform: capitalize;
  touch-action: manipulation;
  transition: all 0.3s ease 0s;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  min-height: 56px;
  line-height: 56px;
  border-radius: 5px;
  transition: 0.5s;
  &:hover {
    background-color: #086ad8;
  }
`;
//the inner section
export const InnerSection = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;
export const H1Inner = styled.h1`
  color: #fff;
  font-size: 52px;
  font-weight: 700;
  margin: 20px 0;
  @media (max-width: 767px) {
    margin-top: 30px;
    font-size: 25px;
  }
`;
export const PInner = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  margin: 0 auto;
  width: 70%;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    font-size: 15px;
    ine-height: normal;
  }
`;

export const BelowBtn = styled(NavButton)``;
