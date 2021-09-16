import React from 'react'
import './labhelp.css'
import labimage from '../../../assets/images/helplab.svg'

export default function LabHelp() {
    return (
        <div>
            <div class="helpblock">
                <div class="content1">
                    <span class="title11">Ispirithalei Laboratory user guide</span>
                </div>
                <br></br>
                <div class="content11">
                    <span class="title11">Ispirithalei Laboratory user guide gives the overall idea about how this work. Please Contact Chamod(Admin) to get overall idea about it</span>
                    <br></br>
                    <span class="title11">Contact No- +94779856628</span>
                    <br></br>
                    <br></br>
                    <img src={labimage} alt="brandLogo"  />
                </div>
                
            </div>
        </div>
    )
}
