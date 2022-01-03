import styled from "styled-components";
import { Col } from "react-bootstrap";
//my framework

const sectionPadding = "50px";

//end framework
export const HomeSection = styled.section`
  padding: ${sectionPadding} 0;
  background-color: #f4f9fc;
`;

export const HomeTitle = styled.div`
  text-align: center;
`;

export const H2OfHome = styled.h2`
  font-size: 45px;
  line-height: 1.17em;
  margin: 10px 0;
  font-weight: 700;
  padding: 20px 0;
`;

export const SpanOfH2 = styled.span`
  color: #407bff;
`;
export const PofHome = styled.p`
  color: #7a8595;
  max-width: 500px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 0rem;
  line-height: 30px;
`;

export const Homes = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-evenly;
  padding: 40px 0;
  width: 100%;
`;

export const HomeImg = styled.img`
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`;

export const H3Home = styled.h3`
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
  transition: all 0.3s ease-out 0s;
  &:hover {
    transform: translateY(-8px);
  }
  &:hover ${H3Home} {
    background: #366ad8;
    color: #fff;
  }
`;

export const Active = styled(Col)`
  transform: translateY(-5px);
  &:hover {
    transform: translateY(-10px);
  }
  &:hover ${H3Home} {
    background: #366ad8;
    color: #fff;
  }
`;
