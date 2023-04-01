import React from 'react';

import Accordion from 'react-bootstrap/Accordion';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { setLanguage, addLanguage, removeLanguage, setIsDisplay } from '../../../../store/slices/languages'

export default function LanguageComponent() {
    const languages = useSelector((state) => {
        return state.languages.languages;
    })
    const isDisplay = useSelector((state) => {
        return state.languages.isDisplay;
    })

    const dispatch = useDispatch();

    const handleRemoveLanguage = function (index) {
        dispatch(removeLanguage({
            index
        }))
    }

    const changeLanguage = function (e, index) {
        dispatch(setLanguage({
            [e.target.name]: e.target.value,
            index
        }))
    }

    const handleAddLanguage = function () {
        dispatch(addLanguage())
    }

    const handleChangeIsDisplay = function (e) {
        dispatch(setIsDisplay({
            isDisplay: e.target.checked
        }))
    }

    const renderLanguageSetting = function () {
        return languages.map((language, index) => (
            <React.Fragment key={index}>
                <div className='col-3 mt-2'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                    >
                        <Form.Control type="text" name="name" value={language.name} onChange={(e) => changeLanguage(e, index)} placeholder="English" />
                    </FloatingLabel>
                </div>
                <div className='col-3  mt-2'>
                    <Form.Select aria-label="Default select example" name="level" value={language.level} onChange={(e) => changeLanguage(e, index)}>
                        <option value="Beginners">Beginners</option>
                        <option value="Pre-intermediate">Pre-intermediate</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Upper-intermediate">Upper-intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Proficiency">Proficiency</option>
                    </Form.Select>
                </div>
                <div className='col-6 d-flex align-items-center mt-2'>
                    <Button variant="warning" onClick={() => handleRemoveLanguage(index)}>Remove Language</Button>
                </div>
            </React.Fragment>
        ))
    }

    return (
        <>
            <Accordion.Item eventKey="language" className='language'>
                <Accordion.Header>
                    Language
                </Accordion.Header>
                <Accordion.Body>
                    <div className='d-flex'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Display Languages on your CV"
                            reverse
                            checked={isDisplay}
                            onChange={handleChangeIsDisplay}
                        />
                        <Button className='ms-auto' variant="primary" onClick={handleAddLanguage}>Add A Language</Button>
                    </div>
                    <div className='row mt-2'>
                        {renderLanguageSetting()}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}