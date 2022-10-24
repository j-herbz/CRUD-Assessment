import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to="/">Click here to return to Home Page.</Link> 
        </div>
    );
};

export default Page404;