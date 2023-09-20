import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div> Sorry, page not found! </div>
            <Link to="/"> Back to home </Link>
        </>
    )
}

export default NotFound;