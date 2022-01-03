import React from "react";
import {
  InnerSection,
  InnerH3,
  InnerSpan,
  InnerP,
  GallarySection,
  Image,
  H3Inner,
  ColI,
} from "./InnerStyle";
import { Container, Row } from "react-bootstrap";

export default function Inner() {
  return (
    <div>
      <InnerSection>
        <InnerH3>
          Stunning <InnerSpan>Inner</InnerSpan> Pages
        </InnerH3>
        <InnerP>
          Rearrange the entire color palette, making your site unique and
          beautiful.theme using a wide selection
        </InnerP>
        <GallarySection>
          <Container fluid="md">
            <Row>
              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/aboutus.jpg"
                  alt=""
                />

                <H3Inner>About Us</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  className="effect"
                  src="http://webangon.com/html/bisness/img/demo/service1.jpg"
                  alt=""
                />
                <H3Inner>Service One</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/service2.jpg"
                  alt=""
                />
                <H3Inner>Service Two</H3Inner>
              </ColI>

              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/service-da.jpg"
                  alt=""
                />

                <H3Inner>Service Details</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  className="effect"
                  src="http://webangon.com/html/bisness/img/demo/team1.jpg"
                  alt=""
                />
                <H3Inner>Team One</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/team2.jpg"
                  alt=""
                />
                <H3Inner>Team Two</H3Inner>
              </ColI>

              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/case1.jpg"
                  alt=""
                />

                <H3Inner>Case Study One</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  className="effect"
                  src="http://webangon.com/html/bisness/img/demo/case-slider.jpg"
                  alt=""
                />
                <H3Inner>Case Study Slider</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/blog.jpg"
                  alt=""
                />
                <H3Inner>Blog One</H3Inner>
              </ColI>

              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/blog-da.jpg"
                  alt=""
                />

                <H3Inner>Blog Details</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  className="effect"
                  src="http://webangon.com/html/bisness/img/demo/review.jpg"
                  alt=""
                />
                <H3Inner>Testimonials</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/contact.jpg"
                  alt=""
                />
                <H3Inner>Contact Us</H3Inner>
              </ColI>

              <ColI lg={4} sm={6}>
                <Image
                  src="http://webangon.com/html/bisness/img/demo/register.jpg"
                  alt=""
                />

                <H3Inner>Register</H3Inner>
              </ColI>
              <ColI lg={4} sm={6}>
                <Image
                  className="effect"
                  src="http://webangon.com/html/bisness/img/demo/login.jpg"
                  alt=""
                />
                <H3Inner>Login</H3Inner>
              </ColI>
            </Row>
          </Container>
        </GallarySection>
      </InnerSection>
    </div>
  );
}
