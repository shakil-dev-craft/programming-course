import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    // console.error(error);

    return (
        <div>
            <h1>Oops! something wrong</h1>
            <i>{error?.statusText || error?.message}</i>
            {
                error?.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;