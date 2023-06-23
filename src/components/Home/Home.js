import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/logobig.png';
import Particle from '../Particle';
import Resume from './Resume';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col>
              <img src={homeLogo} alt='home pic' className='img-fluid wave' />
              <h1 style={{ paddingTop: 45 }} className='heading'>
                CA: 0x88ef0e8f579bff4ebdc71ccb3f760e1260f17d06
              </h1>
              <a
                href='https://pancakeswap.finance/swap?outputCurrency=0x88Ef0e8f579BfF4eBDC71cCB3F760e1260f17d06'
                target='_blank'
                rel='noreferrer'
              >
                <button className='buy'>BUY TOKEN</button>
              </a>
            </Col>
          </Row>
        </Container>
        <Resume />
      </Container>
    </section>
  );
}

export default Home;
