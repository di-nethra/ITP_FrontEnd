import React, {useState} from "react";
import {Button, Container, TextField, Typography} from "@material-ui/core";
import style from "./newSession.css";
import SessionDataService from "../../../services/doctorSession.service"
import moment from 'moment';
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";


const NewSession = () => {
    let history = useHistory();
    let temp = sessionStorage.getItem("user");
    let currentUser = JSON.parse(temp);
    let date = new Date();
    date.setHours(date.getHours() + Math.ceil(date.getMinutes()/60));
    date.setMinutes(0, 0, 0);

    let time = moment(date).format("HH:mm")
    let fdate = moment(date).format("YYYY-MM-DD")

    const [selectedDate, setSelectedDate] = useState(fdate);
    const [selectedTime, setSelectedTime] = useState(time);
    const [value, setValue] = useState(10);

    const handleDateChange = event => {
        setSelectedDate(event.target.value);
    }
    const handleTimeChange = event => {
        setSelectedTime(event.target.value);
    }
    const handleValueChange = event => {
        setValue(event.target.value);
    }

    const saveSession = () => {

        let formData = {
            doctorID: currentUser?.id,
            sessionDate: selectedDate,
            sessionTime: selectedTime,
            maxAppointments: value,
        };
        console.log(formData);
        SessionDataService.create(formData)
            .then(response => {
                setSelectedDate(response.data.sessionDate);
                setSelectedTime(response.data.sessionTime);
                setValue(response.data.maxAppointments);
                Swal.fire(
                    "Success",
                    "Session Added Successfully",
                    "success"
                ).then(() => {
                    history.push("/staff/doctor/doctorschedule/" + currentUser.id)
                });

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                })
            });
    };

    return (
        <Container>
            <Typography variant="h6"> New Session Form </Typography>
                        <TextField
                            id="doctorID"
                            name="doctorID"
                            type="hidden"
                            value="D001"
                        />
                        <TextField
                    id="sessionDate"
                    name="sessionDate"
                    type="date"
                    variant="outlined"
                    margin="normal"
                    inputProps={{ min: selectedDate }}
                    defaultValue={selectedDate}
                    onChange={handleDateChange}
                /> <br/> <br/>

                <TextField
                    id="sessionTime"
                    name="sessionTime"
                    variant="outlined"
                    margin="normal"
                    type="time"
                    helperText="Enter a time between 09:00 AM and 06:00 PM"
                    inputProps={{ min: "09:00", max:"18:00"}}
                    { ...((selectedTime < "09:00" || selectedTime > "18:00") && {error:true}) }
                    value={selectedTime}
                    onChange={handleTimeChange}
                />
                <br/> <br/>


            <TextField
                className={style.sessionFormField}
                id="maximumAppointments"
                name="maximumAppointments"
                label="Maximum Appointments"
                margin={"normal"}
                type="number"
                InputProps={{ inputProps: { min: 10, max: 50 } }}
                helperText="Enter a number between 10 and 50"
                variant="outlined"
                value={value}
                onChange={handleValueChange}
                required={true}
                { ...((value<10 || value>50) && {error:true}) }
            /> <br /><br/>

            <Button onClick={saveSession}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size={"large"}
                    { ...((selectedTime < "09:00" || selectedTime > "18:00" ||value<10 || value>50) && {disabled:true}) }>
                Submit
            </Button>
            </Container>
    );
};

export default NewSession;