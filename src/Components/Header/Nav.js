import { React, useState, useEffect, useRef } from "react";
import {
  NavBar,
  NavLinksLI,
  NavLinksUl,
  NavButton,
  TheNavSection,
  H1Inner,
  InnerSection,
  PInner,
  BelowBtn,
  Anchors,
  BurgerMenu,
  BugerLine,
  LogoImg,
} from "./NavStyle";
import { Col, Container, Row } from "react-bootstrap";

export default function Nav() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 400;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.documentElement.scrollTop <= 100) {
      document.getElementsByClassName("NavBar")[0].style.top = "0";
    } else if (document.documentElement.scrollTop < 400) {
      document.getElementsByClassName("NavBar")[0].style.top = "-110px";
    }
    if (document.documentElement.scrollTop > 500) {
      document.getElementsByClassName("NavBar")[0].style.top = "0";
    }
  }
  const BM = (
    <BugerLine>
      {" "}
      Menu <i class="fa fa-bars"></i>
    </BugerLine>
  );
  return (
    <div>
      <TheNavSection>
        <Container fluid="md">
          <Row>
            <NavBar
              className="NavBar"
              expand="sm"
              fixed="top"
              style={{
                transition: "1s ease",
                backgroundColor: navBackground
                  ? "rgba(0, 0, 0, 0.5)"
                  : "transparent",
              }}
            >
              <Col xl={2} lg={2} md={2} sm={18}>
                <LogoImg
                  src="http://webangon.com/html/bisness/img/logo/logo%20(3).png"
                  alt=""
                />
              </Col>

              <Col
                className="d-none d-lg-block  d-xl-block
                "
                xl={7}
                lg={7}
                md={2}
                sm={2}
              >
                <NavLinksUl>
                  <NavLinksLI>
                    <Anchors style href="#">
                      Demos
                    </Anchors>
                  </NavLinksLI>
                  <NavLinksLI>
                    <Anchors href="#">Inner Pages</Anchors>
                  </NavLinksLI>
                  <NavLinksLI>
                    <Anchors href="#">Features</Anchors>
                  </NavLinksLI>
                </NavLinksUl>
              </Col>

              <Col xl={3} lg={3} md={3} sm={15}>
                <NavButton className="d-none d-sm-block">
                  {" "}
                  Purchase Now
                </NavButton>
              </Col>

              <BurgerMenu
                className="d-block d-sm-none"
                title={BM}
                id="basic-nav-dropdown"
              >
                <BurgerMenu.Item href="#action/3.1">Demos</BurgerMenu.Item>
                <BurgerMenu.Item href="#action/3.2">
                  Inner Pages
                </BurgerMenu.Item>
                <BurgerMenu.Item href="#action/3.3">Features</BurgerMenu.Item>
                <BurgerMenu.Divider />
              </BurgerMenu>
            </NavBar>
          </Row>
          <InnerSection>
            <H1Inner>
              Bisness - Business and Corporate Multipages HTML5 Template
            </H1Inner>
            <PInner>
              Our world wide Powerful Websites For Business! it is the best
              method of Business! Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr,
            </PInner>
            <BelowBtn>Exploers deoms </BelowBtn>
          </InnerSection>
        </Container>
      </TheNavSection>
    </div>
  );
}
