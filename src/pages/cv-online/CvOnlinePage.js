import React from 'react';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setGeneral } from '../../store/slices/general';
import { setTemplateName } from '../../store/slices/settings';

import GeneralComponent from './component/general/GeneralComponent';
import LanguageComponent from './component/language/LanguageComponent';
import PersonalInfoComponent from './component/personal_infor/PersonalInfoComponent';
import ContractComponent from './component/contract/ContractComponent';
import EducationHistoryComponent from './component/education_history/EducationHistoryComponent';
import EmploymentHistoryComponent from './component/employment_history/EmploymentHistoryComponent';

import { listTemplate } from '../../templates';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CvOnlinePage() {
    const TemplateName = useSelector((state) => {
        return state.settings.templateName;
    })

    const dispatch = useDispatch()

    const getTemplatePreview = function () {
        return listTemplate[TemplateName];
    }

    const changeName = function (e) {
        dispatch(setGeneral({
            name: e.target.value
        }))
    }

    const changeTemplate = function (e) {
        dispatch(setTemplateName(e.target.value))
    }

    return (
        <div id="cv-online-page" className="row">
            <div className="col-7 bg-white p-5">
                <div className='w-100 h-100 scrollable'>
                    <Accordion defaultActiveKey="general">
                        <GeneralComponent/>
                        <LanguageComponent/>
                        <PersonalInfoComponent/>
                        <ContractComponent/>
                        <EducationHistoryComponent/>
                        <EmploymentHistoryComponent/>
                    </Accordion>
                </div>
            </div>
            <div className="col-5 cv-preview p-5 scrollable">
                <Card className='shadow-lg'>
                    <Card.Body>
                        {getTemplatePreview()}
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}