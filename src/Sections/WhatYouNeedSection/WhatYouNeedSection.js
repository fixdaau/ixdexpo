import { Col, Container, Row, Hidden } from "react-grid-system";
import FeatherIcons from "feather-icons-react";
import H2 from "../../Components/H2/H2";
import H3 from "../../Components/H3/H3";

import React from "react";

const WhatYouNeedSection = () => {
  return (
    <div className="ixdbg" id='whatyouneedsection'>
      <Container>
        <Row>
          <Col xs={12} align="center">
            <H2>What you need at your stand</H2>
          </Col>
        </Row>
        <Row justify="around">
          <Hidden xs={true} sm={true} md={true}>
            <GetWhatYouNeed />
          </Hidden>
          <Hidden lg={true} xl={true}>
            <GetWhatYouNeedMobile />
          </Hidden>
        </Row>

        <Row style={{ marginTop: "64px", marginBottom: "48px" }}>
          <Col xs={12} align="center">
            <H3>We’ve got your back</H3>
          </Col>
        </Row>

        <Row justify="center">
          <Hidden xs={true} sm={true} md={true}>
            <GotYourBack />
          </Hidden>
          <Hidden lg={true} xl={true}>
            <GotYourBackMobile />
          </Hidden>
        </Row>
      </Container>
    </div>
  );
};

export default WhatYouNeedSection;

const GetWhatYouNeed = () => (
  <>
    <Col xs={12} md={4} align="center">
      <FeatherIcons
        icon="box"
        size="40"
        color="white"
        style={{ paddingBottom: "16px" }}
      />
      <div className="ixd-description">A Project</div>
      <div className="ixd-description-small">
        Be prepared to pitch your project, understand how your design effort
        creates value, and how you fit those skills into a company.
      </div>
    </Col>
    <Col xs={12} md={4} align="center">
      <FeatherIcons
        icon="file"
        size="40"
        color="white"
        style={{ paddingBottom: "16px" }}
      />
      <div className="ixd-description">A Poster</div>
      <div className="ixd-description-small">
        Have a poster to focus the viewer's attention on a visual element. The
        poster can also help you structure your pitch and perfect a coherent
        delivery.
      </div>
    </Col>
    <Col xs={12} md={4} align="center">
      <FeatherIcons
        icon="monitor"
        size="40"
        color="white"
        style={{ paddingBottom: "16px" }}
      />
      <div className="ixd-description">A Demo</div>
      <div className="ixd-description-small">
        The companies want to see how you execute and transform insights into
        actual design. Design process tools can also be demonstrated.
      </div>
    </Col>
  </>
);

const GetWhatYouNeedMobile = () => (
  <>
    <Col xs={12} md={4} align="center">
      <FeatherIcons
        icon="box"
        size="40"
        color="white"
        style={{ paddingBottom: "16px" }}
      />
      <div className="ixd-description">A Project</div>
      <div className="ixd-description-small">
        Be prepared to pitch your project, understand how your design effort
        creates value, and how you fit those skills into a company.
      </div>
    </Col>
    <Col xs={12} md={4} align="center" style={{ paddingTop: "42px" }}>
      <FeatherIcons
        icon="file"
        size="40"
        color="white"
        style={{ paddingBottom: "16px" }}
      />
      <div className="ixd-description">A Poster</div>
      <div className="ixd-description-small">
        Have a poster to focus the viewer's attention on a visual element. The
        poster can also help you structure your pitch and perfect a coherent
        delivery.
      </div>
    </Col>
    <Col xs={12} md={4} align="center" style={{ paddingTop: "42px" }}>
      <FeatherIcons
        icon="monitor"
        size="40"
        color="white"
        style={{ paddingBottom: "16px" }}
      />
      <div className="ixd-description">A Demo</div>
      <div className="ixd-description-small">
        The companies want to see how you execute and transform insights into
        actual design. Design process tools can also be demonstrated.
      </div>
    </Col>
  </>
);

const GotYourBack = () => (
  <>
    <Col lg={2} />
    <Col xs={12} md={12} lg={4} align="center">
      <div className="ixd-description">Poster template & print</div>
      <div className="ixd-description-small">
        We will give you a poster template so you only have to focus on the
        content. When it’s done you send it to us and we will get it printed on
        foam core.
      </div>
    </Col>
    <Col xs={12} md={12} lg={4} align="center">
      <div className="ixd-description">Magazine entry template</div>
      <div className="ixd-description-small">
        If you want your project in the exposition magazine, we will provide a
        template for you to fill out. The magazine will be sent to the companies
        before the event.
      </div>
    </Col>
    <Col lg={2} />
    <Col lg={2} />
    <Col xs={12} md={12} lg={4} align="center" style={{ paddingTop: "42px" }}>
      <div className="ixd-description">Project repair fund</div>
      <div className="ixd-description-small">
        The finish of your project shouldn’t hold you back. Therefore, we are
        granting 250 DKK so that you can polish your project.
      </div>
    </Col>
    <Col xs={12} md={12} lg={4} align="center" style={{ paddingTop: "42px" }}>
      <div className="ixd-description">EXPO stand accessories</div>
      <div className="ixd-description-small">
        We will provide you with accessories for your stand. So if you need a
        certain device to demo, a stand for a smartphone, or anything else, we
        will try to get it for you.s
      </div>
    </Col>
    <Col lg={2} />
  </>
);

const GotYourBackMobile = () => (
  <>
    <Col xs={12} md={12} lg={4} align="center">
      <div className="ixd-description">Poster template & print</div>
      <div className="ixd-description-small">
        We will give you a poster template so you only have to focus on the
        content. When it’s done you send it to us and we will get it printed on
        foam core.
      </div>
    </Col>
    <Col xs={12} md={12} lg={4} align="center" style={{ paddingTop: "42px" }}>
      <div className="ixd-description">Magazine entry template</div>
      <div className="ixd-description-small">
        If you want your project in the exposition magazine, we will provide a
        template for you to fill out. The magazine will be sent to the companies
        before the event.
      </div>
    </Col>
    <Col xs={12} md={12} lg={4} align="center" style={{ paddingTop: "42px" }}>
      <div className="ixd-description">Project repair fund</div>
      <div className="ixd-description-small">
        The finish of your project shouldn’t hold you back. Therefore, we are
        granting 250 DKK so that you can polish your project.
      </div>
    </Col>
    <Col xs={12} md={12} lg={4} align="center" style={{ paddingTop: "42px" }}>
      <div className="ixd-description">EXPO stand accessories</div>
      <div className="ixd-description-small">
        We will provide you with accessories for your stand. So if you need a
        certain device to demo, a stand for a smartphone, or anything else, we
        will try to get it for you.s
      </div>
    </Col>
  </>
) 