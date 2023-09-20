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
                    <li>
                        <Link to='/qa/pics/1'>QA Pics 1</Link>
                    </li>
                    <li>
                        <Link to='/qa/pics/2'>QA Pics 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;