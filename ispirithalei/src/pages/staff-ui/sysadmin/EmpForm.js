import React, {Component} from 'react'
import FormDetails from './FormDetails';

export class EmpForm extends Component{
    state ={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: ''

    }

    //proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    

    render(){
        const {step} = this.state;
        const {firstName, lastName, email, mobile, address} = this.state;
        const values = {firstName, lastName, email, mobile, address}

        switch(step){
            case 1:
                return(
                    <FormDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>form details</h1>
        }
    }
}

export default EmpForm;