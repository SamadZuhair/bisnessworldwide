import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  FutersSection,
  FutH2,
  H2Span,
  FutersP,
  FutGallary,
  Image,
  ColI,
  H3Fut,
  Card,
} from "./FutersStyle";

export default function Futers() {
  return (
    <div>
      <FutersSection>
        <FutH2>
          Bisness Core
          <H2Span> Features</H2Span>
        </FutH2>
        <FutersP>
          Rearrange the entire color palette, making your site unique and
          beautiful.theme using a wide selection
        </FutersP>
        <FutGallary>
          <Container fluid="md">
            <Row>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/fontaersome.png"
                    alt=""
                  />
                  <H3Fut>Fontawesome Icon</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/html5.png"
                    alt=""
                  />
                  <H3Fut>Html5</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/css3.png"
                    alt=""
                  />
                  <H3Fut>Css3</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/bootstrap.png"
                    alt=""
                  />
                  <H3Fut>Bootstrap4</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/flat-icon.png"
                    alt=""
                  />
                  <H3Fut>Flaticon</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/w3c-validation.png"
                    alt=""
                  />
                  <H3Fut>W3c Validation</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/responsive.png"
                    alt=""
                  />
                  <H3Fut>Fully Responsive</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/owl.png"
                    alt=""
                  />
                  <H3Fut>Owl Carousel</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/font.png"
                    alt=""
                  />
                  <H3Fut>Google Fonts</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/jquery.png"
                    alt=""
                  />
                  <H3Fut>Jquery</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/code.png"
                    alt=""
                  />
                  <H3Fut>Clean Code</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/magnific-popup.png"
                    alt=""
                  />
                  <H3Fut>Magnific Popup</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/mail.png"
                    alt=""
                  />
                  <H3Fut>Ajax Contact Form</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/document.png"
                    alt=""
                  />
                  <H3Fut>Well Documented</H3Fut>
                </Card>
              </ColI>

              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/browser.png"
                    alt=""
                  />
                  <H3Fut>Browser Compatibility</H3Fut>
                </Card>
              </ColI>
              <ColI lg={3} sm={6} mb={30}>
                <Card>
                  <Image
                    src="http://webangon.com/html/bisness/img/icon/mail.png"
                    alt=""
                  />
                  <H3Fut>Developer Friendly</H3Fut>
                </Card>
              </ColI>
            </Row>
          </Container>
        </FutGallary>
      </FutersSection>
    </div>
  );
}
