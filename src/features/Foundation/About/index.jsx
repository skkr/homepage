// @flow
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';
import Card from 'commons/Card';
import cardsData from './data';

const About = () => (
  <div className="my-3 my-md-5" id="about">
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <p className="lead mb-2 mb-md-4 text-center">
            Winding Tree Foundation is a non-profit organization incorporated in Switzerland.
             Its purpose is to develop software projects, data exchange standards and
            infrastructure with the goal of advancing the travel industry.
          </p>
          <p className="lead mb-1 mb-md-2 text-center">
            Winding Tree foundation currently supports these initiatives:
          </p>
          <CardDeck>
            {cardsData.map(card => (
              <Card {...card} key={`about-card-${card.title}`} />
            ))}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
