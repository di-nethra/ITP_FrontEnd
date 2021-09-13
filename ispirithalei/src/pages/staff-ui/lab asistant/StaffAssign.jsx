import "./staffassign.css"
import 'date-fns';
import React from 'react';
import { useEffect, useState } from 'react';
import TestDataService from "../../../services/tests.service";
import Grid from '@material-ui/core/Grid';

export default function StaffAssign() {
    /*const initialTestState = {
        specimenid: "",
        title: "",
        description: "",
        published: false
    };
    const [CurrentTest, setCurrentTest] = useState(initialTestState);
    const getTest = id => {
        Tes.get(id)
            .then(response => {
                setCurrentTest(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getTest(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentTest({ ...CurrentTest, [name]: value });
    };

    const updatePublished = status => {
        var data = {
            id: currentTutorial.id,
            title: currentTutorial.title,
            description: currentTutorial.description,
            published: status
        };

        TutorialDataService.update(currentTutorial.id, data)
            .then(response => {
                setCurrentTutorial({ ...currentTutorial, published: status });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const updateTest = () => {

        TutorialDataService.update(currentTutorial.id, currentTutorial)
            .then(response => {
                console.log(response.data);
                setMessage("The tutorial was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };*/

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
                    <form className="newUserForm" /*onSubmit={updateTest}*/>
                        <div className="newUserItem">
                            <label>Incharge Lab Assistant ID</label>
                            <input type="text" placeholder="Insert a lab asistant ID" />
                        </div>
                        <div className="newUserItem">
                            <label>Incharge Lab Assistant Name</label>
                            <input type="text" placeholder="Insert a lab asistant name" />
                        </div>

                        <button className="newUserButton">Assign Test(Update Test)</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
