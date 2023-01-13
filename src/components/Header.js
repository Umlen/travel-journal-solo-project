import logo from '../logo.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <p>my travel journal</p>
        </header>
    );
}

export default Header;