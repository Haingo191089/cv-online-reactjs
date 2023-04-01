import React from 'react';

import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../store/slices/counterSlice';

import './styles.scss';

export default function Template1() {
    const general = useSelector((state) => {
        return state.general

    })
    const dispatch = useDispatch()

    return (
        <div id="template2">
            template2
            <p> {general.jobTitle} </p>
            <p> {general.name} </p>
        </div>
    )
}