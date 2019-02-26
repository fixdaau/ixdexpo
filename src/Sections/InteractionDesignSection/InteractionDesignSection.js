import React from 'react';
import { Row, Col } from 'react-grid-system';
import Card from '../../Components/Card/Card';
import WhatIsInteractiondesignFront from '../../Components/WhatIsInteractiondesign/WhatIsInteractiondesignFront';
import WhatIsInteractiondesignBack from '../../Components/WhatIsInteractiondesign/WhatIsInteractiondesignBack';
import HowDoesInteractiondesignFitFront from '../../Components/HowDoesInteractiondesignFit/HowDoesInteractionDesignFitFront';
import HowDoesInteractiondesignFitBack from '../../Components/HowDoesInteractiondesignFit/HowDoesInteractionDesignFitBack';

const InteractionDesignSection = () => {
    return (
        <Row>
            <Col xs={6}>
                <Card
                    front={<WhatIsInteractiondesignFront />}
                    back={<WhatIsInteractiondesignBack />}
                />
            </Col>
            <Col xs={6}>
                <Card
                    front={<HowDoesInteractiondesignFitFront />}
                    back={<HowDoesInteractiondesignFitBack />}
                />
            </Col>
        </Row>
    );
};

export default InteractionDesignSection;