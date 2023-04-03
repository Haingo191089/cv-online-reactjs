import React from 'react';

import Accordion from 'react-bootstrap/Accordion';

import "react-datepicker/dist/react-datepicker.css";
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setContract } from '../../../../store/slices/contract';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function ContractComponent() {
    const contract = useSelector((state) => {
        return state.contract;
    })

    const dispatch = useDispatch();

    const changeContract = function (e, index) {
        dispatch(setContract({
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <Accordion.Item eventKey="contract" className='contract'>
                <Accordion.Header>
                    Contract Information
                </Accordion.Header>
                <Accordion.Body>
                    <div className='row mt-2'>
                        <div className='col-3'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Phone"
                            >
                                <Form.Control type="text" name="phone" value={contract.phone} onChange={changeContract} placeholder="phone" />
                            </FloatingLabel>
                        </div>
                        <div className='col-3'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                            >
                                <Form.Control type="text" name="email" value={contract.email} onChange={changeContract} placeholder="email" />
                            </FloatingLabel>
                        </div>
                        <div className='col-3'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Address"
                            >
                                <Form.Control type="text" name="address" value={contract.address} onChange={changeContract} placeholder="address" />
                            </FloatingLabel>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}