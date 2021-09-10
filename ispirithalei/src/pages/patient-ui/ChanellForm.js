import { Container } from '@material-ui/core';
import React from 'react';
import Controls from '../../components/patient-ui/Echannelling/Controls';
import { useForm, Form } from '../../components/patient-ui/Echannelling/useForm';
import * as PaitientService from "../../services/PaitientService";
import PageHeader from "../../components/patient-ui/Echannelling/HeaderStyles";

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    doctorId: '',
    bookDate: new Date(),
    isConfirm: false,
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
        if ('doctorId' in fieldValues)
            temp.doctorId = fieldValues.doctorId.length!== 0 ? "" : "This field is required."
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
                        label="City/Town"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />

                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
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
                    />
                    <Controls.Checkbox
                        name="isConfirm"
                        label="Confirming that all the above entered details are correct!"
                        value={values.isConfirm}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Channel" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
             
            </container>
        </Form>
        </Container>
    )
}
