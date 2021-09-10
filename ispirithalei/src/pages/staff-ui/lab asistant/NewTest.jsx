import 'date-fns';
import './newtest.css'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function NewTest() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('1971-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className="newUser">
            <span className="newUserTitle">New Test Form</span>
            <div class="detailsbock1">
                <span className="newUserTitle1">Details</span>
                <div class="detailsbock">
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Patients Name</label>
                            <input type="text" placeholder="Enter Patient Name" />
                        </div>
                        <div className="newUserItem">
                            <label>Contact Number</label>
                            <input type="text" placeholder="Enter Contact Number" />
                        </div>
                        <div className="newUserItem">
                            <label>Date of Birth</label>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="newUserItem">
                            <label>Test Type</label>
                            <div className="newUserGender">
                                <input type="radio" name="testtype" id="TSH" value="TSH" />
                                <label for="TSH">TSH</label>
                                <input type="radio" name="testtype" id="FBC" value="FBC" />
                                <label for="FBC">FBC</label>
                                <input type="radio" name="testtype" id="COVID19" value="COVID19" />
                                <label for="COVID19">COVID-19</label>
                                <input type="radio" name="testtype" id="BG" value="BG" />
                                <label for="BG">Blood Glucose</label>  
                            </div>
                        </div>
                        <div className="newUserItem">
                            <label>Sample Collected Person</label>
                            <select className="newUserSelect" name="active" id="active">
                                <option value="Jagath">Jagath</option>
                                <option value="Kalusundara">Kalusundara</option>
                            </select>
                        </div>
                        <div className="newUserItem1">
                            <label>Before subbmit results please double check</label>
                        </div>
                        <button className="newUserButton">Subbmit the Sample</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
