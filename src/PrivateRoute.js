import {Redirect, Route} from "react-router-dom";

function PrivateRoute({ children }) {
    let temp = sessionStorage.getItem("user");
    let currentUser = JSON.parse(temp);
    return (
        <Route
            render={() =>
                currentUser !== null ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;