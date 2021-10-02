import React from "react";
import { Button, Container, Slide } from "@material-ui/core";
import { Link } from "react-router-dom";

function About() {
    return (
        <Container>
        
        <Slide direction="up" in={true} timeout={1000}>
            <div style={{ marginBottom: 50 }}>
                <div>
                    <h1 style={{ textAlign: "center", margin: 30 }}>WHO ARE WE</h1>
                </div>
                <div>
                    <p style={{ textAlign: "justify", margin: 30 }}>
                        Ispirithalei is Sri Lanka's first small-scale one-stop online health care system. Ispirithalei was established
                        and maintained with the purpose of decentralizing the online health care systems and bringing online healthcare
                        to everyone in Sri Lanka.
                        <br /><br />
                        We provide services ranging from E-Channeling, online pharmacy, and drug dispensing to online lab test retrieval
                        and maintenance. Ispirithalei has hired the best doctors, pharmacists, lab technicians, and the best healthcare
                        professionals in the country to provide you with the best services. We are equipped with the best technology and
                        the best IT professionals in the industry to back us up in providing you with uninterrupted and reliable service.
                        Ispirithalei's online healthcare platform enables easy, user-friendly, and simple access to medicare and health
                        services to your fingertips.
                        <br /><br />
                        Join the Ispirithalei family and enjoy healthcare like never before. No interruptions. Secure. No waiting in queue
                        to book your appointment. Everything at your fingertips from the comfort of your home.
                    </p>
                    <p style={{ textAlign: "center" }}><strong>- LEAVE YOUR HEALTHCARE WORRIES WITH US -</strong></p>

                    <Link to="/patient/inquiry" style={{ textDecoration: "none" }}>
                        <center><Button size="large" variant="contained" color="primary" style={{ marginTop: 40, width: "50%" }}>
                            Direct your inquiries at us through here
                        </Button></center>
                    </Link>
                </div>
            </div>
            </Slide>

            <center><hr style={{ width: "70%" }}></hr></center>

            <div style={{ marginBottom: 50 }}>
                <div>
                    <h1 style={{ textAlign: "center", margin: 30 }}>OUR MISSION</h1>
                </div>
                <div>
                    <p style={{ textAlign: "center", margin: 30 }}>
                        To bring uninterrupted, quality healthcare to all Sri Lankans without any exception. We strive to provide consistency in
                        healthcare. Ispirithalei is on a mission to become the biggest, the most reliable, and quality online healthcare platform in
                        the country
                    </p>
                </div>
            </div>

            <center><hr style={{ width: "70%" }}></hr></center>

            <div style={{ marginBottom: 50 }}>
                <div>
                    <h1 style={{ textAlign: "center", margin: 30 }}>OUR VISION</h1>
                </div>
                <div>
                    <p style={{ textAlign: "center", margin: 30 }}>
                        Become the most sought after healthcare brand of Sri Lanka which is loved by people all across the country and to provide
                        the best online healthcare service in the country.
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default About;