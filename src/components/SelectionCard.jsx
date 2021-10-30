import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IncrementAction } from './../redux/action';

const SelectionCard = (props) => {
    const dispatch = useDispatch()
    const handleCount = (e) => {
        const newCount = (Number(e.target.value));
        dispatch(IncrementAction(newCount))
    }
    const count = useSelector(state => state.count.value)
    return (
        <div className="d-flex mt-2 align-items-center">
            <span>{props.name}</span>
            <Form.Select disabled={count > 6} onChange={(e) => handleCount(e)} className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </Form.Select>
            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">blue</option>
                <option value="1">red</option>
                <option value="2">green</option>
                <option value="3">brown</option>
                <option value="4">pink</option>
                <option value="5">yellow</option>
                <option value="6">chokolate</option>
            </Form.Select>
        </div>
    );
};

export default SelectionCard;