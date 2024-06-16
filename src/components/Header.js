import '../css/Header.css';

function Header({ toggleSidebar }) {
    return (
        <header className='header'>
            <div className='menu-icon' onClick={toggleSidebar}>
                <i className="zmdi zmdi-menu zmdi-hc-1g"></i>
            </div>
            <p>Krupakar Reddy</p>
            <div id='spacer'></div>
            <nav>
                <ul>
                    <li><div><a href="#about">About</a></div></li>
                    <li><div><a href="#portfolio">Portfolio</a></div></li>
                    <li><div><a href="#interests">Interests</a></div></li>
                    <li><div><a href="#projects">Projects</a></div></li>
                    <li><div><a href="#contact">Contact</a></div></li>
                </ul>
            </nav>
            <div className='more-icon'><i className="zmdi zmdi-more-vert"></i></div>
        </header>
    );
}

export default Header;