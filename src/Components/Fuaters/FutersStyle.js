import styled from "styled-components";
import { Col } from "react-bootstrap";

export const FutersSection = styled.section`
  padding: 50px 0;
  text-align: center;
  background-color: #f4f9fc;
`;
export const FutH2 = styled.h2`
  font-size: 45px;
  line-height: 1.17em;
  margin: 10px 0;
  font-weight: 700;
  padding: 20px 0;
`;

export const H2Span = styled.span`
  color: #407bff;
`;

export const FutersP = styled.p`
  color: #7a8595;
  max-width: 500px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 0rem;
  line-height: 30px;
`;

export const FutGallary = styled.div`
  padding: 30px 0;
  display: flex;
`;
export const Image = styled.img`
  border-radius: 5px;
  margin-bottom: 15px;
  width: 70px;
`;

export const H3Fut = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
`;
export const ColI = styled(Col)`
  margin-bottom: 30px;
`;
export const Card = styled.div`
  border-radius: 5px;
  padding: 45px 15px;
  text-align: center;
  background: #fff;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -ms-transition: 0.4s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 9%);
  }
`;
