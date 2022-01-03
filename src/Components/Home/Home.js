import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  H2OfHome,
  HomeSection,
  PofHome,
  SpanOfH2,
  HomeTitle,
  Homes,
  HomeImg,
  H3Home,
  ColI,
  Active,
} from "./HomeStyle";
const Backgrond = "http://webangon.com/html/bisness/img/demo/home1.jpg";

export default function Home() {
  return (
    <div>
      <HomeSection>
        <HomeTitle>
          <H2OfHome>
            Stunning
            <SpanOfH2> Home </SpanOfH2>
            Pages
          </H2OfHome>
          <PofHome>
            Rearrange the entire color palette, making your site unique and
            beautiful.theme using a wide selection
          </PofHome>
        </HomeTitle>
        <Homes>
          <Container fluid="md">
            <Row>
              <ColI lg={4} sm={6}>
                <HomeImg
                  src="http://webangon.com/html/bisness/img/demo/home1.jpg"
                  alt=""
                />

                <H3Home>Home Page Demo - One</H3Home>
              </ColI>
              <Active lg={4} sm={6}>
                <HomeImg
                  className="effect"
                  src="http://webangon.com/html/bisness/img/demo/home2.jpg"
                  alt=""
                />
                <H3Home>Home Page Demo - Two</H3Home>
              </Active>
              <ColI lg={4} sm={6}>
                <HomeImg
                  src="http://webangon.com/html/bisness/img/demo/home3.jpg"
                  alt=""
                />
                <H3Home>Home Page Demo - Three</H3Home>
              </ColI>
            </Row>
          </Container>
        </Homes>
      </HomeSection>
    </div>
  );
}
