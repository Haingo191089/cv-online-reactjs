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

import * as common from '../../../../common/js/common';

export default function PersonalInfoComponent() {
    const personalInfo = useSelector((state) => {
        return state.personalInfor;
    })

    const dispatch = useDispatch();

    const handleBirthdayChange = function (date) {
        dispatch(setPersonalInfor({
            birthday: common.convertDateToString(date)
        }))
    }

    const changePersonalInfo = function (e, index) {
        dispatch(setPersonalInfor({
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <Accordion.Item eventKey="personal-infor" className='personal-infor'>
                <Accordion.Header>
                    Personal Information
                </Accordion.Header>
                <Accordion.Body>
                    <div className='row mt-2'>
                        <div className='col-3 birthday'>
                            <FloatingDatePicker label="birthday" onChange={(date) => handleBirthdayChange(date)} selected={common.convertStringToDate(personalInfo.birthday)} />

                        </div>
                        <div className='col-3'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Place Of Birth"
                            >
                                <Form.Control type="text" name="placeOfBirth" value={personalInfo.placeOfBirth} onChange={changePersonalInfo} placeholder="place of birth" />
                            </FloatingLabel>
                        </div>
                        <div className='col-3'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="gender"
                            >
                                <Form.Select aria-label="Default select example" name="gender" value={personalInfo.gender} onChange={changePersonalInfo}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <div className='col-3'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="maritalStatus"
                            >
                                <Form.Select aria-label="Default select example" name="maritalStatus" value={personalInfo.maritalStatus} onChange={changePersonalInfo}>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="widowed">Widowed</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}