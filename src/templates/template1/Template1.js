import React from 'react';

import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../../store/slices/general';

import './styles.scss';

export default function Template1() {
    const general = useSelector((state) => {
        return state.general

    })
    const dispatch = useDispatch()
    return (
        <div id="template1">
            template1
            <p> {general.name} </p>
            <p> {general.jobTitle} </p>
        </div>
    )
}