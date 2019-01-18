/* @flow */
import React from 'react';
import { Button, Row, Col } from '@windingtree/wt-ui-react';
import Solution from '../Solution';
import Polygon from './Polygon';

const Hospitality = () => (
  <Solution>
    <Row className="d-flex align-items-center">
      <Col md={6} lg={5} className="text-center text-md-left pb-1 pb-md-0 px-0 px-sm-3 pl-md-0 pr-md-1 pr-lg-3">
        <Polygon />
      </Col>
      <Col md={6} lg={7} className="mb-1 mb-sm-0">
        <Solution.Item title="For Hotels">
          Hotels can integrate with our simple APIs to showcase
          availability on the Winding Tree marketplace.
        </Solution.Item>
        {/*        <Button
          href="https://github.com/windingtree/"
          className="mb-1 mb-sm-0 mb-md-1 mb-lg-0 mr-sm-1"
          variant="accent"
        >
          Apply for integration
        </Button> */}
        <Button
          href="#usecases"
          variant="dark"
          outlined
        >
          Use cases
        </Button>
      </Col>
    </Row>
  </Solution>
);

export default Hospitality;