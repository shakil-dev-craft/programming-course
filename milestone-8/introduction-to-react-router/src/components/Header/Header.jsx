import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="mb-5">
            <h1>This is Navbar</h1>
            <nav className="flex gap-5">
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/contact">Contact</Link>
                {/* <Link to="/users">Users</Link> */}
            </nav>
        </div>
    );
};

export default Header;