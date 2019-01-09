/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* @flow */
import React from 'react';
import {
  Row, Col,
} from '@windingtree/wt-ui-react';
import Collapse from 'react-collapse';
import Group from './Group';


type StateType = {
  isOpened: boolean
};

class Period extends React.Component<PeriodType, StateType> {
  constructor(props: PeriodType) {
    super(props);
    this.state = {
      isOpened: props.isOpened,
    };
  }

  handleCollapseClick = () => {
    const { isOpened } = this.state;
    this.setState({ isOpened: !isOpened });
  }

  render() {
    const {
      firstLine, secondLine, groups, currentPeriod,
    } = this.props;
    const { isOpened } = this.state;
    const buttonMdi = isOpened ? 'mdi-minus-circle-outline' : 'mdi-plus-circle';
    return (
      <>
        <header>
          <Row>
            <Col className="col-12 text-center">
              <h2>{firstLine}</h2>
              <div className="lead">{secondLine}</div>
              <div>
                <a className="text-primary" type="button" onClick={this.handleCollapseClick}>
                  <i className={`mdi mdi-36px ${buttonMdi}`} />
                </a>
              </div>
            </Col>
          </Row>
        </header>
        <Collapse isOpened={isOpened}>
          <Row>
            {groups.map(group => (
              <Col lg={group.main ? 6 : 3} key={`${firstLine}-${group.title}`}>
                <Group {...group} muted={!currentPeriod} />
              </Col>
            ))}
          </Row>
        </Collapse>
      </>
    );
  }
}

export default Period;
