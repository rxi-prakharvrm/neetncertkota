import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header-ctr">
            <div className="header-inner-ctr">
                <Link to="/" className="logo-ctr">
                    <img src="./images/logo.png" alt="logo" className="logo" />
                </Link>
                <div className="header-tabs-ctr">
                    <Link to="/" className="header-tab">HOME</Link>
                    <Link to="/blog" className="header-tab">BLOG</Link>
                    <Link to="/ncert-solutions" className="header-tab">NCERT SOLUTIONS</Link>
                    <Link to="/request-question" className="header-tab">REQUEST QUESTION</Link>

                    <ul className="header-dropdown-ctr">
                        <li className="header-dropdown">
                            <Link to="/interview-shorts" className="header-dropbtn">INTERVIEW SHORTS <i className="fa fa-angle-down fa-lg"></i></Link>
                            <div className="header-dropdown-content">
                                <Link to="/interview-shorts" className="header-dropdown-link">INTERVIEW SHORTS</Link>
                                <Link to="/inspiring-stories" className="header-dropdown-link">INSPIRING STORIES</Link>
                                <Link to="/about" className="header-dropdown-link">ABOUT US</Link>
                                <Link to="/contact" className="header-dropdown-link">CONTACT US</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to="/contact" className="contact-us-btn">CONTACT US</Link>
                <div className="icon-hamburgur-menu-ctr">
                    <img src="./images/hamburgur-menu.png" alt="hamburgur-menu" className="icon-hamburgur-menu" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;