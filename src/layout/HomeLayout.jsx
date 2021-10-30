import React from 'react';
import { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import ProductInfoBar from '../components/ProductInfoBar';
import Product from './../components/Product';

const HomeLayout = () => {
    return (
        <Fragment>
            <NavBar />
            <Container style={{"marginTop":"50px" , "marginBottom":"50px"}}>
                <Row>
                    <Col lg={7} md={9}>
                        <Product />
                    </Col>
                    <Col lg={4} md={3}>
                        <ProductInfoBar />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default HomeLayout;