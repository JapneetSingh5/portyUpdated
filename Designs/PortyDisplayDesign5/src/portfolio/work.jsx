import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Title from './Title';
import PaperCard from './cards/paper';

const Work = (props) => {
    const { work } = props;
    const [isDesktop, setIsDesktop] = useState(false);
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  if (window.innerWidth > 769) {
    setIsDesktop(true);
    setIsMobile(false);
  } else {
    setIsMobile(true);
    setIsDesktop(false);
  }
}, []);

    return (
      <section id="projects">
      <Container>
        <div className="project-wrapper">
        <Title title="Work" />
              <Row key="1">
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={'#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >

                      </a>
                    </div>
                    <div className="portfolioFlatContainer">
                    {work.map((workPlace) => (
                        <PaperCard
                            company={workPlace.company}
                            position={workPlace.position}
                            website={workPlace.website}
                            startDate={workPlace.startdate}
                            endDate={workPlace.enddate}
                        >
                            {workPlace.summary}
                        </PaperCard>
                    ))}
                    </div>
                  </Fade>
                </Col>
              </Row>
        </div>
      </Container>
    </section>
    );
};

Work.propTypes = {
    work: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Work;
