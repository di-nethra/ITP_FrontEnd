import React from "react";
import WelcomeMessage from "../../components/patient-ui/Home/WelcomeMessage";
import {Container} from "@material-ui/core";
import ServicesCard from "../../components/patient-ui/Home/ServicesCard";
import CovidCard from "../../components/patient-ui/Home/CovidCard";


function Home() {
    return (
        <Container style={{overflowX:"hidden"}}>
            <WelcomeMessage />
            <ServicesCard />
            <CovidCard />
        </Container>
    );
}

export default Home;