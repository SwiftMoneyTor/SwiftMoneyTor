import Typography from '@mui/material/Typography';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardTemplate from '../../Template/CardTemplate/CardTemplate';
import './AboutUs.css';

const AboutUs = () => {
    const team = [
        { name: 'Ellen', image: 'placeholder' },
        { name: 'Whistner', image: 'placeholder' },
        { name: 'Therese', image: 'placeholder' }
    ]
    return (
        <div className='container border-top pt-4'>
            <h2 className='display-6 pb-2'>About us</h2>
            <Typography variant="h6" gutterBottom className='about-paragraph'>
                SwiftMoneyTor is a FREE POS (Point-Of-Sale) website ideal for any retail, restaurant, or service-based business. It is an ALL-IN-ONE system that converts your mobile phone or tablet into a cash register, assists you in tracking sales, managing inventories, generating reports, and accepting online payments. It is simple to use, economical, and provides peace of mind.
            </Typography>

            <Container className='text-center'>
                <p className='display-6 py-3'>Meet our <span className='fw-bold'>team</span></p>
                <Row md="auto" className='justify-content-center'>
                    {team.map((t, i) => {
                        return (
                            <Col sm md="auto" key={i} className="p-4">
                                <CardTemplate image={t.image} name={t.name} />
                            </Col>)
                    })}

                </Row>
            </Container>

        </div>


    )
}

export default AboutUs