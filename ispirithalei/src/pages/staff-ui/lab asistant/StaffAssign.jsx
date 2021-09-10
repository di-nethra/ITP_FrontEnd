import "./staffassign.css"
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function StaffAssign() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (

        <div className="newUser">
            <span className="newUserTitle">Specimen Staff Assigning Form</span>
            <div class="detailsbock1">
                <span className="newUserTitle1">Details</span>
                <div class="detailsbock">
                    <div className="newUserItem">
                        <label>Specimen ID</label>
                        <input type="text" placeholder="10001" />
                    </div>
                    <div className="newUserItem">
                        <label>Patient Name</label>
                        <input type="text" placeholder="Sudu Appo" />
                    </div>
                    <div className="newUserItem">
                        <label>Phone No</label>
                        <input type="text" placeholder="0774020028" />
                    </div>
                    <div className="newUserItem">
                        <label>Date of Birth</label>
                        <input type="text" placeholder="09/09/1999" />
                    </div>
                    <div className="newUserItem">
                        <label>Test Type</label>
                        <input type="text" placeholder="FSH" />
                    </div>
                </div>
            </div>
            <div class="detailsbock1">
                <span className="newUserTitle1">Staff Assigning</span>
                <div class="detailsbock">
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Incharge Lab Assistant ID</label>
                            <input type="text" placeholder="Insert a lab asistant ID" />
                        </div>
                        <div className="newUserItem">
                            <label>Incharge Lab Assistant Name</label>
                            <input type="text" placeholder="Insert a lab asistant name" />
                        </div>
                        <div className="newUserItem">
                            <label>Status</label>
                            <select className="newUserSelect" name="active" id="active">
                                <option value="subbmitted">Subbmitted</option>
                                <option value="inprogress">In-Progress</option>
                            </select>
                        </div>
                        <div className="newUserItem">
                            <label>Start Date by Assistant</label>
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
                        <button className="newUserButton">Assign Test</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
