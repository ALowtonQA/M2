import { Link } from "react-router-dom";

function Navigation () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All blogs</Link>
                    </li>
                    <li>
                        <Link to='/new-blog'>New blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;