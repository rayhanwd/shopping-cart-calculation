import React from 'react';
import { Card } from 'react-bootstrap';

const Product = () => {
    return (
        <Card className="mt-10 bg-white border-none">
            <Card.Img className="w-50 mx-auto" variant="top" src="https://yomacakeybakey.web.app/static/media/Ricotta%20Cheesecake%2001%20-%20noBG.c7dce978.png" />
            <Card.Body>
                <Card.Title>Super Cake</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Product;