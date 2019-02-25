import React from 'react';
import Card from '../../Components/Card/Card';
import { Row, Col } from 'react-grid-system';
import WhatIsInteractiondesignFront from '../../Components/WhatIsInteractiondesign/WhatIsInteractiondesignFront';
import WhatIsInteractiondesignBack from '../../Components/WhatIsInteractiondesign/WhatIsInteractiondesignBack';
import HowDoesInteractionDesignFitFront from '../../Components/HowDoesInteractiondesignFit/HowDoesInteractionDesignFitFront';
import HowDoesInteractionDesignFitBack from '../../Components/HowDoesInteractiondesignFit/HowDoesInteractionDesignFitBack';

const WhatIsSection = () =>
    <Row>
        <Col xs={12} sm={12} md={6}>
            <Card
                front={<WhatIsInteractiondesignFront />}
                back={<WhatIsInteractiondesignFront />}
            />
        </Col>
        <Col xs={12} sm={12} md={6}>
            <Card
                front={<HowDoesInteractionDesignFitFront />}
                back={<HowDoesInteractionDesignFitFront />}
            />
        </Col>
    </Row>;

export default WhatIsSection;