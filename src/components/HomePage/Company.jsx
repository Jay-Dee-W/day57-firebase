import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createCompany } from '../../actions/company';

export default function Company() {
    const dispatch = useDispatch()

    const clearInputs = () => {
        inputRef.current['Name'].value = '';
        inputRef.current['Address'].value = '';
        inputRef.current['Revenue'].value = '';
        inputRef.current['Phone'].value = '';
    }
    const inputRef = useRef({});
    useEffect(() => {
        clearInputs()
    }, []);

    return (
        <div className="Container">
            <h1> Create New Company</h1>
            {/* FORM */}
            <form onSubmit={(e) => {
                e.preventDefault()
                const payload = {
                    Name: inputRef.current['Name'].value,
                    Address: inputRef.current['Address'].value,
                    Revenue: inputRef.current['Revenue'].value,
                    Phone: inputRef.current['Phone'].value
                }
                clearInputs()
                dispatch(createCompany(payload))
            }

            }>

                <lable>Name</lable>
                <div>
                    <input type='text' minLength='3' required ref={el => inputRef.current['Name'] = el} /> <span class="validity"></span>
                </div>
                <div>
                    <lable>Address</lable>
                    <input type='text' minLength='3' required ref={el => inputRef.current['Address'] = el} /> <span class="validity"></span>
                </div>
                <div>
                    <lable>Revenue</lable>
                    <input type='number' min='1' required ref={el => inputRef.current['Revenue'] = el} /> <span class="validity"></span>
                </div>
                <div>
                    <lable>Phone </lable>
                    <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ref={el => inputRef.current['Phone'] = el} />  <span class="validity"></span>
                </div>
                <div>
                <button type='submit'>save</button>
                </div>
            </form>

        </div>
    )
}