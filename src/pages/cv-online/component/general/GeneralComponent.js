import React, { useRef, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setGeneral } from '../../../../store/slices/general';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Image from 'react-bootstrap/Image'

import defaultAvatar from '../../../../images/default_avatar.png';
import {getDataUrlFromFile} from '../../../../common/js/common';

export default function GeneralComponent() {
    const [isDefaultAvatar, setIsDefaultAvatar] = useState(true);
    const [avatarText, setAvatarText] = useState("Choose your avatar");
    const inputAvatarEl = useRef(null);

    const general = useSelector((state) => {
        return state.general;
    })

    const dispatch = useDispatch();

    const changeGeneral = function (e) {
        dispatch(setGeneral({
            [e.target.name]: e.target.value
        }))
    }

    const handleClickAvatar = function (e) {
        inputAvatarEl.current.click()
    }

    const handleClickAvatarText = function (e) {
        if (isDefaultAvatar) {
            inputAvatarEl.current.click()
        } else {
            removeAvatar();
        }
    }

    const removeAvatar = function() {
        dispatch(setGeneral({
            avatar: defaultAvatar
        }))
        setIsDefaultAvatar(true);
        setAvatarText("Choose your avatar");
        inputAvatarEl.current.value = ''
    }

    const changeAvatar = async function (e) {
        if (e.target?.files?.length > 0) {
            const dataUrl = await getDataUrlFromFile(e.target.files[0])
            dispatch(setGeneral({
                avatar: dataUrl
            }))
            setAvatarText("Remove your avatar");
            setIsDefaultAvatar(false);
        } else {
            dispatch(setGeneral({
                avatar: defaultAvatar
            }))
            setAvatarText("Choose your avatar");
            setIsDefaultAvatar(true);
        }
    }

    return (
        <>
            <Accordion.Item eventKey="general" className='general'>
                <Accordion.Header>General</Accordion.Header>
                <Accordion.Body>
                    <Form className='row'>
                        <div className='col-6'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name"
                                className='mb-3'
                            >
                                <Form.Control type="text" name="name" value={general.name} onChange={changeGeneral}  placeholder="Alex Alu" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Job Title"
                            >
                                <Form.Control type="text" name="jobTitle" value={general.jobTitle} onChange={changeGeneral} placeholder="Alex Alu" />
                            </FloatingLabel>
                        </div>
                        <div className='col-6 d-flex align-items-center'>
                            <Image src={general.avatar} className="general__avatar pointer" onClick={handleClickAvatar} height="130"/>
                            <p className='pointer text-primary ms-2' onClick={handleClickAvatarText}>{ avatarText }</p>
                            <input type="file" hidden ref={inputAvatarEl} onChange={changeAvatar}/>
                        </div>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}