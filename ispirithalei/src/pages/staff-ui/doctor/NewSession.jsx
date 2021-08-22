import React, {useState} from "react";
import DateFnsUtils from "@date-io/date-fns";
import {Button, Container, TextField, Typography} from "@material-ui/core";
import {
    MuiPickersUtilsProvider, DatePicker, TimePicker,
} from "@material-ui/pickers";
import style from "./newSession.css";


function NewSession() {
    let date = new Date();
    date.setHours(date.getHours() + Math.ceil(date.getMinutes()/60));
    date.setMinutes(0, 0, 0);
    const [selectedDate, handleDateChange] = useState(date);
    const [value, setValue] = React.useState("10");
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container>
            <Typography variant="h6">New Session Form</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="session-date"
                    label="Select Session Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                /> <br/> <br/>

                <TimePicker
                    variant="inline"
                    margin="normal"
                    id="time-picker"
                    label="Select Time"
                    minutesStep={60}
                    value={selectedDate}
                    onChange={handleDateChange}
                /> <br/> <br/>
            </MuiPickersUtilsProvider>

            <TextField
                className={style.sessionFormField}
                id="maximum-appointments"
                label="Maximum Appointments"
                margin={"normal"}
                defaultValue="10"
                type="number"
                InputProps={{ inputProps: { min: 10, max: 50 } }}
                helperText="Enter a number between 10 and 50"
                variant="outlined"
                value={value}
                onChange={handleChange}
                { ...((value<10 || value>50) && {error:true}) }
            /> <br /><br/>

            <Button type="submit" variant="contained" color="primary" size={"large"} { ...((value<10 || value>50) && {disabled:true}) }>Submit</Button>

            </Container>
    );
}

export default NewSession;