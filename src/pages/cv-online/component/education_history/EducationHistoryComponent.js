import React, { useRef } from 'react';

import Accordion from 'react-bootstrap/Accordion';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FloatingMonthPicker from '../floatingMonthPicker/FloatingMonthPicker';
import { Editor } from '@tinymce/tinymce-react';

import * as common from '../../../../common/js/common';

import { setEducationHistory, addEducationHistory, removeEducationHistory, setIsDisplay } from '../../../../store/slices/education_history'

export default function EducationHistoryComponent() {
    const eductionHistories = useSelector((state) => {
        return state.educationHistory.educationHistory;
    })
    const isDisplay = useSelector((state) => {
        return state.educationHistory.isDisplay;
    })

    const dispatch = useDispatch();

    const handleRemoveEducation = function (index) {
        dispatch(removeEducationHistory({
            index
        }))
    }

    const handleAddEducation = function () {
        dispatch(addEducationHistory())
    }

    const handleChangeIsDisplay = function (e) {
        dispatch(setIsDisplay({
            isDisplay: e.target.checked
        }))
    }

    const handleTimeChange = function (date, type, index) {
        dispatch(setEducationHistory({
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
            dispatch(setEducationHistory({
                value: editorRefs[index].getContent(),
                index,
                type: 'content'
            }))
        }
    };

    const editorRefs = useRef([])

    const renderEducationHistoryList = function () {
        return eductionHistories.map((eductionHistory, index) => {
            return (
                <React.Fragment key={index}>
                    <div className='row'>
                        <div className='col-3 mt-2'>
                            <FloatingMonthPicker label="from" name="from" onChange={(date) => handleTimeChange(date, 'from', index)} selected={displayMonth(eductionHistory.from)} />
                        </div>
                        <div className='col-3 mt-2'>
                            <FloatingMonthPicker label="to" name="to" onChange={(date) => handleTimeChange(date, 'to', index)} selected={displayMonth(eductionHistory.to)} />
                        </div>
                        <div className='col-3 d-flex align-items-center mt-2'>
                            <Button variant="warning" onClick={() => saveContent(index)}>Save Content Education</Button>
                        </div>
                        <div className='col-3 d-flex align-items-center mt-2'>
                            <Button variant="warning" onClick={() => handleRemoveEducation(index)}>Remove Education</Button>
                        </div>
                        <div className='col-12 mt-2'>
                            <Editor
                                apiKey='0fke3u0fxplngbv2wx8c76szzw01rnoll59037dlm1ehdgin'
                                onInit={(evt, editor) => editorRefs[index] = editor}
                                initialValue={eductionHistory.content}
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
            <Accordion.Item eventKey="education-history" className='education-history'>
                <Accordion.Header>
                    Education History
                </Accordion.Header>
                <Accordion.Body>
                    <div className='d-flex'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Display Educations on your CV"
                            reverse
                            checked={isDisplay}
                            onChange={handleChangeIsDisplay}
                        />
                        <Button className='ms-auto' variant="primary" onClick={handleAddEducation}>Add A Education History</Button>
                    </div>
                    <div className='row mt-2'>
                        {renderEducationHistoryList()}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}