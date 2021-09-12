import { Container } from '@material-ui/core';
import React from 'react';
import Controls from '../../components/patient-ui/Echannelling/Controls';
import { useForm, Form } from '../../components/patient-ui/Echannelling/useForm';
import * as PaitientService from "../../services/PaitientService";
import { useState } from "react";

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    age: '',
    nic:'',
    gender: 'male',
    doctorId: '',
    bookDate: new Date(),
   
}

export default function EForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('nic' in fieldValues)
            temp.nic = fieldValues.nic.length > 9 ? "" : "Minimum 10 Characters required icluding V"
        if ('age' in fieldValues)
            temp.age = fieldValues.age ? "" : "This field is required"
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            PaitientService.insertEmployee(values)
            resetForm()
        }
    }

    const [isDisabled, setIsDisabled] = useState(true);

    function changeCheck() {
        setIsDisabled(!isDisabled);
    }




    return (
        
        <Container maxWidth="md">
        <h3>E Channelling</h3>
        <h4>For channelling entry your details below</h4>
        <br/>
        <Form onSubmit={handleSubmit}>
            <container>
                
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                     <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                     <Controls.Input
                        label="National Identity Card Number (NIC)"
                        name="nic"
                        value={values.nic}
                        onChange={handleInputChange}
                        error={errors.nic}
                    />
                   
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="Age"
                        name="age"
                        value={values.age}
                        onChange={handleInputChange}
                    />

                   
                    {/* <Controls.Select
                        name="doctorId"
                        label="Doctor"
                        value={values.doctorId}
                        onChange={handleInputChange}
                        options={PaitientService.getDepartmentCollection()}
                        error={errors.doctorId}
                    />
                    <Controls.DatePicker
                        name="bookDate"
                        label="Appointment Date"
                        value={values.bookDate}
                        onChange={handleInputChange}
                    /> */}
                    <Controls.Checkbox
                        name="isConfirm"
                        label="Confirming that all the above entered details are correct!"
                         onChange={changeCheck}
                    />

                    <div>
                        <Controls.Button
                            disabled={isDisabled}
                            type="submit"
                            text="Channel" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} 
                                
                            />
                    </div>
             
            </container>
        </Form>
        </Container>
    )
}
