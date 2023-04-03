import { forwardRef } from 'react';
import DatePicker from "react-datepicker";

import { useRef, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

const FloatingMonthPicker = forwardRef(function FloatingMonthPicker(props, ref) {
    const labelRef = useRef(null);
    const inputRef = useRef(null);

    const floatingUpLabel = function () {
        labelRef.current.style.transform = "scale(0.85)";
        labelRef.current.style.zIndex = "9999";
        labelRef.current.style.top = "5px";
        labelRef.current.style.color= '#ced4da';
    }

    const floatingDownLabel = function () {
        labelRef.current.style.transform = "scale(1)";
            labelRef.current.style.zIndex = "9999";
            labelRef.current.style.top = "15px";
            labelRef.current.style.color= 'var(--bs-accordion-color)';
    }

    const focusInput = function () {
        floatingUpLabel();
    }

    const blurInput = function () {
        if (!props.selected) {
            floatingDownLabel();
        }
    }

    const focusMonthPicker = function () {
        inputRef.current.setFocus()
    }

    return (
        <div className="floatingMonthPicker" onClick={focusMonthPicker}>
            <label ref={labelRef}>{props.label}</label>
            <DatePicker
                ref={inputRef}
                onFocus={focusInput}
                onBlur={blurInput}
                {...props}
                dateFormat="yyyy/MM"
                showMonthYearPicker
            />
        </div>
    );
  });

export default FloatingMonthPicker;