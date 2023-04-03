import React, { useRef } from 'react';

import Accordion from 'react-bootstrap/Accordion';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FloatingMonthPicker from '../floatingMonthPicker/FloatingMonthPicker';
import { Editor } from '@tinymce/tinymce-react';

import * as common from '../../../../common/js/common';

import { setEmploymentHistory, addEmploymentHistory, removeEmploymentHistory, setIsDisplay } from '../../../../store/slices/employment_history'

export default function EmploymentHistoryComponent() {
    const employmentHistories = useSelector((state) => {
        return state.employmentHistory.employmentHistory;
    })
    const isDisplay = useSelector((state) => {
        return state.employmentHistory.isDisplay;
    })

    const dispatch = useDispatch();

    const handleRemoveEmployment = function (index) {
        dispatch(removeEmploymentHistory({
            index
        }))
    }

    const handleAddEmployment = function () {
        dispatch(addEmploymentHistory())
    }

    const handleChangeIsDisplay = function (e) {
        dispatch(setIsDisplay({
            isDisplay: e.target.checked
        }))
    }

    const handleTimeChange = function (date, type, index) {
        dispatch(setEmploymentHistory({
            value: common.convertMonthToString(date),
            index,
            type
        }))
    }

    const displayMonth = function (month) {
        return month ? common.convertStringToMonth(month) : null;
    }

    const saveContent = (index) => {
        if (editorRefs[index]) {
            dispatch(setEmploymentHistory({
                value: editorRefs[index].getContent(),
                index,
                type: 'content'
            }))
        }
    };

    const editorRefs = useRef([])

    const renderEmploymentHistoryList = function () {
        return employmentHistories.map((employmentHistory, index) => {
            return (
                <React.Fragment key={index}>
                    <div className='row'>
                        <div className='col-3 mt-2'>
                            <FloatingMonthPicker label="from" name="from" onChange={(date) => handleTimeChange(date, 'from', index)} selected={displayMonth(employmentHistory.from)} />
                        </div>
                        <div className='col-3 mt-2'>
                            <FloatingMonthPicker label="to" name="to" onChange={(date) => handleTimeChange(date, 'to', index)} selected={displayMonth(employmentHistory.to)} />
                        </div>
                        <div className='col-3 d-flex align-items-center mt-2'>
                            <Button variant="warning" onClick={() => saveContent(index)}>Save Content Education</Button>
                        </div>
                        <div className='col-3 d-flex align-items-center mt-2'>
                            <Button variant="warning" onClick={() => handleRemoveEmployment(index)}>Remove Education</Button>
                        </div>
                        <div className='col-12 mt-2'>
                            <Editor
                                apiKey='0fke3u0fxplngbv2wx8c76szzw01rnoll59037dlm1ehdgin'
                                onInit={(evt, editor) => editorRefs[index] = editor}
                                initialValue={employmentHistory.content}
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'lists'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                        </div>
                    </div>
                </React.Fragment>
            )
        })
    }

    return (
        <>
            <Accordion.Item eventKey="employment-history" className='employment-history'>
                <Accordion.Header>
                    Employment History
                </Accordion.Header>
                <Accordion.Body>
                    <div className='d-flex'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Display Employments on your CV"
                            reverse
                            checked={isDisplay}
                            onChange={handleChangeIsDisplay}
                        />
                        <Button className='ms-auto' variant="primary" onClick={handleAddEmployment}>Add A Employment History</Button>
                    </div>
                    <div className='row mt-2'>
                        {renderEmploymentHistoryList()}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}