import React from 'react';
import './error.css'

const ErrorPage = () => {
    return (
        <div className="error-page ">
            <div className="container">
                <img  src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="Error" className="error-image lg:ml-64" />
                <h1>Oops! Something went wrong.</h1>
                <p>We apologize for the inconvenience. Please try again later.</p>
            </div>
        </div>
    );
};

export default ErrorPage;