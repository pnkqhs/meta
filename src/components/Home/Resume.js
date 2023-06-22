import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import partner1 from '../../Assets/pn1.jpg';
import partner2 from '../../Assets/pn2.jpg';
import partner3 from '../../Assets/pn3.jpg';
import partner4 from '../../Assets/pn4.png';

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Particle />
      <Container>
        <h1 className='purple'>ROADMAP</h1>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>PHASE 1</h3>
            <Resumecontent title='100 holders ' content={[]} />
            <Resumecontent
              title='Marketing Started , TrendingBSC'
              content={[]}
            />
            <Resumecontent title='Plan Project and Build' content={[]} />
            <Resumecontent title='Website Development' content={[]} />
            <Resumecontent title='Build Social' content={[]} />
            <Resumecontent title='Build Community Trust' content={[]} />
            <h3 className='resume-title'>PHASE 2</h3>
            <Resumecontent title='App Beta Test' content={[]} />
            <Resumecontent title='Marketing Started' content={[]} />
            <Resumecontent title='300 Holders' content={[]} />
            <Resumecontent title="Build Community's Country" content={[]} />
            <Resumecontent title='Censor Network Swap' content={[]} />
            <Resumecontent title='Censor Network Bridge' content={[]} />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>PHASE 3</h3>
            <Resumecontent title='500 Holders' content={[]} />
            <Resumecontent title='Whitepaper Release' content={[]} />
            <Resumecontent title='Listing On CMC, CGC' content={[]} />
            <Resumecontent title='Censor Network Dapps Wallet' content={[]} />
            <Resumecontent title='Smart Investment AI Bot' content={[]} />
            <Resumecontent title='Techrate Audit' content={[]} />
            <h3 className='resume-title'>PHASE 4</h3>
            <Resumecontent
              title='Blockchain Testnet Development'
              content={[]}
            />
            <Resumecontent title='Sponsorship & Partnership' content={[]} />
            <Resumecontent title='List CEX' content={[]} />
          </Col>
        </Row>
        <h1 className='project-heading' style={{ size: '20px' }}>
          Partner
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <Col xs={4} md={2} className='tech-icons'>
            <img src={partner1} className='img-fluid' alt='partner' />
          </Col>
          <Col xs={4} md={2} className='tech-icons'>
            <img src={partner2} className='img-fluid' alt='partner' />
          </Col>
          <Col xs={4} md={2} className='tech-icons'>
            <img src={partner3} className='img-fluid' alt='partner' />
          </Col>
          <Col xs={4} md={2} className='tech-icons'>
            <img src={partner4} className='img-fluid' alt='partner' />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
