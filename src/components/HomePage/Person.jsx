import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from '../../actions/company';
import { createPerson } from '../../actions/person';

export default function Person() {
    let { Companies } = useSelector(state => state.companyReducer)
    const inputRef = useRef({});
    const dispatch = useDispatch()

    const clearInputs = () => {
        inputRef.current['Name'].value = '';
        inputRef.current['Address'].value = '';
        inputRef.current['Company'].value = '';
        
    }

    // console.log(Companies);
    return (
        <div className="Container">
            <h1> Create New Person</h1>
            {/* FORM */}
            <form onSubmit={(e) => {
               
                e.preventDefault()
                const payload = {
                    Name: inputRef.current['Name'].value,
                    Address: inputRef.current['Address'].value,
                    Company : inputRef.current['Company'].value
                }
               
                clearInputs()
                dispatch(addEmployee(payload.Company))
                dispatch(createPerson(payload))
            }}>
                <p>Name</p>
                <input type='text' minLength='3'  required ref={el => inputRef.current['Name'] = el} ></input>
                <p>Address</p>
                <input type='text' minLength='3' required ref={el => inputRef.current['Address'] = el} ></input>
                <p> Select Employer </p>
                <select required ref={el => inputRef.current['Company'] = el} >
                    {Companies.map(company  => {
                        return (<option value={company.Name}>{company.Name}</option>)
                    })}
                </select>
                <br />
                <button type='submit'>save</button>
            </form>
        </div>
    )
}