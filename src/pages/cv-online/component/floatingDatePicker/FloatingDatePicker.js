import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

export default function FloatingDatePicker(props) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const getYear = function (date) {
        return date.getFullYear();
    }

    // const currentYear = getYear(new Date()) + 1
    
    const getMonth = function (date) {
        return months[date.getMonth()];
    }
    
    const range = function (yearStart, yearEnd, step) {
        const result = [];
        let y = yearStart;
        for(; y < Number(yearEnd); y = y + Number(step)) {
            console.log(y)
            result.push(y);
        }
        return result;
    }
    
    const years = range(1950, getYear(new Date()), 1);
    
    return (
        <div className="floatingDatePicker">
            <label>{props.label}</label>
            <DatePicker
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div
                        style={{
                            margin: 10,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {"<"}
                        </button>
                        <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}
                        >
                            {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                                changeMonth(months.indexOf(value))
                            }
                        >
                            {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {">"}
                        </button>
                    </div>
                )}
                selected={props.selected}
                onChange={props.onChange}
            />
        </div>
    );
};