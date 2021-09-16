import React, {useEffect} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
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

    const [doctor, setDoctor] = React.useState("null");
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
                                <InputLabel id="doctor-name">Doctor Name</InputLabel>
                                <Select
                                    labelId="doctor-name"
                                    id="doctor-name"
                                    value={doctor}
                                    onChange={handleChange}
                                    label="Doctor Name"
                                >
                                    {doctors.length ? doctors.map(eachDoctor => (
                                        <MenuItem key={eachDoctor._id} value={eachDoctor._id}>
                                            <p>{eachDoctor.firstName + " " + eachDoctor.lastName}</p>
                                        </MenuItem>
                                    )) : <MenuItem value={"null"} disabled>
                                        <em>No Doctors</em>
                                    </MenuItem>
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <Link to={ doctor !== "null"? ("/patient/" + doctor): ""}>
                            <Button className={classes.button} variant="contained" color="primary" size={"large"}
                                    type="submit">
                                Submit
                            </Button>
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>

        </div>
    );
}

export default DoctorSelect;