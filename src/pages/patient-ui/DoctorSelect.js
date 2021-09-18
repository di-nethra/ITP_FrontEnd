import React, {useEffect} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import empformServices from "../../services/empForm.service"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
    },
    button: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1)
    },
}));

function DoctorSelect() {

    let history = useHistory();
    useEffect(() => {
        empformServices.getAllDoctors()
            .then(response => {
                setDoctors(response.data)
            })
            .catch(e =>
                console.log(e)
            )
    }, [])

    const classes = useStyles();

    const [doctor, setDoctor] = React.useState("");
    const [doctors, setDoctors] = React.useState([]);

    const handleChange = (event) => {
        setDoctor(event.target.value);
    };

    return (
        <div style={{margin: 10, padding: 100}}>
            <Card>
                <CardContent>
                    <h2>LET'S GET STARTED BY SELECTING YOUR DOCTOR</h2>
                    <br/>

                    <form>
                        <div>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="doctor-name-label">Doctor Name</InputLabel>
                                <Select
                                    labelId="doctor-name-label"
                                    placeholder="Doctor Name"
                                    id="doctor-name"
                                    value={doctor}
                                    onChange={handleChange}
                                    label="Doctor Name"
                                    required
                                    autoFocus={false}
                                >
                                    <MenuItem value="" disabled>
                                        <p>Doctor Name</p>
                                    </MenuItem>
                                    {doctors.length ? doctors.map(eachDoctor => (
                                        <MenuItem key={eachDoctor._id} value={eachDoctor._id}>
                                            <p>{eachDoctor.firstName + " " + eachDoctor.lastName}</p>
                                        </MenuItem>
                                    )) : null
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div>

                            <Button className={classes.button} variant="contained" color="primary" size={"large"}
                                    type="submit"
                                    {...(doctor === "") && {disabled: true} }
                                    onClick={() => {
                                        history.push("/patient/" + doctor)
                                    }}
                            >
                                Next
                            </Button>

                        </div>
                    </form>
                </CardContent>
            </Card>

        </div>
    );
}

export default DoctorSelect;