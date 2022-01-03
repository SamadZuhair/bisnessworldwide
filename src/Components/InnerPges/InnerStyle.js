import styled from "styled-components";
import { Col } from "react-bootstrap";
export const InnerSection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

export const InnerH3 = styled.h2`
  font-size: 45px;
  line-height: 1.17em;
  margin: 10px 0;
  font-weight: 700;
  padding: 20px 0;
`;

export const InnerSpan = styled.span`
  color: #407bff;
`;

export const InnerP = styled.p`
  color: #7a8595;
  max-width: 500px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 0rem;
  line-height: 30px;
`;

export const GallarySection = styled.section`
  padding: 30px 0;
`;

export const Image = styled.img`
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`;
export const H3Inner = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 20px 10px;
  text-align: center;
  border-top: 1px solid #eee;
  background: #fff;
  transition: 0.5s;
`;

export const ColI = styled(Col)`
  margin: 10px 0;
  transition: all 0.3s ease-out 0s;
  &:hover {
    transform: translateY(-8px);
  }
  &:hover ${H3Inner} {
    background: #366ad8;
    color: #fff;
  }
`;
