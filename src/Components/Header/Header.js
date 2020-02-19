import React from "react";
import { Container, Row, Col } from "react-grid-system";
import HeaderLink from "./HeaderLink";
import { studentLinks, companyLinks } from "../../Data/headerInfo";
import "./Header.scss";

const Header = props => {
  const linkInfo =
    window.location.pathname === "/student" ? studentLinks() : companyLinks();
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <div style={{ height: "184px" }}>
            <img
              src={require("../../Images/Logo.svg")}
              alt="Logo"
              height="24"
              width="116.43"
              style={{ marginTop: "48px" }}
            />
          </div>
        </Col>
        <Col xs={12} md={4} className="header-link-col">
          <Row className="header-link-row" justify="around">
            {linkInfo.map((data, i) => (
              <HeaderLink url={data.id} key={i}>
                {data.text}
              </HeaderLink>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
