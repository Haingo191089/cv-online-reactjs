import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setGeneral } from '../../../../store/slices/general';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import FloatingDatePicker from '../floatingDatePicker/FloatingDatePicker';

import { setPersonalInfor } from '../../../../store/slices/personal_infor';

export default function PersonalInfoComponent() {
    const personalInfo = useSelector((state) => {
        return state.personalInfor;
    })

    const dispatch = useDispatch();

    const handleBirthdayChange = function (date) {
        dispatch(setPersonalInfor({
            birthday: date
        }))
    }

    // const changeLanguage = function (e, index) {
    //     dispatch(setLanguage({
    //         [e.target.name]: e.target.value,
    //         index
    //     }))
    // }

    // const handleAddLanguage = function () {
    //     dispatch(addLanguage())
    // }

    return (
        <>
            <Accordion.Item eventKey="personal-infor" className='personal-infor'>
                <Accordion.Header>
                    Personal Information
                </Accordion.Header>
                <Accordion.Body>
                    <div className='row mt-2'>
                        <div className='col-3 mt-2 birthday'>
                            {/* <label>Birthday</label> */}
                            {/* <DatePicker monthsShown={2} selected={personalInfo.birthday} onChange={(date) => handleBirthdayChange(date)} /> */}
                            <FloatingDatePicker label="birthday" onChange={(date) => handleBirthdayChange(date)} selected={personalInfo.birthday}/>
                        </div>
                        
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}