import React from 'react'
import labreport from '../../assets/images/labreport.svg'
import './labreport.css'

export default function LabReport() {
    return (
            <div class="detailsbock11">
                <span className="newUserTitle11">Lab Reports</span><br></br>
                <div class="detailsbock12">
                    <form className="newUserForm11" >
                        <div className="newUserItem11">
                            <label>Specimen ID(Printed on bill)</label>
                            <input
                                name="specimenid"
                                required
                                type="text"
                                minLength="3"
                                maxLength="3"
                                placeholder="Ex:100"

                            />
                        </div>
                        <div className="newUserItem11">
                            <label>Mobile Number(Printed on bill)</label>
                            <input

                                name="specimenid"
                                type="text"
                                required
                                minLength="10"
                                maxLength="10"
                                placeholder="Enter mobile number"

                            />
                        </div>

                        <button className="newUserButton11">Get Lab Reports</button>
                    </form>
                    <img src={labreport} alt="labreports" style={{ height: 400, width: 400 }} class="imglab"/>
                </div>
                
            </div>
        

    )
}
