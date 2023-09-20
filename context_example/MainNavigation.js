import { Link } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "./context";

function MainNavigation() {
    const { theme } = useContext(AppContext);
    return (
        <div>
            <div>Theme name is {theme}</div>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>All blogs</Link>
                    </li>
                    <li>
                        <Link to='/new-blog'>New blog</Link>
                    </li>
                    <li>
                        <Link to='/qa/pics/1'>QAPics1</Link>
                    </li>
                    <li>
                        <Link to='/qa/pics/2'>QAPics2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainNavigation;
