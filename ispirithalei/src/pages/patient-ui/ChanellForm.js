import { Container } from "@material-ui/core";
import React from "react";
import Controls from "../../components/patient-ui/Echannelling/Controls";
import {
  
  Form,
} from "../../components/patient-ui/Echannelling/useForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import channellServices from "../../services/echannelling.Service";

// const genderItems = [
//   { id: "male", title: "Male" },
//   { id: "female", title: "Female" },
// ];

// const initialFValues = {
//   id: 0,
//   fullname: "",
//   email: "",
//   mobile: "",
//   age: "",
//   nic: "",
//   gender: "male",
//   doctorId: "",
//   bookDate: new Date(),
// };

export default function EForm() {
  const handleSubmit = (e) => {
    console.log("submitted");

    e.preventDefault();

    const data = {
      fullname: fullname,
      nic: nic,
      email: email,
      mobile: mobile,
      age: age,
    };

    if(data.email.includes("@", 0)){
      // alert("email successfull");
    }else{
      console.log("fail");
      alert("email should contain a @");
      return null;
    }
    
    var tempMobile=data.mobile;
    if(tempMobile.length === 10){
      // alert("number sucessfull");
    }else{
      alert("number must contain 10 digits");
      return null;
    }


    channellServices
      .create(data)

      .then((response) => {
        // alert("success");
        console.log("inside create" + response.data);
        console.log("inside then" + response.data);
        window.location.reload();
        
      })
      .catch((e) => {
        // alert(e );
        console.log("this is the error:" + e);
      });
  };

  const [fullname, setFullName] = useState("");
  const [nic, setNICNumber] = useState("");
  const [email, setEmailAddress] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [age, setAge] = useState("");

  const handlenameChange = (event) => {
    setFullName(event.target.value);
  };
  const handlenicChange = (event) => {
    setNICNumber(event.target.value);
  };

  const handleemailChange = (event) => {
    setEmailAddress(event.target.value);
  };
  const handlmboileChange = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleageChange = (event) => {
    setAge(event.target.value);
  };

  const [isDisabled, setIsDisabled] = useState(true);

  function changeCheck() {
    setIsDisabled(!isDisabled);
  }

  return (
    <Container maxWidth="md">
      <h3>E Channelling</h3>
      <h4>For channelling entry your details below</h4>
      <br />
      <Form onSubmit={handleSubmit}>
        <container>
          <Controls.Input
            name="fullname"
            label="Full Name"
            value={fullname}
            onChange={handlenameChange}
            required
          />
          {/* <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    /> */}
          <Controls.Input
            label="National Identity Card Number (NIC)"
            name="nic"
            value={nic}
            onChange={handlenicChange}
            required
          />

          <Controls.Input
            label="Email"
            name="email"
            value={email}
            onChange={handleemailChange}
            required
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={mobile}
            onChange={handlmboileChange}
            required
          />
          <Controls.Input
            label="Age"
            name="age"
            value={age}
            onChange={handleageChange}
            required
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
              text="Channel"
            />
            
            <Link to="/patient/inquiry">
              <Controls.Button text="Inquiry" />
            </Link>
          </div>
        </container>
      </Form>
    </Container>
  );
}
