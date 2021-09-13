import React from "react";
import "./PageNotFoud.css"
import {Button, Container} from "@material-ui/core";
import { useHistory} from "react-router-dom";

export default function PageNotFound() {
    const history = useHistory();
    return (
        <Container maxWidth={"md"}>
                        <div className="four_zero_four_bg">
                            <h1 align="center">404</h1>
                        </div>

                        <center>
                            <h1>
                                Something is missing.
                            </h1>
                                <Button
                                    variant={"contained"}
                                    size={"large"}
                                    color="primary"
                                    style={{ marginTop:"20px",padding:"15px 30px"}}
                                    onClick={history.goBack}
                                >
                                    Go Back
                                </Button>
                        </center>
        </Container>
    );
}