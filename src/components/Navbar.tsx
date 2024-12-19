import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar-custom">
            {/* Left Side Logo */}
            <div className="d-flex align-items-center">
                <div className="navbar-brand">Mishab</div>
                <div className="navbar-line"></div>
            </div>

            {/* Center Links */}
            <div className="nav-links d-none d-md-flex">
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/products">My Products</Link>
                <Link href="/journey">My Journey</Link>
            </div>

            {/* Right Side Button */}
            <div className="d-flex align-items-center">
                <div className="navbar-line-two"></div>
                <button className="connect-btn">Connect Me</button>

                {/* Responsive Menu Icon */}
                <div className="menu-icon ms-3">
                    <img src="/img/menu.svg" alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
