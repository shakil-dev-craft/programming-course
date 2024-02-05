import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>This is Navbar</h1>
            <nav className="flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;