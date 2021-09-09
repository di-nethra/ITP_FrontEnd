import React, {Component} from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import empFormService from '../../../services/empForm.service';
import Role from './Role';

export class FormDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

        const data = {
            firstName: this.props.values.firstName,
            lastName: this.props.values.lastName,
            email: this.props.values.email,
            mobile: this.props.values.mobile,
            address: this.props.values.address,

          };

        console.log(this.props.values);

        console.log(data.email);
        empFormService
        .create(data)
    
        .then((response) => {
            alert("success");
            console.log("inside create" + response.data);
    
            this.setState({
            firstName: response.data.firstName,
            email: response.data.email,
            });
            console.log("inside then" + response.data);
        })
        .catch((e) => {
            alert(e);
            console.log("this is the error:" + e);
        });
    
        this.props.nextStep();
    }



    render(){
        const {values, handleChange} = this.props;
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <Role />

                        <TextField 
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <br/>
                        <TextField 
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <br/>
                        <TextField 
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <br/>
                        <TextField 
                            label="Mobile"
                            onChange={handleChange('mobile')}
                            defaultValue={values.email}
                        />
                        <br/>
                        <TextField 
                            label="Adress"
                            onChange={handleChange('address')}
                            defaultValue={values.email}
                        />
                        <br/>
                        <br/>
                        <Button 
                        variant="contained" 
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                        >Submit</Button>

                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

const styles = {
    button:{
        margin: 15,
    }
}

export default FormDetails;