import "./testresult.css"
import React from 'react';


export default function TestReslt() {
    return (

        <div className="newUser">
            <span className="newUserTitle">Specimen Result Insertion Form</span>
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
                <span className="newUserTitle1">Insert Test Results</span>
                <div class="detailsbock">
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Specimen Property</label>
                            <input type="text" placeholder="Insert Specimen property" required/>
                        </div>
                        <div className="newUserItem">
                            <label>Specimen Property Result</label>
                            <input type="text" placeholder="Insert specimen property reslt" required />
                        </div>
                        <div className="newUserItem1">
                            <label>Before subbmit results please double check</label>
                        </div>
                    
                        <button className="newUserButton">Submit test reults</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

