import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ResetAction } from '../redux/action';
import { IncrementAction } from './../redux/action';


const ProductInfoBar = () => {
    const dispatch = useDispatch();
    const [reset, setReset] = useState(false);
    const [newcount, setcount] = useState(0);
    console.log(newcount);

    const count = useSelector(state => state.count.Value)
    const Size = useSelector(state => state.count.Size)

    const handleCount1 = (e) => {
        const newCount = (Number(e.target.value));
        setcount(newCount)
        dispatch(IncrementAction(newCount))

    }
    const handleCount2 = (e) => {
        const newCount = (Number(e.target.value));
        setcount(newCount)
        dispatch(IncrementAction(newCount))

    }
    const handleCount3 = (e) => {
        const newCount = (Number(e.target.value));
        setcount(newCount)
        dispatch(IncrementAction(newCount))

    }

    return (
        <div>
            <h2>ricotta-cheesecake</h2>
            <h3>Price : $167</h3>
            <h5>Cake Size: {Size}</h5>
            <div className="d-flex">
                <span>Choose Delivery Date:</span>
                <Form.Control type="date" />
            </div>
            <div className="mt-5">
                <h3>Decoration</h3>
                <button onClick={() => { dispatch(ResetAction()); setReset(!reset) }} className="btn btn-primary my-3">Reset</button>
                <h6>Max 6, $ 0.60 each</h6>
            </div>
            <div className={`${count > 5 ? "border border-danger px-3 py-2" : ""}`}>

                <div className="d-flex my-2 align-items-center">
                    <span>Flower</span>
                    <Form.Select disabled={count >= 6} onChange={(e) => handleCount1(e)} className="me-sm-2" id="inlineFormCustomSelect">
                        <option selected={reset ? 0 : newcount} value={0}>
                            0
                        </option>
                        <option selected={reset ? 0 : newcount} value={1}>
                            {newcount >= 0 ? 1 - newcount : 1}
                        </option>
                        <option selected={reset ? 0 : newcount} value={2}>
                            {newcount >= 0 ? 2 - newcount:2}
                        </option>
                    
                    </Form.Select>
                    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                        <option value="0">blue</option>
                        <option value="1-newcount">red</option>
                        <option value="2-newcount">green</option>
                        <option value="3-newcount">brown</option>
                        <option value="4-newcount">pink</option>
                        <option value="5-newcount">yellow</option>
                        <option value="6-newcount">chokolate</option>
                    </Form.Select>
                </div>
                <div className="d-flex my-2 align-items-center">
                    <span>Star</span>
                    <Form.Select disabled={count >= 6} onChange={(e) => handleCount2(e)} className="me-sm-2" id="inlineFormCustomSelect">
                        <option selected={reset ? 0 : newcount} value={0}>
                            0
                        </option>
                        <option selected={reset ? 0 : newcount} value={1}>
                            {newcount >= 0 ? 1 - newcount : 1}
                        </option>
                        <option selected={reset ? 0 : newcount} value={2}>
                            {newcount >= 0 ? 2 - newcount:2}
                        </option>
                    
                    </Form.Select>
                    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                        <option value="0">blue</option>
                        <option value="1-newcount">red</option>
                        <option value="2-newcount">green</option>
                        <option value="3-newcount">brown</option>
                        <option value="4-newcount">pink</option>
                        <option value="5-newcount">yellow</option>
                        <option value="6-newcount">chokolate</option>
                    </Form.Select>
                </div>
                <div className="d-flex my-2 align-items-center">
                    <span>Diamond</span>
                    <Form.Select disabled={count >= 6} onChange={(e) => handleCount3(e)} className="me-sm-2" id="inlineFormCustomSelect">
                        <option selected={reset ? 0 : newcount} value={0}>
                            0
                        </option>
                        <option selected={reset ? 0 : newcount} value={1}>
                            {newcount >= 0 ? 1 - newcount : 1}
                        </option>
                        <option selected={reset ? 0 : newcount} value={2}>
                            {newcount >= 0 ? 2 - newcount:2}
                        </option>
                    
                    </Form.Select>
                    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                        <option value="0">blue</option>
                        <option value="1-newcount">red</option>
                        <option value="2-newcount">green</option>
                        <option value="3-newcount">brown</option>
                        <option value="4-newcount">pink</option>
                        <option value="5-newcount">yellow</option>
                        <option value="6-newcount">chokolate</option>
                    </Form.Select>
                </div>
            </div>
            <div className="result d-flex justify-content-between align-item-center mt-5">
                <h6>$ {count > 6 ? 0.00 : (count * 0.60).toFixed(2)}</h6>
                <h6>{count > 6 ? 6 : count}/6</h6>
            </div>
        </div>
    );
};

export default ProductInfoBar;